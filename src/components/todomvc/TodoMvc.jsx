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
            <span className="todo-count"><strong>0</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className="selected" href="#/">All</a>
                </li>
                <li>
                    <a href="#/active">Active</a>
                </li>
                <li>
                    <a href="#/completed">Completed</a>
                </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

class TodoMvc extends React.Component {

    state = {
        todos: [
            { completed: false, title: '测试文本', id: 1 },
        ],
        mainIpt: ''
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
        this.setState({
            todos: newtodos
        })
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
    }

    render() {
        // 无待办事项时隐藏
        let todoslist = this.state.todos.length > 0 ? (<TodoList todos={this.state.todos} updateTodos={this.changeTodos} />) : ''
        let footer = this.state.todos.length > 0 ? (<Footer />) : ''
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