import React from 'react'

class TodoList extends React.Component {

    state = {

    }
    // TODO: 列表遍历的问题
    render() {
        let list = this.props.todos.map(val => (
            <li className={val.completed ? 'completed' : ''} key={val.id}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={val.completed} />
                    <label>{val.title}</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" value="Rule the web" />
            </li>
        ))
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    <li className="completed">
                        <div className="view">
                            <input className="toggle" type="checkbox" checked />
                            <label>Taste JavaScript</label>
                            <button className="destroy"></button>
                        </div>
                        <input className="edit" value="Create a TodoMVC template" />
                    </li>
                    {list}
                </ul>
            </section>
        )
    }
}

export default TodoList