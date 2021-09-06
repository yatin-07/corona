import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import "./country-picker.css";
import { fetchcountries } from "../../api/index";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setfetchedCountries] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      setfetchedCountries(await fetchcountries());
    };
    fetchapi();
  }, [setfetchedCountries]);

  return (
    <FormControl className="formControl">
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country.code}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
