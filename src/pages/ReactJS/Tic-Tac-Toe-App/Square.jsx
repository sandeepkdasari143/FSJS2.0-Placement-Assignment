import React, { Component } from 'react';

class Square extends Component {
    render() {
        const { value, onClick } = this.props;

        return (
        <button className="group h-[100px] w-[100px] bg-white border-2 rounded-md" onClick={onClick}>
            <p className='text-3xl font-bold text-black'>{value}</p>
        </button>
        );
    }
}

export default Square;
