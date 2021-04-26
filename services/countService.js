'use strict';

const { findCountries } = require('../services/countryService');

const addCountInCountryAndPeopleName = () => {
  const countries = findCountries();
  return countries.map(country => ({
    ...country,
    name: `${country.name} [${(country.people || []).length}]}`,
    people: addCountInPeopleName(country.people),
  }));
};

const addCountInPeopleName = (people) => {
  return people.map((p) => ({
    ...p,
    name: `${p.name} [${(p.animals || []).length}]`,
  }));
};

module.exports = {
  addCountInCountryAndPeopleName,
}