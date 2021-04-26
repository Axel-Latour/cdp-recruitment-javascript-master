'use strict';

const { data } = require('../data/data');

const findCountries = () => {
  return data || [];
}

module.exports = {
  findCountries,
}