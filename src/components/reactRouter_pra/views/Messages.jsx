import React from 'react'
import { Route } from 'react-router-dom'
import MyNavlink from '../MyNavlink'

class MessageDetil extends React.Component {

    state = {
        list: [
            { id: 1, title: 'msg1', content: '伞兵1号lbw准备就绪' },
            { id: 3, title: 'msg3', content: '伞兵3号lbw准备就绪' },
            { id: 5, title: 'msg5', content: '伞兵3号lbw准备就绪' }
        ]
    }
    render() {
        let id = parseInt(this.props.match.params['id'])
        let message = this.state.list.find((val) => id === val.id)
        return (
            <ul>
                <li>ID：{message.id}</li>
                <li>Title: {message.title}</li>
                <li>Context：{message.content}</li>
            </ul>
        )
    }
}

class Messages extends React.Component {
    state = {
        list: []
    }
    componentDidMount() {
        let list = [
            { id: 1, title: 'msg1' },
            { id: 3, title: 'msg3' },
            { id: 5, title: 'msg5' }
        ]
        let timerId = setInterval(() => {
            this.setState(state => ({
                list
            }))
            clearInterval(timerId)
        }, 2000);
    }
    pushToDetil = (url) => {
        this.props.history.push(url)
    }
    replaceToDetil = (url) => {
        this.props.history.replace(url)
    }
    render() {
        let vul = this.state.list.map((val, index) => (
            <li key={index}>
                <MyNavlink to={`/home/message/${val.id}`}>{val.title}</MyNavlink>
                <button onClick={() => this.pushToDetil(`/home/message/${val.id}`)}>push查看</button>
                <button onClick={() => this.replaceToDetil(`/home/message/${val.id}`)}>replace查看</button>
            </li>
        ))
        return (
            <div>
                <ul>{vul}</ul>
                <Route path='/home/message/:id' component={MessageDetil} />
            </div>
        )
    }
}

export default Messages