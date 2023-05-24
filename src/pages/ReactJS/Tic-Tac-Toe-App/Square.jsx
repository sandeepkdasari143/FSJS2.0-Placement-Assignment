import React, { Component } from 'react';

class Square extends Component {
    render() {
        const { value, onClick } = this.props;

        return (
        <button className="group h-[100px] w-[100px] bg-white border-2 dark:border-gray-400 border-pink-600 rounded-md" onClick={onClick}>
            {value === 'X' ?
                <h1 className='font-bold text-5xl text-blue-900'>{value}</h1> :
                <h1 className='font-bold text-5xl text-green-800'>{value}</h1> 
            }
        </button>
        );
    }
}

export default Square;
