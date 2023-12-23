import React from 'react';

const Range = ({ selectCountOfError, defValue }) => {
    const onChangeHandler = (prop, val) => {
        if (val >= 0 && val <= 1000) {
            selectCountOfError('error', val);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
                <label className="font-semibold">Errors:</label>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={defValue}
                    onChange={(e) =>
                        selectCountOfError('error', +e.target.value)
                    }
                    step="0.5"
                    className="h-[65px]"
                />
                <input
                    type="number"
                    placeholder="err"
                    value={defValue}
                    onChange={(e) => onChangeHandler('error', +e.target.value)}
                    min="0"
                    max="1000"
                    className="w-[90px] border rounded-lg px-4 py-2 focus:outline-none"
                />
            </div>
        </div>
    );
};

export default Range;
