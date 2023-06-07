
const Increment = ({ value, setValue, setIsIncreased }) => {
    const handleIncrement = () => {
        setValue(value + 1);
        setIsIncreased(true);
    };
    return (
        <button className="px-3 py-2 border dark:border-white border-gray-800 text-[18px] bg-transparent cursor-pointer rounded-md dark:text-white hover:bg-[#000] dark:hover:bg-white dark:hover:text-black hover:text-[#FAEBD7]" onClick={handleIncrement}>INCREMENT</button>
    );
};

export default Increment;