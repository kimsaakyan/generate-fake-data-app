import generateRandomChar from './generateRandomChar';

function addErrorToItem(personData, errorCount, region) {
    const countOfErrors = Math.floor(errorCount);
    const countOfAdditionalErrors = countOfErrors % 1;

    let clonePersonData = { ...personData };

    for (let j = 0; j < countOfErrors; j++) {
        simulateError(clonePersonData, region);
    }

    if (Math.random() < countOfAdditionalErrors) {
        simulateError(clonePersonData, region);
    }

    return clonePersonData;
}

const simulateError = (clonePersonData, region) => {
    const keys = Object.keys(clonePersonData);
    const randomErrorType = Math.floor(Math.random() * 3); // Возвращает число от 0 до 2, тем самим выбираю тип ошибки. (рандомно)
    const randomProperty = keys[Math.floor(Math.random() * keys.length)];

    switch (randomErrorType) {
        case 0:
            clonePersonData[randomProperty] = removeRandomCharFromItem(
                clonePersonData[randomProperty]
            );
            break;
        case 1:
            clonePersonData[randomProperty] = addRandomCharToItem(
                clonePersonData[randomProperty],
                region
            );
            break;
        case 2:
            clonePersonData[randomProperty] = swapRandomCharsInItem(
                clonePersonData[randomProperty]
            );
            break;
    }
};

function removeRandomCharFromItem(personProp) {
    const recordArray = personProp.split('');
    const randomIndex = Math.floor(Math.random() * recordArray.length);
    recordArray.splice(randomIndex, 1);
    return recordArray.join('');
}

function addRandomCharToItem(personProp, region) {
    const recordArray = personProp.split('');
    const randomIndex = Math.floor(Math.random() * recordArray.length);
    recordArray.splice(randomIndex, 0, generateRandomChar(region));
    return recordArray.join('');
}

function swapRandomCharsInItem(personProp) {
    const recordArray = personProp.split('');
    const randomIndex1 = Math.floor(Math.random() * (recordArray.length - 1));
    const randomIndex2 = randomIndex1 + 1;
    const temp = recordArray[randomIndex1];
    recordArray[randomIndex1] = recordArray[randomIndex2];
    recordArray[randomIndex2] = temp;
    return recordArray.join('');
}

function addErrorsToData(data, errorCount, region) {
    for (let i = 0; i < data.length; i++) {
        data[i] = addErrorToItem(data[i], errorCount, region);
    }

    return data;
}

export default addErrorsToData;
