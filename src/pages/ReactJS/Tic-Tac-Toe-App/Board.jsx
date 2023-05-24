import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    renderSquare(i) {
        const { squares, onClick } = this.props;

        return <Square value={squares[i]} onClick={() => onClick(i)} />;
    }

    render() {
        return (
        <article className='w-[100%] flex flex-col gap-3'>
            <section className="flex gap-3">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </section>
            <section className="flex gap-3">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </section>
            <section className="flex gap-3">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </section>
        </article>
        );
    }
}

export default Board;
