import React, { Component } from 'react';
import Board from './Board';
import GitHubButton from '../../../components/GitHubButton';

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
        const desc = move ? `Go to Move: #${move}` : 'Click To Start Game';

        return (
            <li key={move}>
                <button onClick={() => this.jumpTo(move)}>
                    {desc === 'Click To Start Game' ? <p className='border-2 border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white rounded-lg px-5 py-2'>{desc}</p> : <p className='py-1 text-pink-600 hover:underline'>{desc}</p>}
                </button>
            </li>
        );
        });

        let status;
        if (winner) {
            status = `Winner: `;
            
        } else if (stepNumber === 9) {
            status = "It's a draw!";
        } else {
            status = `Next player: `;
        }

        return (
            <div className='relative min-h-[92vh] flex flex-col basis-[85%] bg-[rgb(245,245,251)] dark:bg-[rgb(20,20,31)]'>
                <div className='w-[100%] dark:bg-[rgb(27,27,39)] bg-pink-100 h-[30%] flex flex-col gap-3 items-center justify-center dark:text-white'>
                    <h1 className='dark:text-white text-[rgb(20,20,31)] text-5xl font-extrabold'>Tic Tac Toe <span className='font-normal text-[rgb(20,20,31)] dark:text-white'>Game</span></h1>
                    <p>Simple yet complicated tic-tac-toe game, <br />coded in <span className="text-[rgb(240,46,101)]">React class-based</span> Components.</p>
                    <GitHubButton to=""/>
                </div>

                <main className='w-[100%] h-[70%] dark:text-white flex justify-center items-center gap-[50px]'>
                    <section className="">
                        <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
                    </section>
                        
                    <section className="dark:text-white w-[400px]">
                        <h1 className='font-bold text-5xl'>{status}
                            {winner === 'X' ?
                            <span className='font-bold text-5xl text-blue-900'>{winner}</span> :
                            <span className='font-bold text-5xl text-green-800'>{winner}</span> 
                            }
                            {xIsNext ?
                                <span className='font-bold text-5xl text-blue-900'>{(!winner && stepNumber!==9) && 'X'}</span> :
                                <span className='font-bold text-5xl text-green-800'>{(!winner && stepNumber!==9) && 'O'}</span>
                            }
                        </h1>
                        <ol className='font-normal text-xl flex flex-col m-3'>{moves}</ol>
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
