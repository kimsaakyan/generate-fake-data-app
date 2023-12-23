import React, { useEffect, useState } from 'react';
import '../App.css';
import generateFakeData from '../utils/generateFakeData';
import Table from './Table';
import Input from './Input';
import Select from './Select';
import generateRandomNumber from '../utils/generateRandomNumber';
import Range from './Range';
import Papa from 'papaparse';

const MyApp = () => {
    const [region, setRegion] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [seed, setSeed] = useState(generateRandomNumber());
    const [errorCount, setErrorCount] = useState(0);
    const [data, setData] = useState(
        Array.from({ length: 20 }, (_, index) =>
            generateFakeData(region, seed + index, errorCount)
        )
    );

    useEffect(() => {
        setData(
            Array.from({ length: 20 }, (_, index) =>
                generateFakeData(region, seed + index, errorCount)
            )
        );
    }, [region, seed, errorCount]);

    const fetchData = (amountOfData) => {
        const newData = Array.from({ length: amountOfData }, (_, index) =>
            generateFakeData(region, seed + index, errorCount)
        );

        setData((prevVal) => [...prevVal, ...newData]);
        setCurrentPage((prevVal) => prevVal + 1);
    };

    const onChangeHandler = (prop, value) => {
        switch (prop) {
            case 'region': {
                setRegion(value);
                break;
            }
            case 'seed': {
                setSeed(+value);
                break;
            }
            case 'error': {
                setErrorCount(value);
                break;
            }
            default: {
                break;
            }
        }
    };

    const onClickHandler = () => {
        let newSeed = generateRandomNumber(seed, currentPage, errorCount);
        setSeed(newSeed);
    };

    const exportToCSV = () => {
        const csvData = Papa.unparse(data);
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });

        return {
            href: URL.createObjectURL(blob),
            filenameOnDownload: 'fake_data.csv',
        };
    };

    return (
        <div className="App">
            <div className="flex items-center justify-between flex-wrap gap-y-2">
                {/* Select a regin */}
                <Select selectRegion={onChangeHandler} />

                {/* seed input */}
                <Input
                    defValue={seed}
                    getRandomSeed={onClickHandler}
                    changeSeed={onChangeHandler}
                />

                {/* Range input */}
                <Range
                    selectCountOfError={onChangeHandler}
                    defValue={errorCount}
                />
            </div>

            {/* Table */}
            <Table
                data={data}
                fetchData={fetchData}
                errorCount={errorCount}
                region={region}
            />
            <div className="">
                <a
                    className="mt-4 px-6 py-2 flex gap-2 items-center justify-center w-[200px] bg-sky-500 rounded-lg text-white font-semibold"
                    href={exportToCSV().href}
                    download={exportToCSV().filenameOnDownload}
                >
                    <p> Export to CSV</p>
                    <p>
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
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                        </svg>
                    </p>
                </a>
            </div>
        </div>
    );
};

export default MyApp;
