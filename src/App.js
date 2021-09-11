import React from "react";
import "./App.css";

import Home from "./componenets/home/home";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./componenets/Auth/auth";
import Navbar from "./componenets/navbar/navbar";

class App extends React.Component {
  // state = {
  //   data: {},
  //   isLoading: true,
  //   country: "",
  // };
  // async componentDidMount() {
  //   try {
  //     this.setState({ isLoading: true });
  //     const data = await fetchData();
  //     this.setState({ data: data });
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }
  // handleCountryChange = async (country) => {
  //   const data = await newFetchData(country);
  //   this.setState({ data: data, country: country });
  //   console.log(data);
  // };

  render() {
    //const { data, isLoading } = this.state;
    return (
      <BrowserRouter>
      <Navbar />
        <div className="container">

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" component={Auth} />
          </Switch>
         
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
