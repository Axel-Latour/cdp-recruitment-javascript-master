'use strict';

const FILTER_OPTION = '--filter=';
const COUNT_OPTION = '--count';
const WRONG_OPTION_ERROR_MESSAGE = `Accepted options for this command are : ${FILTER_OPTION}<your_filter_value> or ${COUNT_OPTION}`;
const EMPTY_PATTERN_ERROR_MESSAGE = 'The pattern to filter the countries must be provided in the command line arguments.';

module.exports = {
  FILTER_OPTION,
  COUNT_OPTION,
  WRONG_OPTION_ERROR_MESSAGE,
  EMPTY_PATTERN_ERROR_MESSAGE,
};
