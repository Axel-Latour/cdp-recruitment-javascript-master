const { addCountInCountryAndPeopleName } = require('../../services/countService');

jest.mock('../../services/countryService');

const { findCountries } = require('../../services/countryService');

describe('addCountInCountryAndPeopleName', () => {
  it('should suffix country name with people length, and people name with animal length', () => {
    const suffixNameWithLength = (name, length) => `${name} [${length}]`;

    findCountries.mockReturnValue([{
      name: 'Country without people',
    }, {
      name: 'Country with 2 people',
      people: [{
        name: 'People without animal',
      }, {
        name: 'People with 3 animals',
        animals: [
          { name: 'Animal' },
          { name: 'Another animal' },
          { name: 'A third animal' },
        ],
      }],
    }]);

    const result = addCountInCountryAndPeopleName();

    const expectedResult = [{
      name: suffixNameWithLength('Country without people', 0),
      people: [],
    }, {
      name: suffixNameWithLength('Country with 2 people', 2),
      people: [{
        name: suffixNameWithLength('People without animal', 0),
      }, {
        name: suffixNameWithLength('People with 3 animals', 3),
        animals: [
          { name: 'Animal' },
          { name: 'Another animal' },
          { name: 'A third animal' },
        ],
      }],
    }];

    expect(result).toStrictEqual(expectedResult);
  });
});