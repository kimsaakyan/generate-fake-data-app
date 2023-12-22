import seedrandom from 'seedrandom';

function generateRandomNumber(userSeed, page) {
    const combined = userSeed + page;
    const rng = seedrandom(combined);

    const min = 1;
    const max = 2000000000;
    const randomSeed = Math.floor(rng() * (max - min + 1)) + min;

    return randomSeed;
}


export default generateRandomNumber;
