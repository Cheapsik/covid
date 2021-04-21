import React from 'react';
import { Card, CountryPicker, Footer } from './components'
import styles from './Covid.module.scss';


class Covid extends React.Component {
  state = { 
    
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
