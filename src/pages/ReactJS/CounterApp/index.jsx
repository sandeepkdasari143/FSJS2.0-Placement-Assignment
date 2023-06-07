import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import Reset from "./components/Reset";
import { useState } from "react";
function CounterApp() {
    const [value, setValue] = useState(0);
    const [isIncreased, setIsIncreased] = useState(false);

    return (
        <div className="basis-[85%] flex justify-center items-center">
        <div className="border dark:border-white/80 border-pink-800 rounded-xl p-3 flex flex-col space-y-10">
            <p className="text-[40px] text-gray-800 dark:text-white/80 font-extrabold text-center lg:text-[40px]">
            Counter App
            </p>
            <div className="flex flex-col justify-center items-center space-y-8">
            <p
                className="text-[50px] font-medium "
                style={{
                color: isIncreased
                    ? "green"
                    : isIncreased === false
                    ? "red"
                    : "violet",
                }}
            >
                {value}
            </p>
            <div className="flex flex-row gap-3 py-10 lg:gap-10  ">
                <Increment value={value} setValue={setValue} setIsIncreased={setIsIncreased} />
                <Reset setValue={setValue} setIsIncreased={setIsIncreased} />
                <Decrement value={value} setValue={setValue} setIsIncreased={setIsIncreased} />
            </div>
            </div>
        </div>
        </div>
    );
}

export default CounterApp;
