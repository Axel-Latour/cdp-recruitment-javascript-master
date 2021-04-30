'use strict';

const { findCountriesWithAnimalsMatchingPattern } = require('./filterService');
const { addCountInCountryAndPeopleName } = require('./countService');
const { FILTER_OPTION, COUNT_OPTION, WRONG_OPTION_ERROR_MESSAGE} = require('./constants');

/**
 * Execute the method corresponding to the given command line arguments.
 * It will use the first element of the given array to determine which action
 * should be executed.
 * @param {string[]} args - Command line arguments (from the 3rd element)
 * @throws Will throw an error if the command line option is not recognised
 * @returns {Array} Result of the command execution
 */
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