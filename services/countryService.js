'use strict';

const { data } = require('../data/data');

/**
 * Returns data defined in the data.js file, or an empty array by default
 */
const findCountries = () => {
  return data || [];
};

module.exports = {
  findCountries,
}