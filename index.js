const axios = require('axios');

module.exports = async country => {
  const allCountries = (await axios.get('https://corona.lmao.ninja/countries')).data;
  let data = {};

  // if no country is specified, get information about the world
  if (!country) {
    const worldData = (await axios.get('https://corona.lmao.ninja/all')).data;
    data = [
      {
        country: null,
        cases: worldData.cases,
        todayCases: allCountries.map(c => c.todayCases).reduce((a,b) => a + b),
        deaths: worldData.deaths,
        todayDeaths: allCountries.map(c => c.todayDeaths).reduce((a,b) => a + b),
        recovered: worldData.recovered,
        critical: allCountries.map(c => c.critical).reduce((a,b) => a + b)
      },
      ...allCountries
    ];
  } else {
    // change some countries into shorthands
    country = country.toLowerCase() === 'united kingdom' ? 'UK' : country;

    country = country.toLowerCase() === 'america' ||
              country.toLowerCase() === 'united states' ||
              country.toLowerCase() === 'united states america' ||
              country.toLowerCase() === 'united states of america' ?
                'USA' : country;

    country = country.toLowerCase() === 'arab emirates' ||
              country.toLowerCase() === 'united arab emirates' ?
                'UAE' : country;

    // find data about the country specified
    const countryData = allCountries.find(x => x.country.toLowerCase() === country.toLowerCase());

    // check if data could be found
    data = countryData === undefined ? { error: `There is no data for "${country}"` } : countryData;
  };

  return data;
};
