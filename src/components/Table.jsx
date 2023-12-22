import React from 'react';
import addErrorsToData from '../utils/addErrorsToData';

const Table = ({ data, fetchData, errorCount, region }) => {
    const handleTableScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.target;

        if (scrollTop + clientHeight >= scrollHeight - 1) {
            fetchData(10);
        }
    };

    let resultData = addErrorsToData(data, errorCount, region);

    return (
        <div
            className="overflow-auto max-h-[400px] mt-2 border"
            onScroll={handleTableScroll}
        >
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">RandomID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Surname</th>
                        <th className="border px-4 py-2">Address</th>
                        <th className="border px-4 py-2">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {resultData.map((item, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">
                                {item.RandomID}
                            </td>
                            <td className="border px-4 py-2">
                                {item.FirstName}
                            </td>
                            <td className="border px-4 py-2">
                                {item.LastName}
                            </td>
                            <td className="border px-4 py-2">{item.Address}</td>
                            <td className="border px-4 py-2">
                                {item.PhoneNumber}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
