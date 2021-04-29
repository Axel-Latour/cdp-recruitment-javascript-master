const { main } = require('../main/main');
const { FILTER_OPTION, COUNT_OPTION, WRONG_OPTION_ERROR_MESSAGE } = require('../main/constants');

jest.mock('../services/filterService');
jest.mock('../services/countService');

const { findCountriesWithAnimalsMatchingPattern } = require('../services/filterService');
const { addCountInCountryAndPeopleName } = require('../services/countService');

describe('main', () => {
  const mockedResult = [{
    country: 'test country',
  }];

  it('should call findCountriesWithAnimalsMatchingPattern with a pattern when given option starts with --filter=',
    () => {
      const findCountriesWithAnimalsMatchingPatternMock = jest.fn(() => mockedResult);

      findCountriesWithAnimalsMatchingPattern.mockImplementation(findCountriesWithAnimalsMatchingPatternMock);

      const result = main([`${FILTER_OPTION}test`]);

      expect(findCountriesWithAnimalsMatchingPatternMock).toHaveBeenCalledWith('test');
      expect(result).toStrictEqual(mockedResult);
    });

  it('should call addCountInCountryAndPeopleName when given option is --count', () => {
    const addCountInCountryAndPeopleNameMock = jest.fn(() => mockedResult);

    addCountInCountryAndPeopleName.mockImplementation(addCountInCountryAndPeopleNameMock);

    const result = main([COUNT_OPTION]);

    expect(addCountInCountryAndPeopleNameMock).toHaveBeenCalled();
    expect(result).toStrictEqual(mockedResult);
  });

  it('should throw an exception if given option is incorrect', () => {
    expect(() => main(['any other option'])).toThrowError(new Error(WRONG_OPTION_ERROR_MESSAGE));
  });
});