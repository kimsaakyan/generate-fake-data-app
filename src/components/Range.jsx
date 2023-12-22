import React from 'react';

const Range = ({ selectCountOfError, defValue }) => {
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
                        selectCountOfError('error', e.target.value)
                    }
                    step="0.5"
                    className="h-[65px]"
                />
            </div>
            <div className="w-[60px] border p-2 rounded-full">{defValue}</div>
        </div>
    );
};

export default Range;
