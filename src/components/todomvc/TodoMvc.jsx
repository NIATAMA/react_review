import React from 'react'
// todomvc的实现

// 记得在index.html中引入 base.js base.css index.css
import './base.css'
import './index.css'

// 子组件
import TodoList from './TodoList.jsx'

// header
class Header extends React.Component {

    constructor(props) {
        super(props)
        this.mipt = React.createRef()
    }

    componentDidMount() {
        // 处理主输入框自动聚焦
        if (this.mipt) this.mipt.current.focus()
    }

    /**
     * 添加todos
     * @e 事件合成对象
     */
    insertTodos = (e) => {
        // 回车添加-添加完毕清空输入框- 不能为空
        let value = e.target.value
        if (e.keyCode !== 13 || !value) return
        this.props.onInsertTodos(value)
        e.target.value = ''
    }

    render() {
        return (
            <header className="header">
                <h1>mytodos</h1>
                <input className="new-todo" placeholder="What needs to be done?"
                    ref={this.mipt} onKeyDown={this.insertTodos} />
            </header>
        )
    }
}

// footer
function Footer(props) {
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{props.left}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className={props.hash === '' ? 'selected' : ''} href="#/">All</a>
                </li>
                <li>
                    <a className={props.hash === 'active' ? 'selected' : ''} href="#/active">Active</a>
                </li>
                <li>
                    <a className={props.hash === 'completed' ? 'selected' : ''} href="#/completed">Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={props.clearCompleted}>Clear completed</button>
        </footer>
    )
}

class TodoMvc extends React.Component {

    state = {
        todos: [
            { completed: false, title: '测试文本', id: 1 },
        ],
        mainIpt: '',
        hash: ''
    }

    componentDidMount() {
        // 检查localStorage中是否有数据
        let rdata = window.localStorage.getItem('reactTodomvc')
        if (rdata) {
            this.setState({
                todos: JSON.parse(rdata)
            })
        } else {
            window.localStorage.setItem('reactTodomvc', JSON.stringify([]))
        }
        // 初始化hash
        this.hashChange()
        window.addEventListener('hashchange', this.hashChange)
    }

    /**
     * 更新state.todos
     * @todo 更新的元素或者数组
     */
    changeTodos = (todo) => {
        // 判断todo是数组还是对象
        let newtodos
        if (Array.isArray(todo)) {
            // 是数组
            newtodos = todo
        } else {
            // 是对象
            newtodos = this.state.todos.map(val => (val.id === todo.id ? todo : val))
        }
        // 更新数据
        this.setState({ todos: newtodos })
        window.localStorage.setItem('reactTodomvc', JSON.stringify(newtodos))
    }

    /**
     * 一次更改所有todo.completed
     * @state 目标状态
     */
    toggleAllTodos = (state) => {
        // 更新所有todos
        let newtodos = this.state.todos.map(val => {
            let newtodo = Object.assign(val)
            newtodo.completed = state
            return newtodo
        })
        this.changeTodos(newtodos)
    }

    /**
     * 删除一项todo
     * @id 删除项todo的id
     */
    deleteTodo = (id) => {
        // 筛选出未被删除的todo
        let newtodos = this.state.todos.filter(val => val.id !== id)
        // 更新todos
        this.changeTodos(newtodos)
    }

    /**
     * 添加state.todos
     * @todoTitle 添加的todo的标题
     */
    insertTodos = (todoTitle) => {
        // todo 是一个todos里的数组元素
        let newTodos = this.state.todos.slice()
        newTodos.unshift({ completed: false, title: todoTitle, id: newTodos[0] ? newTodos[0].id + 1 : 1 })
        this.setState({ todos: newTodos })
        window.localStorage.setItem('reactTodomvc', JSON.stringify(newTodos))
    }

    /**
     * 根据条件筛选todos
     */
    filterTodos = (type) => {
        switch (type) {
            case 'active':
                return this.state.todos.filter(val => !val.completed)
            case 'completed':
                return this.state.todos.filter(val => val.completed)
            default:
                return this.state.todos
        }
    }

    /**
     * 清除已完成todo
     */
    clearCompleted = () => {
        this.changeTodos(this.filterTodos('active'))
    }

    /**
     * 监听hash变化
     */
    hashChange = () => {
        this.setState({ hash: window.location.hash.substr(2) })
    }

    render() {
        // 筛选todos
        let todos = this.filterTodos(this.state.hash)
        // 无待办事项时隐藏
        let todoslist = this.state.todos.length > 0 ? (
            <TodoList todos={todos} updateTodos={this.changeTodos}
                toggleAllTodos={this.toggleAllTodos} deleteTodo={this.deleteTodo}
            />) : ''
        let footer = this.state.todos.length > 0 ? (
            <Footer left={this.filterTodos('active').length} clearCompleted={this.clearCompleted}
                hash={this.state.hash}
            />) : ''
        return (
            <section className="todoapp">
                <Header onInsertTodos={this.insertTodos} />
                {todoslist}
                {footer}
            </section>
        )
    }
}

export default TodoMvc