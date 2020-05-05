import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]); //initial value for fetchedCountries is an empty array

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]); // a new argument of [setFetchedCountries]. This is to tell react that if there's a change in setFetchedCountries, it should be updated too
  // if the argument is present, effect will only activate if the values in the list change

  console.log(fetchedCountries);

  //dynamic options below.
  // a key is required by React (a React rule for mapping )
  // return (
  //   <FormControl className={styles.formControl}>
  //     <NativeSelect
  //       defaultValue=""
  //       onChange={(e) => handleCountryChange(e.target.value)}
  //     >
  //       <option value="">Global</option>
  //       {fetchedCountries.map((country, i) => (
  //         <option key={i} value={country}>
  //           {country}
  //         </option>
  //       ))}
  //     </NativeSelect>
  //   </FormControl>
  // );

  // Using Material UI's Autocomplete Country Select
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
