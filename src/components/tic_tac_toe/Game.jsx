import React from 'react'
import './tictac.css'
import './tictac.js'

// 判断是否出现赢家
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }

    updateBoardState = (i) => {
        // 数据不可变，故直接复制个新的数组
        const squares = this.state.squares.slice()
        // 赢家已出现/某格已被填充
        if (calculateWinner(squares) || squares[i]) return
        // 游戏继续
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState(state => ({ squares, xIsNext: !state.xIsNext }))
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.updateBoardState(i)} />;
    }

    render() {
        // 状态
        const winner = calculateWinner(this.state.squares)
        let status

        if (winner) {
            // 出现赢家
            status = 'Winner is ' + winner
        } else {
            // 无赢家
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}


export default Game