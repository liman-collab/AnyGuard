import React, { Fragment, useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import homePageBck from '../../assets/homePageBck.svg'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Container } from '@material-ui/core';

import grupi from '../../assets/grupi.svg'
import girl from '../../assets/girl.svg'
const useStyles = makeStyles((theme) => ({
    background: {
        background: "#17262F",

        padding: "14rem 9rem",


        [theme.breakpoints.down("md")]: {
            padding: '6rem 5rem'
        },
        [theme.breakpoints.down("sm")]: {
            padding: '6rem 4rem'
        },
        [theme.breakpoints.down("xs")]: {
            padding: '6rem 3rem'
        },
    },
    grid: {
        // height: "50rem",
        // marginBottom: "3rem",

    },
    container: {
        height: '100%',
        // padding: "8rem",

        [theme.breakpoints.down("md")]: {
            padding: "2rem",

        }
    },
    about: {
        color: 'white',
        fontWeight: 400,
        fontSize: "5rem",

        [theme.breakpoints.down("lg")]: {
            fontSize: "3.5rem"
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "2.5rem"
        }
    },
    text: {
        color: 'white',
        maxWidth: '35rem',
        [theme.breakpoints.down("md")]: {
            maxWidth: 'unset',

        }
    },
    grupi: {
        backgroundImage: `url(${grupi})`,
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        transform: "translateY(9%)",


        // backgroundRepeat: "no-repeat",
        // height: "100vh",
        // width: "100%",
        // position: "absolute",
        // transform: "translateY(9%)",



        [theme.breakpoints.down("sm")]: {
            backgroundImage: `url(${girl})`,



        },



    },

}))

export default function Section1() {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"))


    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.background} >
                <Grid item container direction="row" className={classes.grid} md >
                    <Grid item container alignItems="center" >
                        <Grid item md>
                            <Typography className={classes.about}>About<br />AnyGuard</Typography>
                        </Grid>
                        <Grid item md>
                            <Typography className={classes.text}>AnyGuard is one of the largest security companies in the world using next-gen technologies to fight cyber attacks in real time. We differ from other next-gen companies in that we have an immense cloud-based machine learning engine that receives a constant stream of data from our hundreds of millions of users.
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md >
                    <Grid item container >
                        <Grid item>
                            <div className={classes.grupi} />
                        </Grid>

                    </Grid >
                </Grid>

            </Grid>
        </React.Fragment >


    )

}
