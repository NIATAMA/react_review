import React from 'react'

class StateTest extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sa: [],
            sb: 2
        }
        // 绑定函数的this
        this.sbPlus = this.sbPlus.bind(this)
        this.pushToSa = this.pushToSa.bind(this)
    }

    sbPlus() {
        console.log('aaa')
        this.setState(state => ({
            sb: ++state.sb
        }))
    }
    pushToSa() {
        this.setState((state) => ({
            sa: state.sa.concat(state.sb)
        }))
    }

    render() {
        return (
            <div>
                <h3>StateTest</h3>
                <button onClick={this.sbPlus}>sb++++</button>
                <button onClick={this.pushToSa}>push sb to sa[]</button>
            </div>
        )
    }
}

export default StateTest

