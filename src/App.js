import React from "react";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import siteImage from './images/Covid19.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();  //fetch the cases data
        this.setState({ data: fetchedData });   //set the cases data
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);   //fetch the country data
        this.setState({ data: fetchedData, country: country });   //set the country state
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={siteImage} alt="COVID-19"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country}/>
            </div>
        );
    }
}

export default App;
