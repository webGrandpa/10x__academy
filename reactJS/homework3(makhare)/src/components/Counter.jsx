import { useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(prev => prev + 1)
        if (value === 10) {
            alert("რით ვერ დაიღალე?");
        }
        if (value > 10 && value < 15) {
            alert("გეყოფა!");
        }
        if (value > 15 && value < 20) {
            alert("დაანებე თავი, საქმე არ გაქვს?!");
        }
        if (value === 20) {
            alert("არაფერი გეშველება!");
        }
        if (value >= 20) {
            alert("რაც გინდა ის გიქნია!");
        }
    }

    const decrement = () => {
        if (value > 0) {
            setValue(prev => prev - 1)
        }
        if (value === 0 || value < 0) {
            alert("The counter cannot be less than 0");
        }
    }

    const reset = () => {
        setValue(0)
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className='bg-yellow-100 p-8 rounded-lg shadow-lg w-96 flex flex-col items-center justify-center'>
                <h3 className="text-4xl font-bold mb-4 text-blue-900">Dynamic Counter</h3>
                <span className='value text-3xl font-bold p-4 text-blue-500'>{value}</span>
                <div className="button gap-4 flex p-4">
                    <button className="increment hover:bg-blue-200 cursor-pointer hover:scale-103 active:scale-99 text-blue-900 w-24 h-10 rounded bg-blue-100" onClick={increment}>increase</button>
                    <button className="decrement hover:bg-blue-200 cursor-pointer hover:scale-103 active:scale-99 text-blue-900 w-24 h-10 rounded bg-blue-100" onClick={decrement}>decrease</button>
                </div>
                <button className="reset hover:bg-blue-200 cursor-pointer hover:scale-103 active:scale-99 text-blue-900 w-24 h-10 rounded bg-blue-100" onClick={reset}>reset</button>
            </div>
        </div>
    )
}

export default Counter;