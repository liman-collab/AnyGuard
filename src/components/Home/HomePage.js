import React, { Fragment, useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import homePageBck from '../../assets/homePageBck.svg'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'


const useStyles = makeStyles((theme) => ({
    background: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${homePageBck})`,
        // backgroundImage: `url(${homePageBck})`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        backgroundAttachment: "fixed",
        [theme.breakpoints.down("md")]: {
            backgroundAttachment: "inherit",
            backgroundPosition: "65%",
        },
        [theme.breakpoints.down(500)]: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${homePageBck})`,

            height: '51em',
        },

    },
    downloadButton: {
        backgroundColor: "red",
        borderRadius: 50,
        color: "white",
        textTransform: "none",
        fontWeight: 400,
        height: 45,
        width: 145,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    learnButton: {
        backgroundColor: "transparent",
        borderColor: "white",
        borderRadius: 50,
        color: "white",
        textTransform: "none",
        fontWeight: 400,
        height: 45,
        width: 145,
    },
    buttonContainer: {
        marginTop: "1rem",
        [theme.breakpoints.down("md")]: {
            // marginTop: "rem",
        },

    }, text1: {
        fontSize: "1.1rem",
        color: "white",
        [theme.breakpoints.down("md")]: {
            fontSize: "1rem"
        },

    },
    text2: {
        fontWeight: 400,
        fontSize: "5rem",
        lineHeight: 1.1,
        color: "white",
        padding: "15px 0",
        [theme.breakpoints.down("md")]: {
            fontSize: "4rem",
            fontWeight: 500
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "3rem",
            fontWeight: 500
        },
    },
    responsiveTitle: {
        lineHeight: 1.3,
        fontSize: "1.1rem",
        marginBottom: "1rem"

    },
    gridResponsive: {
        background: "white",
        width: "80%",
        padding: '3rem 9rem',
        transform: 'translateY(50%)',
        [theme.breakpoints.down("lg")]: {
            padding: '3rem 5rem',
            transform: 'translateY(30%)',
        },
        [theme.breakpoints.down("md")]: {
            width: "90%",

        }
    },
    bottomText: {
        background: "white",
        textAlign: "center",
        padding: "1rem",
    },
    feel: {

        width: '85%',
        margin: '8rem auto',
        // [theme.breakpoints.down("md")]: {
        //     marginLeft: '6rem'
        // },

        [theme.breakpoints.down("md")]: {
            marginTop: "8em"
        },
        [theme.breakpoints.down("lg")]: {
            marginTop: "8em"
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "8em"
        },
        textAlign: "inherit",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        },
    }

}))

export default function HomePage() {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"))


    return (
        <React.Fragment>

            <Grid
                container
                alignItems={matchesSM ? "center" : "flex-end"}
                justify={matchesSM ? "center" : undefined}
                className={classes.background}
                direction={matchesSM ? "column" : "row"}
            >
                <Grid item container className={classes.feel} >
                    <Grid item container direction="column" >
                        <Grid item >
                            <Typography variant="h6" className={classes.text1}>
                                24/7 Protection -
                                1 Month Free Trial
                            </Typography>
                            <Typography variant="h2" className={classes.text2}>
                                Feel Safe<br />
                                Everywhere
                            </Typography>
                            <Grid container direction={matchesSM ? "column" : "row"} justify={matchesSM ? "center" : "flex-start"} spacing={2} className={classes.buttonContainer}>
                                <Grid item>
                                    <Button className={classes.downloadButton} variant="contained">Free Download</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" className={classes.learnButton}>Learn More</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
                {matchesSM ? undefined : <Grid container item className={classes.gridResponsive} alignItems="center"
                >
                    <Grid item xl={3} md={5} sm={6} xs={6}>
                        <Typography variant="h4">What is<br /> AnyGuard ?</Typography>
                    </Grid>
                    <Grid item xl={8} md={6} sm={6} xs={6} style={{ color: "#868686" }}>
                        <Typography vairant="h5">AnyGuard is one of the largest security companies in the world using next-gen technologies to fight cyber attacks in real time. We differ from other next-gen companies in that we have an immense cloud-based machine learning engine that receives a constant stream of data from our hundreds of millions of users.</Typography>
                    </Grid>
                </Grid>}

            </Grid>

            {matchesSM ? <Grid container item alignItems="center"
                direction="column" justify="center"
                className={classes.bottomText}

            >

                <Grid >
                    <Typography variant="h6" className={classes.responsiveTitle}><strong>What is<br /> AnyGuard ?</strong></Typography>
                </Grid>

                <Grid style={{ color: "#868686" }}>
                    <Typography vairant="h5">AnyGuard is one of the largest security companies in the world using next-gen technologies to fight cyber attacks in real time. We differ from other next-gen companies in that we have an immense cloud-based machine learning engine that receives a constant stream of data from our hundreds of millions of users.</Typography>
                </Grid>

            </Grid> : undefined}

        </React.Fragment >


    )

}
