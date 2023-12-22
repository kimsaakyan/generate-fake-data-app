import { fakerEN, fakerAR, fakerHY, fakerIT } from '@faker-js/faker';

const generateFakeData = (region, seed) => {
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

    return {
        RandomID: faker.string.uuid(),
        FirstName: faker.person.firstName(),
        LastName: faker.person.lastName(),
        Address: faker.location.streetAddress(),
        PhoneNumber: faker.phone.number(),
    };
};

export default generateFakeData;
