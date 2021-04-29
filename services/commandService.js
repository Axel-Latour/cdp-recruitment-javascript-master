'use strict';

const { findCountriesWithAnimalsMatchingPattern } = require('./filterService');
const { addCountInCountryAndPeopleName } = require('./countService');
const { FILTER_OPTION, COUNT_OPTION, WRONG_OPTION_ERROR_MESSAGE} = require('./constants');

const executeCommandFromArgs = (args) => {
  const option = args[0];
  if(option && option.startsWith(FILTER_OPTION)) {
    const patternToFilter = option.split('=')[1];
    return findCountriesWithAnimalsMatchingPattern(patternToFilter);
  } else if(option === COUNT_OPTION) {
    return addCountInCountryAndPeopleName();
  } else {
    throw Error(WRONG_OPTION_ERROR_MESSAGE);
  }
};

module.exports = {
  executeCommandFromArgs,
};