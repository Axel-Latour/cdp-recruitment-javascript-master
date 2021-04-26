'use strict';

const { findCountries } = require('./countryService');

/**
 * Given a pattern, it constructs a list of Country with at least one People
 * having at least one animal name matching with the pattern
 * @param pattern : pattern to filter animals name
 * @returns new array of filtered Country
 */
const findCountriesWithAnimalsMatchingPattern = (pattern) => {
  if (!pattern) {
    throw Error("The pattern to filter the countries must be provided in the command line arguments.");
  }
  const countries = findCountries();
  return countries.map(country => ({
    ...country,
    people: findPeopleWithAnimalsMatchingPattern(pattern, country.people),
  }))
  .filter(country => (country.people || []).length > 0);
}

/**
 * Given a pattern and an array of People, it returns only the People
 * having at least one animal matching with the given pattern.
 * @param pattern : pattern to filter animals name
 * @param people : array of People objects to filter
 * @returns a new array of People
 */
const findPeopleWithAnimalsMatchingPattern = (pattern, people) => {
  return (people || []).map(p => ({
    ...p,
    animals: (p.animals || []).filter(animal => new RegExp(pattern).test(animal.name)),
  }))
  .filter(p => p.animals.length > 0);
}

module.exports = {
  findCountriesWithAnimalsMatchingPattern,
};