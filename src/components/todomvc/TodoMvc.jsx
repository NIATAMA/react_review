import React from 'react'
// todomvc的实现

// 记得在index.html中引入 base.js base.css index.css
import './base.css'
import './index.css'

// 子组件
import TodoList from './TodoList.jsx'

// header
function Header(props) {
    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" />
        </header>
    )
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
            { completed: false, title: '测试文本', id: 'test' },
        ],
        mainIpt: ''
    }

    /**
     * 更新state.todos
     * @todo 更新的元素
     */
    changeTodos = (todo) => {
        // todo 是一个todos里的数组元素
        let newtodos = this.state.todos.map(val => (val.id === todo.id ? todo : val))
        this.setState({
            todos: newtodos
        })
    }

    render() {
        return (
            <section className="todoapp">
                <Header />
                <TodoList todos={this.state.todos} updateTodos={this.changeTodos} />
                <Footer />
            </section>
        )
    }
}

export default TodoMvc