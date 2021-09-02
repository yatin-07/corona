import React, { useState, useEffect } from 'react';
import { NativeSelect , FormControl } from '@material-ui/core';
import './country-picker.css';
import { fetchcountries } from '../../api/index';

const CountryPicker = () => {
    const [fetchedCountries, setfetchedCountries] = useState([])
    useEffect(() => {
        const fetchapi = async () => {
            setfetchedCountries(await fetchcountries());
        }
        fetchapi();
    }, [setfetchedCountries]);
    console.log(fetchedCountries);
    return(
        <FormControl className="formControl">
            <NativeSelect>
                    <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;