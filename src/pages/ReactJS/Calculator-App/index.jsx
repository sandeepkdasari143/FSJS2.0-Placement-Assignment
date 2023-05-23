import CalculatorApp from "./CalculatorApp"
// import React from 'react'

const Calculator = () => {
  return (
    <div className='relative min-h-[92vh] flex flex-col basis-[85%] bg-[rgb(245,245,251)] dark:bg-[rgb(20,20,31)]'>
      <div className='w-[100%] dark:bg-[rgb(27,27,39)] bg-pink-100 h-[30%]'></div>
      <div className='w-[100%] h-[70%]'></div>

      <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
        <CalculatorApp />
      </div>
    </div>
  )
}

export default Calculator