import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery'

import map from '../../assets/map.svg'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import visa from '../../assets/visa.svg'
import paypal from '../../assets/paypal.svg'
import master from '../../assets/master.svg'
import jcb from '../../assets/jcb.svg'
import stripe from '../../assets/stripe.svg'
import redVisa from '../../assets/redVisa.svg'
import redPayPal from '../../assets/redPayPal.svg'
import redMaster from '../../assets/redMaster.svg'
import redJcb from '../../assets/redJcb.svg'
import redStripe from '../../assets/redStripe.svg'

const useStyles = makeStyles((theme) => ({
    map: {
        backgroundImage: `url(${map})`,

        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "30rem",
        width: "50rem",
        marginTop: '1rem',
        [theme.breakpoints.down("sm")]: {
            height: '15rem',
            width: "25rem",
        },
        [theme.breakpoints.down(500)]: {
            height: '12rem',
            width: "17rem",
        },
    },
    bckColor: {
        background: "#F2F2F2",
        padding: "3rem",

    },
    variant1: {
        [theme.breakpoints.down("md")]: {
            fontSize: "1.8rem",
            fontWeight: 700
        },
    },
    visa: {
        backgroundImage: `url(${visa})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "7rem",
        width: "7rem",
        margin: "0 2rem",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${redVisa})`,
            marginBottom: "2em",
            height: "5rem",
            width: "5rem",
        },

    },
    paypal: {
        backgroundImage: `url(${paypal})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "7rem",
        width: "7rem",

        margin: "0 2rem",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${redPayPal})`,
            marginBottom: "2em",
            height: "5rem",
            width: "5rem",
        }
    },
    master: {
        backgroundImage: `url(${master})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "7rem",
        width: "7rem",
        margin: "0 2rem",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${redMaster})`,
            marginBottom: "2em",
            height: "5rem",
            width: "5rem",
        }
    },
    stripe: {
        backgroundImage: `url(${stripe})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "7rem",
        width: "7rem",
        margin: "0 2rem",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${redStripe})`,
            marginBottom: "2em",
            height: "5rem",
            width: "5rem",
        }
    },
    jcb: {
        backgroundImage: `url(${jcb})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "7rem",
        width: "7rem",
        margin: "0 2rem",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${redJcb})`,
            marginBottom: "2em",
            height: "5rem",
            width: "5rem",
        }

    },
    bankPayments: {
        background: "white",
        boxShadow: '0px 0px 1px -1px rgba(0,0,0,0.2), 0px 0px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        transform: 'translateY(80%)',
        bottom: 0,
        margin: "auto",

        width: '80%',
        padding: "1rem",
        [theme.breakpoints.down("md")]: {
            transform: 'translateY(75%)',
            width: '90%',
            paddingTop: '4rem',
            alignContent: 'center',

        },
        [theme.breakpoints.down("sm")]: {
            transform: 'translateY(0%)',
            width: '40%',
            alignContent: 'center',

        },

    },
    cards: {
        [theme.breakpoints.down("sm")]: {

            height: 0

        },
    }
}))

export default function Map() {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center" className={classes.bckColor}>
                <Grid item xs>
                    <Typography variant="h4" align="center" paragraph className={classes.variant1}>We are Growing Expansion The World</Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant="subtitle1" align="center" paragraph className={classes.variant2}>Our 2 million users and more than 10 million Device Join Us for digital security pack. That’s can make us Bigger and Ready to Competitive with another product in this market. We believe, We can.</Typography>
                </Grid>
                <Grid item xs>
                    <div className={classes.map}></div>
                </Grid>

                <Grid item container direction="row" alignItems="center" className={classes.cards} >
                    <Grid item container direction={matchesSM ? "column" : "row"}
                        alignItems="center" justify="center" className={classes.bankPayments} >
                        <Grid item>
                            <div className={classes.visa}></div>
                        </Grid>
                        <Grid item>
                            <div className={classes.stripe}></div>
                        </Grid>
                        <Grid item>
                            <div className={classes.paypal}></div>
                        </Grid>
                        <Grid item>
                            <div className={classes.master}></div>
                        </Grid>
                        <Grid item>
                            <div className={classes.jcb}></div>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </React.Fragment>
    )
}