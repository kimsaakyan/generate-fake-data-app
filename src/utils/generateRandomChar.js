function generateRandomChar(region) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let symbolsAndDigits = '0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let allChar = '';

    switch (region) {
        case 'EN': {
            alphabet = 'abcdefghijklmnopqrstuvwxyz';
            break;
        }
        case 'AR': {
            alphabet = 'أبتثجحخدذرزسشصضطظعغفقكلمنـهوي';
            break;
        }
        case 'HY': {
            alphabet = 'ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՈՒՓՔՕՖԸՆ';
            break;
        }
        case 'IT': {
            alphabet = 'AaBbCcDdEeFfGgHhIiLlMmNnOoPpQqRrSsTtUuVvZz';
            break;
        }
        default: {
            break;
        }
    }

    allChar = alphabet + symbolsAndDigits;
    const randomIndex = Math.floor(Math.random() * allChar.length);
    return allChar[randomIndex];
}

export default generateRandomChar;
