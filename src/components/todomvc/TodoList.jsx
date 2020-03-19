import React from 'react'

class TodoList extends React.Component {

    state = {
        toggleAll: false,
        curEditing: '',
        curEditValue: '',
        curEditCompleted: null
    }

    componentDidMount() {
        // 判断所有todos，都已完成则将toggleAll更改为true
        let length = this.props.todos.filter(val => !val.completed).length
        if (!length) this.setState({ toggleAll: true })
    }
    /**
     * 更新单个todo
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
     * 一次更改所有todo.completed
     */
    toggleAllTodos = (e) => {
        let toggleAll = e.target.checked
        this.props.toggleAllTodos(toggleAll)
        // 更新state
        this.setState({ toggleAll })
    }

    /**
     * 删除一项todo
     * @id 删除项todo的id
     */
    deleteTodo = (id) => {
        // 更新todos
        this.props.deleteTodo(id)
    }

    /**
     * 双击label后显示可编辑的input
     */
    showEditInput = (val) => {
        // 1.更新curEditing为当前id
        // 2.处理input的值绑定问题
        this.setState({ curEditing: val.id, curEditValue: val.title, curEditCompleted: val.completed })
    }

    /**
     * 编辑todo的ipt
     * 
     */
    editTodoInput = (e) => {
        this.setState({ curEditValue: e.target.value })
    }

    /**
     * 停止编辑todo
     */
    endTodoEdit = (e) => {
        // 回车保存编辑 esc取消编辑
        switch (e.keyCode) {
            case 27:
                // 取消编辑
                this.setState({ curEditing: '' })
                return
            case 13:
                // 保存编辑
                let id = this.state.curEditing
                this.saveTodoEdit(id)
                break
            default:
                return
        }

    }
    /**
     * 保存todo条目的编辑
     * @id todo条目的id
     */
    saveTodoEdit = (id) => {
        // 不管怎么样都会取消编辑状态
        this.setState({ curEditing: '' })
        // 获取数据
        let val = this.state.curEditValue.trim()
        let completed = this.state.curEditCompleted
        // 文本框为空时删除该项，不为空保存
        if (!val) {
            this.deleteTodo(id)
            return
        }
        this.props.updateTodos({ completed, id, title: val })
    }


    render() {
        let list = this.props.todos.map(val => (
            <li className={`${val.completed ? 'completed' : ''} ${val.id === this.state.curEditing ? 'editing' : ''}`} key={val.id}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={val.completed}
                        onChange={() => this.updateTodo(val, !val.completed)} />
                    <label onDoubleClick={() => this.showEditInput(val)}>{val.title}</label>
                    <button className="destroy" onClick={() => this.deleteTodo(val.id)}></button>
                </div>
                <input className="edit" value={this.state.curEditValue}
                    onMouseEnter={e => e.target.focus()} onChange={this.editTodoInput}
                    onBlur={() => this.saveTodoEdit(val.id)} onKeyDown={this.endTodoEdit} />
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