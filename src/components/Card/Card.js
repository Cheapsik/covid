import CountUp from "react-countup";
import React, { useState, useEffect } from "react";
import { RiVirusFill as Virus } from "react-icons/ri";
import { GiHealthNormal as Hearth } from "react-icons/gi";
import { FaSkull as Skull } from "react-icons/fa";
import { fetchCountries} from "../../api";
import styles from "./Card.module.scss";

const Card = ({ data: { confirmed, recovered, deaths } }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <div className={styles.container}>
      {fetchedCountries.map((country, id) => (
        <div className={styles.card} key={id}>
          <p>{country}</p>
          <p>
            <Virus /> Infected:
          </p>
          <span>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2}
              separator=","
            />
          </span>
          <p>
            <Hearth /> Recovered:
          </p>
          <span>
            <CountUp
              start={0}
              end={recovered.value}
              duration={2}
              separator=","
            />
          </span>
          <p>
            <Skull /> Deaths:
          </p>
          <span>
            <CountUp start={0} end={deaths.value} duration={2} separator="," />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Card;
