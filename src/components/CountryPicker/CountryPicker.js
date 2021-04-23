import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.scss';
import { fetchCountries } from '../../api';

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);
    
    return (
        <div className={styles.container}>
        <FormControl>
            <NativeSelect className={styles.select} defaultValue="" onChange={(e) => {handleCountryChange(e.target.value)}}>
                <option className={styles.mainOption}  value="global">Choose country</option>
                {fetchedCountries.map((country,id) => <option key={id} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        </div>
     );
}
 
export default CountryPicker;