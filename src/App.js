import React from 'react';
import './App.css';
import Cards from './componenets/Cards/card';
import CountryPicker from './componenets/Country-picker/country-picker';
import { fetchData } from './api/index';


 class App extends React.Component {
   state = {
    data: {},
    isLoading: true,
   }
 async componentDidMount(){
  
  try {
    this.setState({isLoading: true});
    const data = await fetchData();
    this.setState({ data: data})
    console.log(data);
  } catch (error) {
   console.log(error); 
  }
    finally {
      this.setState({isLoading: false})
    }

  

}

   render(){
     const { data , isLoading } = this.state;
     return(
       <div className="container">
        <Cards data={data } isLoading= { isLoading} />
        <CountryPicker />
       </div>
     )
      
     }
   }
 


export default App;
