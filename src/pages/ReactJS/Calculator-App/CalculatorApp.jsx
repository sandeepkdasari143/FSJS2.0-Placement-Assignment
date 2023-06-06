import { useState } from "react";

const CalculatorApp = () => {

  const [operand, setOperand] = useState("");
  const [isNewOperand, setIsNewOperand] = useState(true);

  const handleclick = (e) => {
    let input = e.target.value;
    if (input === "X") {
      input = "*";
    }
    
    if(operand==="0" || operand==="1" ||operand==="2"||operand==="3"||operand==="4"||operand==="5"||operand==="6"||operand==="7"||operand==="8"||operand==="9"){
      setIsNewOperand(false);
    }

    if (input === "+" || input === "-" || input === "*" || input === "/" || input === "%" || input===".") {
      setIsNewOperand(true);
      if (!operand) {
        return;
      }
      if (operand.charAt(operand.length - 1) === "+" || operand.charAt(operand.length - 1) === "-" || operand.charAt(operand.length - 1) === "*" || operand.charAt(operand.length - 1) === "/" || operand.charAt(operand.length - 1) === "%" || input===".") {
        return;
      }
    }
    if(input === "0" && operand === "0"){
      return;
    }
    if (input === "." && !isNewOperand) {
      return;
    }
    setOperand(operand + input);
  };

  const handleClearScreen = () => {
    setOperand("");
  };

  const handleDeleteDigit = () => {
    setOperand(operand.slice(0, -1));
  };

  const handleEvaluation = () => {
    try {
      if (operand.charAt(operand.length - 1) !== "+" || operand.charAt(operand.length - 1) !== "-" || operand.charAt(operand.length - 1) !== "*" || operand.charAt(operand.length - 1) !== "/" || operand.charAt(operand.length - 1) !== "%"){
        const result = eval(operand);
        setOperand(result.toString());
      }
    } catch (error) {
      setOperand("Invlaid Syntax");
    }
  };

  return (
    <div className="h-[92vh] flex flex-col items-center justify-center dark:text-slate-200">
      {/* heading */}
      <header>
        <h1>Calculator App</h1>
      </header>

      <main>

        <section className="flex flex-col w-[350px] bg-[rgba(39,41,58,0.6)] p-3 rounded-md">
          <input type="text" id="answer" value={operand}
            className="m-2 rounded-md px-3 py-2 outline-none border-2 border-pink-800 dark:border-pink-600 bg-pink-100 dark:bg-[rgb(39,41,58)]"
          />
  
          <div className="flex flex-row w-[100%]">
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="AC" onClick={handleClearScreen} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="DEL" onClick={handleDeleteDigit} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="%" onClick={handleclick} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="/" onClick={handleclick} />
          </div>
  
          <div className="flex flex-row w-[100%]">
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="7" onClick={handleclick} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="8" onClick={handleclick} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="9" onClick={handleclick} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="X" onClick={handleclick} />
          </div>
  
          <div className="flex flex-row w-[100%]">
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="4" onClick={handleclick} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="5" onClick={handleclick} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="6" onClick={handleclick} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="-" onClick={handleclick} />
          </div>
  
          <div className="flex flex-row w-[100%]">
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="1" onClick={handleclick} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="2" onClick={handleclick} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="3" onClick={handleclick} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="+" onClick={handleclick} />
          </div>
  
          <div className="flex flex-row w-[100%]">
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="00" onClick={handleclick} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="0" onClick={handleclick} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="." onClick={handleclick} />
            <input className="bg-pink-100 dark:bg-[rgb(39,41,58)] border-2 border-pink-800 dark:border-pink-600 rounded-md m-2 py-5 cursor-grab flex-1 dark:text-white" type="button" value="=" onClick={handleEvaluation} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default CalculatorApp;