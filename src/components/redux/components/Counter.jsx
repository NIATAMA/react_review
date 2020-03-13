import React from 'react'

class Counter extends React.Component {


    clickIncrement = (num) => {
        // 增num
    }
    clickDecrement = (num) => {
        // 减num
    }

    render() {
        return (
            <div>
                <p>click 9 times</p>
                <select>
                    <option value="1">1</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                </select>&nbsp;
                <button>+</button>&nbsp;
                <button>-</button>&nbsp;
                <button>increment if odd</button>&nbsp;
                <button>increment async</button>
            </div>
        )
    }
}

export default Counter