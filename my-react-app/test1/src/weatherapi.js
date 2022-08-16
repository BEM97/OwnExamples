import axios from "axios";

const URL = "http://api.weatherapi.com/v1/current.json";
const API_KEY = "4c7ccba21f984528baa60552220907";

export const featchweather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      key: API_KEY,
    },
  });
  return data;
};

export default featchweather;