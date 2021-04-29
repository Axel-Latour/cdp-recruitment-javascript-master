'use strict';

const { findCountries } = require('../services/countryService');

/**
 * Construct the list of countries, with number of people suffixed in the name,
 * and number of Animal suffixed in the People name
 * @returns an array of Country with name updated
 */
const addCountInCountryAndPeopleName = () => {
  const countries = findCountries();
  return countries.map(country => ({
    ...country,
    name: generateNameWithArrayLength(country.name, country.people),
    people: addCountInPeopleName(country.people),
  }));
};

/**
 * Given a list of People object, update each one by suffixing the name
 * with the number of Animal it contains
 * @param people array of People where name should be updated
 * @returns an array of People with name updated
 */
const addCountInPeopleName = (people) => {
  return (people || []).map((p) => ({
    ...p,
    name: generateNameWithArrayLength(p.name, p.animals),
  }));
};

/**
 * Add the number of elements of the given array, into square brackets, at the end of
 * the given name
 * @param name name to update
 * @param array array of elements to count
 * @returns {string} updated name suffixed with number of array elements between square brackets
 */
const generateNameWithArrayLength = (name, array) => `${name} [${(array || []).length}]`;

module.exports = {
  addCountInCountryAndPeopleName,
};