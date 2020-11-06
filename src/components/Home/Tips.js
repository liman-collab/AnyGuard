import React, { useState, useEffect } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';



import rightImg from '../../assets/rightImg.svg'
import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'
import light from '../../assets/light.svg'

const useStyles = makeStyles((theme) => ({

    tipsSection: {
        marginTop: "8rem",
        background: "#F2F2F2",
        padding: "3rem",
        [theme.breakpoints.down("md")]: {
            marginTop: "18rem",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "38rem",
            background: "#fff",
        }
    },
    rightImg: {
        backgroundImage: `url(${rightImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        height: "24rem",
        width: "30.7rem",
        [theme.breakpoints.down("md")]: {
            height: "20rem",
            width: "30rem",
            backgroundPosition: 'unset',
        },

        [theme.breakpoints.down("xs")]: {
            height: "15rem",
            width: "20rem",
            backgroundPosition: 'unset',
        },
    },
    light: {
        backgroundImage: `url(${light})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1.4rem",
        width: "1rem",
    },
    text1: {
        ...theme.typography.h5,

        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
            fontWeight: 700
        }
    },
    img2: {
        backgroundImage: `url(${img2})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "15rem",
        width: "20rem",
        [theme.breakpoints.down("md")]: {
            width: "19rem",
        }
    },
    img1: {
        backgroundImage: `url(${img1})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "15rem",
        width: "20rem",
        [theme.breakpoints.down("md")]: {
            width: "19rem",
        }
    },
    img3: {
        backgroundImage: `url(${img3})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "15rem",
        width: "20rem",
        [theme.breakpoints.down("md")]: {
            width: "19rem",
        }
    },
    transformYText: {
        background: "#fff",
        maxWidth: "15rem",
        margin: "auto",
        height: "11rem",
        transform: 'translateY(-35%)',
        padding: "1rem"
    },
    tipsText: {
        fontSize: "0.9rem",
        color: '#868686'
    },
    digitalText: {
        fontSize: "1rem"
    }
}))


export default function Tips() {
    const classes = useStyles()
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

    const preventDefault = (event) => event.preventDefault();

    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.tipsSection}>
                <Grid item><Typography align="center" paragraph className={classes.text1}>Our Latest News and Tips</Typography></Grid>
                <Grid item container justify="center" style={{ textAlign: matchesSM ? "center" : null }}>
                    {matchesSM ? <Grid item md ><div className={classes.rightImg}></div></Grid> : null}
                    <Grid item container direction="column" md justify="center"


                        alignContent={matchesSM ? "center" : "flex-end"}>
                        <Grid item>
                            <Grid item container spacing={1} >
                                <Grid item><div className={classes.light}></div></Grid>
                                <Grid item><Typography paragraph>OUR TIPS</Typography> </Grid>
                            </Grid>
                        </Grid>
                        <Grid item><Typography paragraph className={classes.text1} style={{ maxWidth: matchesSM ? 'unset' : '12em' }}>A Guide to Privacy in the Era of Big Tech</Typography></Grid>
                        <Grid item><Typography paragraph style={{ maxWidth: "30rem" }}>You deserve the best digital experience. Get greater speed and more memory from your devices. All with just one click. You deserve the best digital experience.</Typography></Grid>
                        <Grid item><Typography paragraph variant="body1" style={{ textAlign: matchesSM ? "left" : null }}> <Link component="button"
                            color="secondary"
                            variant="body2"
                            href="/signin">
                            Continue Reading
      </Link></Typography></Grid>
                    </Grid>
                    {matchesSM ? null : <Grid item md ><div className={classes.rightImg}></div></Grid>}
                </Grid>
                <Grid item container direction="row" justify="center" style={{ marginTop: matchesMD || matchesSM ? "2em" : "0em" }} spacing={matchesSM ? 3 : 0}>
                    <Grid item container direction="column" md alignItems="center" style={{ maxWidth: matchesMD ? "20em" : '21em', }}>


                        <Grid item container style={{ placeContent: "center" }}>
                            <Grid item>

                                <div className={classes.img2}></div>
                            </Grid>
                            <Grid item container direction="column" className={classes.transformYText}>
                                <Typography paragraph className={classes.tipsText}>OUR TIPS</Typography>
                                <Typography paragraph className={classes.digitalText}>How Get Total Digital Protection Now?</Typography>
                                <Typography paragraph> <Link component="button"
                                    color="secondary"
                                    variant="body2"
                                    href="/signin">
                                    Continue Reading
      </Link></Typography>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item container direction="column" md alignItems="center" style={{ maxWidth: matchesMD ? "20em" : '21em' }}>


                        <Grid item container style={{ placeContent: "center" }}>
                            <Grid item>

                                <div className={classes.img3}></div>
                            </Grid>
                            <Grid item container direction="column" className={classes.transformYText}>
                                <Typography paragraph className={classes.tipsText}>NEWS UPDATE</Typography>
                                <Typography paragraph className={classes.digitalText}>Get Unbelievable
Device Performance</Typography>
                                <Typography paragraph> <Link component="button"
                                    color="secondary"
                                    variant="body2"
                                    href="/signin">
                                    Continue Reading
      </Link></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md alignItems="center" style={{ maxWidth: matchesMD ? "20em" : '21em' }}>


                        <Grid item container style={{ placeContent: "center" }}>
                            <Grid item>

                                <div className={classes.img1}></div>
                            </Grid>
                            <Grid item container direction="column" className={classes.transformYText}>
                                <Typography paragraph className={classes.tipsText}>NEWS UPDATE</Typography>
                                <Typography paragraph className={classes.digitalText}>Is Smart Home Apps Safe for iOS Device?</Typography>
                                <Typography paragraph> <Link component="button"
                                    color="secondary"
                                    variant="body2"
                                    href="/signin">
                                    Continue Reading
      </Link></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}