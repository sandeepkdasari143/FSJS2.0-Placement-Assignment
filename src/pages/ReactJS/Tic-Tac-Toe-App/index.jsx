import React, { Component } from 'react';
import Board from './Board';
import GitHubButton from '../../../components/GitHubButton';
import calculateWinner from './calculateWinner';

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
        const desc = move ? `Revert Back to: #${move}` : 'Clear Board';

        return (
            <li key={move}>
                <button onClick={() => this.jumpTo(move)}>
                    {desc === 'Clear Board' ? <p className='border-2 border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white rounded-lg px-5 py-2'>{desc}</p> : <p className='py-1 text-pink-600 hover:underline'>{desc}</p>}
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
                    <GitHubButton to="https://github.com/sandeepkdasari143/FSJS2.0-Placement-Assignment/tree/master/src/pages/ReactJS/Tic-Tac-Toe-App"/>
                </div>

                <main className='w-[100%] h-[70%] dark:text-white flex justify-center items-center gap-[50px]'>
                    <section className="">
                        <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
                    </section>
                        
                    <section className="dark:text-white w-[400px] flex flex-col items-center">
                        <h1 className='font-bold text-5xl'>{status}
                            {winner === 'X' ?
                            <span className='font-bold text-5xl text-blue-600'>{winner}</span> :
                            <span className='font-bold text-5xl text-green-600'>{winner}</span> 
                            }
                            {xIsNext ?
                                <span className='font-bold text-5xl text-blue-600'>{(!winner && stepNumber!==9) && 'X'}</span> :
                                <span className='font-bold text-5xl text-green-600'>{(!winner && stepNumber!==9) && 'O'}</span>
                            }
                        </h1>
                        <ol className='font-normal text-xl flex flex-col m-3'>{moves}</ol>
                    </section>
                </main>
            </div>
        
        );
    }
}



export default Game;
