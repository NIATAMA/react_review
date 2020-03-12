import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
// 包装路由组件-navlink
import MyNavlink from '../MyNavlink'
// 子组件
import Messages from './Messages'

function News(props) {
    return (<h3>News子组件</h3>)
}
class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavlink to='/home/news'>News</MyNavlink>
                        </li>
                        <li>
                            <MyNavlink to="/home/message">Message</MyNavlink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path='/home/news' component={News} />
                        <Route path='/home/message' component={Messages} />
                        <Redirect to='/home/news' />
                    </Switch>
                </div>
            </div>
        )
    }
}
export default Home