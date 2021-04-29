const { executeCommandFromArgs } = require('../../services/commandService');
const { FILTER_OPTION, COUNT_OPTION, WRONG_OPTION_ERROR_MESSAGE } = require('../../services/constants');

jest.mock('../../services/filterService');
jest.mock('../../services/countService');

const { findCountriesWithAnimalsMatchingPattern } = require('../../services/filterService');
const { addCountInCountryAndPeopleName } = require('../../services/countService');

describe('executeCommandFromArgs', () => {
  const mockedResult = [{
    country: 'test country',
  }];

  it('should call findCountriesWithAnimalsMatchingPattern with a pattern when given option starts with --filter=',
    () => {
      const findCountriesWithAnimalsMatchingPatternMock = jest.fn(() => mockedResult);

      findCountriesWithAnimalsMatchingPattern.mockImplementation(findCountriesWithAnimalsMatchingPatternMock);

      const result = executeCommandFromArgs([`${FILTER_OPTION}test`]);

      expect(findCountriesWithAnimalsMatchingPatternMock).toHaveBeenCalledWith('test');
      expect(result).toStrictEqual(mockedResult);
    });

  it('should call addCountInCountryAndPeopleName when given option is --count', () => {
    const addCountInCountryAndPeopleNameMock = jest.fn(() => mockedResult);

    addCountInCountryAndPeopleName.mockImplementation(addCountInCountryAndPeopleNameMock);

    const result = executeCommandFromArgs([COUNT_OPTION]);

    expect(addCountInCountryAndPeopleNameMock).toHaveBeenCalled();
    expect(result).toStrictEqual(mockedResult);
  });

  it('should throw an exception if given option is incorrect', () => {
    expect(() => executeCommandFromArgs(['any other option'])).toThrowError(new Error(WRONG_OPTION_ERROR_MESSAGE));
  });
});