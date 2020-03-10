import React from 'react'
// 状态提升示例

const scaleName = {
    'c': '摄氏',
    'f': '华氏'
}

function tryConvert(input, convert) {
    let temperature = parseFloat(input)
    if (isNaN(temperature)) return ''
    return convert(temperature)
}
function toCelsius(fahrenheit) {
    // f->c
    return (fahrenheit - 32) * 5 / 9
}
function toFahrenheit(celsius) {
    // c->f
    return (celsius * 9 / 5) + 32
}

class TemperatureInput extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>单位为{scaleName[this.props.scale]}</legend>
                <input type="text" value={this.props.temperature}
                    onChange={(e) => { this.props.handleTemperatureChange(e.target.value) }} />
            </fieldset>
        )
    }
}
function BoilVerdict(props) {
    let boil = props.celsius >= 100 ? '' : 'not'
    return (
        <h3>the water would {boil} boil</h3>
    )
}

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scale: 'c',
            temperature: ''
        }
    }

    handleCelsiusChange = (temperature) => {
        // 更新摄氏度变化
        this.setState((state) => ({
            scale: 'c',
            temperature
        }))
    }
    handleFahrenheitChange = (temperature) => {
        // 更新华氏度变化
        this.setState((state) => ({
            scale: 'f',
            temperature
        }))
    }
    render() {
        let celsius = this.state.scale === 'c' ? this.state.temperature : tryConvert(this.state.temperature, toCelsius)
        let fahrenheit = this.state.scale === 'f' ? this.state.temperature : tryConvert(this.state.temperature, toFahrenheit)

        return (
            <div>
                <TemperatureInput scale='c'
                    temperature={celsius}
                    handleTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale='f'
                    temperature={fahrenheit}
                    handleTemperatureChange={this.handleFahrenheitChange} />
                <BoilVerdict celsius={celsius} />
            </div>
        )
    }
}

export default Calculator