import axios from "axios";

const url = " https://corona-api.com";
export const fetchData = async () => {
  //    let changeurl = url;
  //    if(country){
  //        changeurl = `${url}/countries/${country}`
  //    }
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
     console.log(data);
      const newData = {
        confirmed: data.data.latest_data.confirmed,
        deaths: data.data.latest_data.deaths,
        recovered: data.data.latest_data.recovered,
        date: data.data.today.updated_at,
      };
  
      // console.log(newData);
  
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
