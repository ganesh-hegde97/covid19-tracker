import React, { useState, useEffect } from "react";
import { FormControl, Select, InputLabel, MenuItem } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        };

        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.countryPicker}>
            <InputLabel>Countries</InputLabel>
            <Select defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <MenuItem value="">Global</MenuItem>
                {fetchedCountries.map((country, i) => (
                    <MenuItem value={country} key={i}>
                        {country}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CountryPicker;
