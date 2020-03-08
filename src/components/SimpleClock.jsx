import React from 'react'

class SimpleClock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, React</h1>
                <h2>It's {this.state.date.toLocaleString()}</h2>
            </div>
        )
    }
}

export default SimpleClock