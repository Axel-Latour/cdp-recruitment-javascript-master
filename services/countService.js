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
    name: `${country.name} [${(country.people || []).length}]}`,
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
  return people.map((p) => ({
    ...p,
    name: `${p.name} [${(p.animals || []).length}]`,
  }));
};

module.exports = {
  addCountInCountryAndPeopleName,
}