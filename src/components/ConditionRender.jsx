import React from 'react'

function Greeting(props) {
    let vnode
    if (props.flag) {
        vnode = (<h3>xxx,欢迎，宁已登录</h3>)
    } else {
        vnode = (<h3>未登录，请去登录</h3>)
    }
    return vnode
}
function LoginBut(props) {
    return (<button onClick={props.onClick}>登入</button>)
}
function LogoutBut(props) {
    return (<button onClick={props.onClick}>登出</button>)
}


class ConditionRender extends React.Component {
    constructor(props) {
        super(props)
        this.state = { flag: false }
    }

    logBut = (flag, e) => {
        console.log('logBut -> ' + flag)
        this.setState((state) => ({
            flag
        }))
    }

    render() {
        let vbut
        if (this.state.flag) {
            vbut = <LogoutBut onClick={(e) => this.logBut(false, e)} />
        } else {
            vbut = <LoginBut onClick={(e) => this.logBut(true, e)} />
        }
        return (
            <div>
                <Greeting flag={this.state.flag} />
                {vbut}
                {this.state.flag ? (<h4>flag=true</h4>) : (<h4>flag=false</h4>)}
            </div>
        )
    }
}

export default ConditionRender