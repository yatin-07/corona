import axios from "axios";


const url = ' https://corona-api.com/timeline';
   export const fetchData = async () => {
     try {
         const { data }  = await axios.get(url);
         //console.log(data, status);
         const newData = {
             confirmed: data.data.[0].confirmed,
             deaths: data.data.[0].deaths,
             recovered: data.data.[0].recovered,
             date: data.data.[0].date

         } 
         
       // console.log(newData);

      return newData;

     } catch (error) {
         console.log(error)
     }
  }