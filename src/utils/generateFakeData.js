import { fakerEN, fakerAR, fakerHY, fakerIT } from '@faker-js/faker';
import addErrorsToData from './addErrorsToData';

const generateFakeData = (region, seed, errors) => {
    let faker = fakerEN;

    switch (region) {
        case 'EN': {
            faker = fakerEN;
            break;
        }
        case 'AR': {
            faker = fakerAR;
            break;
        }
        case 'HY': {
            faker = fakerHY;
            break;
        }
        case 'IT': {
            faker = fakerIT;
            break;
        }
        default: {
            break;
        }
    }

    faker.seed(Number(seed));

    const person = {
        RandomID: faker.string.uuid(),
        FirstName: faker.person.firstName(),
        LastName: faker.person.lastName(),
        Address: faker.location.streetAddress(),
        PhoneNumber: faker.phone.number(),
    };

    return addErrorsToData(person, errors, region);
};

export default generateFakeData;
