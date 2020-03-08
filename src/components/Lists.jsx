import React from 'react'

function Comment(props) {
    return (
        <div>
            <h3>{props.name}：</h3>
            <p>{props.content}</p>
        </div>
    )
}

class Lists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [
                { name: 'zhang3', content: '有人吗' },
                { name: 'Li4', content: '有啊' },
                { name: 'zhang3', content: '尼壕啊~' },
                { name: 'wang5', content: '新人你好~' },
                { name: 'qian6', content: '点点点' },
                { name: 'zhang3', content: 'qian宝放心飞，妈妈永相随' },
                { name: 'wang5', content: '男妈妈爬！！！' },
            ]
        }
    }
    render() {
        return (
            this.state.comments.map((val, index) => (<Comment key={val.name + index} name={val.name} content={val.content} />))
        )
    }
}

export default Lists