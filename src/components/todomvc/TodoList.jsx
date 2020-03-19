import React from 'react'

class TodoList extends React.Component {

    state = {
        toggleAll: false
    }

    componentDidMount() {
        // 判断所有todos，都已完成则将toggleAll更改为true
        let length = this.props.todos.filter(val => !val.completed).length
        if (!length) this.setState({ toggleAll: true })
    }
    /**
     * 更新todos
     * @oldtodo 旧的todo
     * @value 更新的值
     */
    updateTodo = (oldtodo, value) => {
        if (value === '') return
        let newtodo = Object.assign(oldtodo)
        // 判断是更新状态还是更新内容
        switch (typeof value) {
            case 'string':
                newtodo.title = value
                break
            case 'boolean':
                newtodo.completed = value
                break
            default:
                break
        }
        // 调用父组件提供的更新方法
        this.props.updateTodos(newtodo)
    }

    /**
     * 更新todos
     * @oldtodo 旧的todo
     * @value 更新的值
     */
    updateTodos = (oldtodo, value) => {
        if (value === '') return
        let newtodo = Object.assign(oldtodo)
        // 判断是更新状态还是更新内容
        switch (typeof value) {
            case 'string':
                newtodo.title = value
                break
            case 'boolean':
                newtodo.completed = value
                break
            default:
                break
        }
        // 调用父组件提供的更新方法
        this.props.updateTodos(newtodo)
    }

    /**
     * 一次更改所有todo.completed
     */
    toggleAllTodos = (e) => {
        let toggleAll = e.target.checked
        // 更新所有todos
        let newtodos = this.props.todos.map(val => {
            let newtodo = Object.assign(val)
            newtodo.completed = toggleAll
            return newtodo
        })
        this.props.updateTodos(newtodos)
        // 更新state
        this.setState({ toggleAll })
    }

    /**
     * 删除一项todo
     * @id 删除项todo的id
     */
    deleteTodo = (id) => {
        // 筛选出未被删除的todo
        let newtodos = this.props.todos.filter(val => val.id !== id)
        // 更新todos
        this.props.updateTodos(newtodos)
    }

    /**
     * 双击label后显示可编辑的input
     */
    showEditInput = (e) => {

    }


    // TODO: 双击label进入编辑模式
    render() {
        let list = this.props.todos.map(val => (
            <li className={val.completed ? 'completed' : ''} key={val.id}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={val.completed}
                        onChange={() => this.updateTodo(val, !val.completed)} />
                    <label>{val.title}</label>
                    <button className="destroy" onClick={() => this.deleteTodo(val.id)}></button>
                </div>
                <input className="edit" value="Rule the web" />
            </li>
        ))
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox"
                    checked={this.state.toggleAll} onChange={this.toggleAllTodos} />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {list}
                </ul>
            </section>
        )
    }
}

export default TodoList