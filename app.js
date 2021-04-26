'use strict';

const { findCountriesWithAnimalsMatchingPattern } = require('./services/filterService');
const { addCountInCountryAndPeopleName } = require('./services/countService');

const FILTER_OPTION = "--filter=";
const COUNT_OPTION = "--count";

const main = (args) => {
  const option = args[0];
  if(option && option.startsWith(FILTER_OPTION)) {
    const patternToFilter = option.split("=")[1];
    return findCountriesWithAnimalsMatchingPattern(patternToFilter);
  } else if(option === COUNT_OPTION) {
    return addCountInCountryAndPeopleName();
  } else {
    throw Error(`Accepted options for this command are : ${FILTER_OPTION}<your_filter_value> or ${COUNT_OPTION}`);
  }
}

const commandArgs = process.argv.slice(2);
const result = main(commandArgs);
// Stringify result using 2 spaces format to beautify result of the command
console.log(JSON.stringify(result, null, 2));