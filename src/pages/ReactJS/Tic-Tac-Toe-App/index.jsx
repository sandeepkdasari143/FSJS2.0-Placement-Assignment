import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
        history: [{ squares: Array(9).fill(null) }],
        stepNumber: 0,
        xIsNext: true
        };
    }

    handleClick(i) {
        const { history, stepNumber, xIsNext } = this.state;
        const current = history[stepNumber];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
        return;
        }

        squares[i] = xIsNext ? 'X' : 'O';

        this.setState({
            history: history.slice(0, stepNumber + 1).concat([{ squares }]),
            stepNumber: stepNumber + 1,
            xIsNext: !xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0
        });
    }

    render() {
        const { history, stepNumber, xIsNext } = this.state;
        const current = history[stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
        const desc = move ? `Go to move #${move}` : 'Go to game start';

        return (
            <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
        );
        });

        let status;
        if (winner) {
            status = `Winner: ${winner}`;
        } else if (stepNumber === 9) {
            status = "It's a draw!";
        } else {
            status = `Next player: ${xIsNext ? 'X' : 'O'}`;
        }

        return (
            <div className='relative min-h-[92vh] flex flex-col basis-[85%] bg-[rgb(245,245,251)] dark:bg-[rgb(20,20,31)]'>
                <div className='w-[100%] dark:bg-[rgb(27,27,39)] bg-pink-100 h-[30%] flex flex-col gap-3 items-center justify-center dark:text-white'>
                    <h1 className='text-white text-5xl font-extrabold'>Tic Tac Toe <span className='font-normal'>Game</span></h1>
                    <p>Simple yet complicated tic-tac-toe game, <br/>coded in React Class based Compponents.</p>
                </div>

                <main className='w-[100%] h-[70%] dark:text-white flex justify-center items-center gap-3'>
                    <section className="">
                        <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
                    </section>
                        
                    <section className="dark:text-white w-[400px]">
                        <h1 className='font-bold text-5xl'>{status}</h1>
                        <ol className='font-normal text-xl'>{moves}</ol>
                    </section>
                </main>
            </div>
        
        );
    }
}

function calculateWinner(squares) {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }

    return null;
}

export default Game;
