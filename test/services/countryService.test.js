const { findCountries } = require('../../services/countryService');

jest.mock('../../data/data');

describe('findCountries', () => {

  beforeEach(jest.resetModules);

  it('should return an empty array if no countries are provided', () => {
    jest.mock('../../data/data', () => ({
      data: undefined,
    }));
    const { findCountries } = require('../../services/countryService');

    const result = findCountries();

    expect(result).toEqual([]);
  });

  it('should return the given countries without modification', () => {
    const mockedResult = [{ name: 'Any country name' }];

    jest.mock('../../data/data', () => ({
      data: mockedResult,
    }));
    const { findCountries } = require('../../services/countryService');

    const result = findCountries();

    expect(result).toEqual(mockedResult);
  });
});