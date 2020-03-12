import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// css
import './RouterIndex.css'
// 包装路由组件-navlink
import MyNavlink from './MyNavlink'
// 子组件
import Home from './views/Home'

function About(props) {
    return (<h3>About组件内容</h3>)
}

class RouterIndex extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*导航路由链接*/}
                            <MyNavlink className="list-group-item" to='/about'>about</MyNavlink>
                            <MyNavlink className="list-group-item" to='/home'>home</MyNavlink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*可切换的路由组件*/}
                                <Switch>
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                    <Redirect to="/home" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default RouterIndex