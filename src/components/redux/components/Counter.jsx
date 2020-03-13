import React from 'react'
import propTypes from 'prop-types'

class Counter extends React.Component {

    // 声明并检查接收指定props
    static propTypes = {
        count: propTypes.number.isRequired,
        increment: propTypes.func.isRequired,
        decrement: propTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.selt = null
    }

    clickIncrement = () => {
        // 增
        let num = parseInt(this.selt.value)
        this.props.increment(num)
    }
    clickDecrement = () => {
        // 减num
        let num = parseInt(this.selt.value)
        this.props.decrement(num)
    }
    clickIncrementIfOdd = () => {
        // 奇数增
        let times = this.props.count
        if (times % 2 !== 1) return
        let num = parseInt(this.selt.value)
        this.props.increment(num)
    }
    clickIncrementAync = () => {
        // 奇数增
        let num = parseInt(this.selt.value)
        // 定时器模拟
        setTimeout(() => {
            this.props.increment(num)
        }, 2000)
    }

    render() {
        let count = this.props.count
        return (
            <div>
                <p>click {count} times</p>
                <select ref={selt => { this.selt = selt }}>
                    <option value="1">1</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                </select>&nbsp;
                <button onClick={this.clickIncrement}>+</button>&nbsp;
                <button onClick={this.clickDecrement}>-</button>&nbsp;
                <button onClick={this.clickIncrementIfOdd}>increment if odd</button>&nbsp;
                <button onClick={this.clickIncrementAync}>increment async</button>
            </div>
        )
    }
}

export default Counter