import React from 'react';
import { Card, CountryPicker, Footer } from './components'
import styles from './Covid.module.scss';
import { fetchData } from './api';


class Covid extends React.Component {
  state = { 
      data: {},
   }

  async componentDidMount() {
     const covidDate = await fetchData()
    
     this.setState({
       data: covidDate,
     })
   }

  render() { 
    return ( 
      <div className={styles.app}>
        <CountryPicker />
        <Card />
        <Footer />
      </div>
     );
  }
}
 
export default Covid;
