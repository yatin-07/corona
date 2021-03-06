import axios from "axios";
const API = axios.create({ baseURL: 'http://localhost:4001' });

const url = " https://corona-api.com";
export const fetchData = async () => {
  //  
  try {
    const { data } = await axios.get(`${url}/timeline`);
    //console.log(data, status);
    const newData = {
      confirmed: data.data[0].confirmed,
      deaths: data.data[0].deaths,
      recovered: data.data[0].recovered,
      date: data.data[0].date,
    };

    // console.log(newData);

    return newData;
  } catch (error) {
    console.log(error);
  }
};

export const newFetchData = async (country) => {
  try {
    const { data } = await axios.get(`${url}/countries/${country}`);
    console.log(country);
    const newData = {
      confirmed: data.data.latest_data.confirmed,
      deaths: data.data.latest_data.deaths,
      recovered: data.data.latest_data.recovered,
      date: data.data.today.updated_at,
    };

    return newData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchcountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);
    const countries = data.data;
    console.log();
    return countries.map((country) => country);
    // return countries.map((code) => code.code);
  } catch (error) {}
};








API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});



export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);