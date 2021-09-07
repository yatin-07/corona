import React from "react";
import Cards from "../../componenets/Cards/card";
import CountryPicker from "../../componenets/Country-picker/country-picker";
import { fetchData, newFetchData } from "../../api/index";
import Modals from "../model/model";


class Home extends React.Component {
    state = {
      data: {},
      isLoading: true,
      country: "",
    };
    async componentDidMount() {
      try {
        this.setState({ isLoading: true });
        const data = await fetchData();
        this.setState({ data: data });
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
    handleCountryChange = async (country) => {
      const data = await newFetchData(country);
      this.setState({ data: data, country: country });
      console.log(data);
    };
    render() {
        const { data, isLoading } = this.state;
    return(
        <>
<CountryPicker handleCountryChange={this.handleCountryChange} />
<Cards data={data} isLoading={isLoading} />
<Modals />
</>
    );

}
}
 export default Home;