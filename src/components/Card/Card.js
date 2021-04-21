import {
  Card as Cardd,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import CountUp from "react-countup";
import { RiVirusFill as Virus } from 'react-icons/ri';
import { GiHealthNormal as Hearth } from 'react-icons/gi';
import { FaSkull as Skull } from 'react-icons/fa';

const Card = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Cardd}>
          <CardContent>
            <Typography  align="center">
              <Virus /> Infected:
            </Typography>

            <Typography color="textSecondary" align="center">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </Typography>

            <Typography align="center">
              <Hearth />Recovered:
            </Typography>
            <Typography color="textSecondary" align="center">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography align="center">
              <Skull />Deaths:
            </Typography>
            <Typography color="textSecondary" align="center">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </Typography>
            <br />
            <Typography variant="body2" style={{ fontSize: 12 }}>{lastUpdate}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
