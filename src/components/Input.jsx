import React from 'react';

const Input = ({ defValue, getRandomSeed, changeSeed }) => {
    return (
        <div className="flex gap-4 items-center">
            <label htmlFor="" className="font-semibold">
                Seed:
            </label>
            <input
                type="number"
                value={defValue}
                onChange={(e) => changeSeed('seed', e.target.value)}
                className="border rounded-lg px-4 py-2 focus:outline-none"
            />
            <button
                className="font-bold px-2 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-700 transition-all ease-in-out"
                onClick={getRandomSeed}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Input;
