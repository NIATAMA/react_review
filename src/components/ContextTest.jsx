import React from 'react'
// 用于测试与学习react-context的组件

// 1.创建context,默认的value为light
const MyContext = React.createContext('light')

class ContextTest extends React.Component {
    render() {
        // 2.Provider组件传递context，定义当前value
        return (
            <MyContext.Provider value="lightblue">
                <Toolbar />
            </MyContext.Provider>
        )
    }
}

function Toolbar(props) {
    return (
        <div>
            <ThemeButton />
        </div>
    )
}

class ThemeButton extends React.Component {
    // 3.跨组件获取context
    // 3.1 指定context的类型
    static contextType = MyContext
    render() {
        return (<button>ThemeButton-{this.context}</button>)
    }
}



export default ContextTest