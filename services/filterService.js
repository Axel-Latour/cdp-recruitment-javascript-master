'use strict';

const { EMPTY_PATTERN_ERROR_MESSAGE } = require('./constants');
const { findCountries } = require('./countryService');

/**
 * Given a pattern, it constructs a list of Country with at least one People
 * having at least one Animal name matching with the pattern
 * @param {string} pattern - Pattern to filter animals name
 * @returns {Array} New array of filtered Country
 */
const findCountriesWithAnimalsMatchingPattern = (pattern) => {
  if (!pattern) {
    throw Error(EMPTY_PATTERN_ERROR_MESSAGE);
  }
  const countries = findCountries();
  return countries.reduce((updatedCountries, country) => {
    const people = findPeopleWithAnimalsMatchingPattern(pattern, country.people);

    if(people.length > 0) {
      updatedCountries.push({
        ...country,
        people,
      });
    }
    return updatedCountries;
  }, []);
};

/**
 * Given a pattern and an array of People, it returns only the People
 * having at least one animal matching with the given pattern.
 * @param {string} pattern - Pattern to filter animals name
 * @param {Array} people - Array of People objects to filter
 * @returns {Array} New array of filtered People
 */
const findPeopleWithAnimalsMatchingPattern = (pattern, people = []) => {
  return people.reduce((updatedPeople, p) => {
    const animals = (p.animals || []).filter(animal => new RegExp(pattern).test(animal.name));

    if(animals.length > 0) {
      updatedPeople.push({
        ...p,
        animals,
      });
    }
    return updatedPeople;
  }, []);
};

module.exports = {
  findCountriesWithAnimalsMatchingPattern,
};