import generateRandomChar from './generateRandomChar';

function addErrorsToData(personData, errorCount, region) {
    const countOfErrors = Math.floor(errorCount);
    const countOfAdditionalErrors = errorCount % 1;

    for (let j = 0; j < countOfErrors; j++) {
        simulateError(personData, region);
    }

    if (Math.random() < countOfAdditionalErrors) {
        simulateError(personData, region);
    }

    return personData;
}

const simulateError = (personData, region) => {
    const keys = Object.keys(personData);
    const randomErrorType = Math.floor(Math.random() * 3); // Возвращает число от 0 до 2, тем самим выбираю тип ошибки. (рандомно)
    const randomProperty = keys[Math.floor(Math.random() * keys.length)];

    switch (randomErrorType) {
        case 0:
            personData[randomProperty] = removeRandomCharFromItem(
                personData[randomProperty]
            );
            break;
        case 1:
            personData[randomProperty] = addRandomCharToItem(
                personData[randomProperty],
                region
            );
            break;
        case 2:
            personData[randomProperty] = swapRandomCharsInItem(
                personData[randomProperty]
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

export default addErrorsToData;
