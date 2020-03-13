import React from 'react'
// 这是用来练习redux的示例
// 容器组件
import Container from './container/Container'
// 引入store
import { store } from './_redux/store'
// 引入react-redux
import { Provider } from 'react-redux'

class ReduxIndex extends React.Component {
    render() {
        return (
            <Provider store={store}><Container /></Provider>
        )
    }
}

export default ReduxIndex