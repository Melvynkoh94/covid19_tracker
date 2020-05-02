import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    //const response = await axios.get(url);

    // instead of taking response as a variable and then from the response get the data via 'response.data'
    // we can use 'destructuring' (below)
    const { data } = await axios.get(url);
    console.log(data);

    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
    };

    return data;
  } catch (error) {}
};
