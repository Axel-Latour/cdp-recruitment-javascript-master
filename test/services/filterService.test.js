const { findCountriesWithAnimalsMatchingPattern } = require('../../services/filterService');

jest.mock('../../services/countryService');

const { findCountries } = require('../../services/countryService');

describe('findCountriesWithAnimalsMatchingPattern', () => {
  it('should throw an error if no pattern is given to the method', () => {
    expect(() => findCountriesWithAnimalsMatchingPattern(undefined)).toThrowError()
  });

  it('should not return any elements if no animals are matching the pattern', () => {
    findCountries.mockReturnValue([{
      name: 'Country without people',
    }, {
      name: 'Country with people without animal',
      people: [{
        name: 'People without animal',
      }],
    }, {
      name: 'Country without matching animal',
      people: [{
        name: 'People with 2 not matching animals',
        animals: [
          {name: 'Not matching'},
          {name: 'Still not matching'},
        ],
      }],
    }]);

    const result = findCountriesWithAnimalsMatchingPattern("test");

    expect(result).toEqual([]);
  });

  it('should return a list of countries with people animals filtered using the pattern', () => {
    findCountries.mockReturnValue([{
      name: 'Country with two animals matching in the same people',
      people: [{
        name: 'People with 2 matching animals out of 3',
        animals: [
          {name: 'A test animal'},
          {name: 'testing this animal'},
          {name: 'Unknown animal'},
        ],
      }],
    }, {
      name: 'Country with animals matching in different people',
      people: [{
        name: 'People with 1 matching animal out of 2',
        animals: [
          {name: 'Another tested animal'},
          {name: 'Not this one'},
        ],
      }, {
        name: 'Another people with matching animal',
        animals: [
          {name: 'test'},
          {name: 'Unknown'},
        ],
      }, {
        name: 'People without matching animal',
        animals: [
          {name: 'Not matching'},
        ],
      }],
    }]);

    const result = findCountriesWithAnimalsMatchingPattern("test");

    const expectedResult = [{
      name: 'Country with two animals matching in the same people',
      people: [{
        name: 'People with 2 matching animals out of 3',
        animals: [
          {name: 'A test animal'},
          {name: 'testing this animal'},
        ],
      }],
    }, {
      name: 'Country with animals matching in different people',
      people: [{
        name: 'People with 1 matching animal out of 2',
        animals: [
          {name: 'Another tested animal'},
        ],
      }, {
        name: 'Another people with matching animal',
        animals: [
          {name: 'test'},
        ],
      }],
    }];

    expect(result).toStrictEqual(expectedResult);
  });
});