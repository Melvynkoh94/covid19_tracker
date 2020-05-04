import axios from "axios";

const url = "https://covid19.mathdro.id/api";

// fetching overall data
export const fetchData = async (country) => {
  let changeableURL = url;

  // country is not falsey, meaning not null
  if (country) {
    changeableURL = `${url}/countries/${country}`;
  }

  try {
    //const response = await axios.get(url);

    // instead of taking response as a variable and then from the response get the data via 'response.data'
    // we can use 'destructuring' (below)
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableURL);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

// fetching daily data
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

// get list of countries
export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    // console.log(response);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
