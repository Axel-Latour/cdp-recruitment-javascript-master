'use strict';

const { findCountries } = require('../services/countryService');

/**
 * Construct the list of countries, with number of people suffixed in the name,
 * and number of Animal suffixed in the People name
 * @returns {Array} Array of Country with name updated
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
 * @param {Array} people - Array of People where name should be updated
 * @returns {Array} Array of People with name updated
 */
const addCountInPeopleName = (people = []) => {
  return people.map((p) => ({
    ...p,
    name: generateNameWithArrayLength(p.name, p.animals),
  }));
};

/**
 * Add the number of elements of the given array, into square brackets, at the end of
 * the given name
 * @param {string} name - Name to update
 * @param {Array} array - Array of elements to count
 * @returns {string} Updated name suffixed with number of array elements between square brackets
 */
const generateNameWithArrayLength = (name, array= []) => `${name} [${array.length}]`;

module.exports = {
  addCountInCountryAndPeopleName,
};