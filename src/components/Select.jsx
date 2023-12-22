import React from 'react';

const Select = ({ selectRegion }) => {
    return (
        <div className="flex gap-4 items-center">
            <label htmlFor="" className="font-semibold">
                Region:
            </label>
            <select
                name=""
                id=""
                className="border px-4 py-2 rounded-lg focus:outline-none"
                onChange={(e) => selectRegion('region', e.target.value)}
            >
                <option disabled value="">
                    Choose a region
                </option>
                <option value="EN">England</option>
                <option value="HY">Armenia</option>
                <option value="AR">Arabia</option>
                <option value="IT">Italy</option>
            </select>
        </div>
    );
};

export default Select;
