import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return "Loading... ";
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5" className={cx(styles.numberInfected)}>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of active cases of Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5" className={cx(styles.numberRecovered)}>
                        <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of recoveries from Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5" className={cx(styles.numberDeaths)}>
                        <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography gutterBottom>
                        {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of deaths caused by Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
