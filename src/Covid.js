import React from "react";
import { Card, CountryPicker, Footer } from "./components";
import styles from "./Covid.module.scss";
import { fetchData } from "./api";

class Covid extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({
      data: fetchedData,
      country,
    })
  }

  render() {
    const { data,country } = this.state;

    return (
      <div className={styles.app}>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Card data={data} country={country} handleCountryChange={this.handleCountryChange} />
        <Footer />
      </div>
    );
  }
}

export default Covid;
