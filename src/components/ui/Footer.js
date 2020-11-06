import React, { useState, useEffect } from 'react';


import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'

import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import keyboard from '../../assets/keyboard.svg'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input'
import Rating from '@material-ui/lab/Rating'
import footerLogo from '../../assets/footerLogo.svg'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'

const useStyles = makeStyles((theme) => ({
    keyboard: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${keyboard})`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "34vh",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            backgroundImage: "none",
            backgroundColor: "#17262F",

        },
        [theme.breakpoints.down("sm")]: {
            height: "50vh",
        }
    },
    subscribe: {
        color: "#fff",
        maxWidth: "16em",
        [theme.breakpoints.down("md")]: {
            maxWidth: "13em",
            lineHeight: 1.5,
            fontSize: "2em",
            fontWeight: "200"
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: "13em",
            lineHeight: 1.5,
            fontSize: "1.5em",
            fontWeight: "200"
        }

    },
    margin: {
        margin: theme.spacing(1),
        backgroundColor: "#fff",
        borderRadius: "35px",
        padding: '7px',
        width: 330,
        paddingBottom: "none",
        [theme.breakpoints.down("md")]: {
            width: 280
        }

    },
    downloadButton: {
        backgroundColor: "red",
        borderRadius: 50,
        color: "white",
        textTransform: "none",
        fontWeight: 400,
        height: 45,
        width: 200,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("md")]: {
            width: 170
        }
    },
    proText: {
        maxWidth: 'fit-content',
        [theme.breakpoints.down("md")]: {
            marginBottom: "2rem"
        },

    },
    mainContainer: {
        backgroundColor: "#17262F",
        [theme.breakpoints.down("sm")]: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${keyboard})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
        }
    },
    link: {
        color: "white",
        fontFamily: "Roboto",
        fontSize: "0.9rem",
        fontWeight: 200,
        textDecoration: "none"
    },
    linkText: {
        color: "white",
        fontFamily: "Roboto",
        fontSize: "0.9rem",
        fontWeight: 200,
        textDecoration: "none",
        maxWidth: '16rem',
        [theme.breakpoints.only("sm")]: {
            maxWidth: "unset"
        },
        [theme.breakpoints.only("md")]: {
            maxWidth: "unset"
        },
    },
    linkFirst: {
        color: "white",
        fontFamily: "Roboto",
        fontSize: "0.9rem",
        fontWeight: 600,
        textDecoration: "none"
    },
    gridItem: {
        margin: "5em",
        [theme.breakpoints.down("lg")]: {
            margin: "2em",
        },
        [theme.breakpoints.down("md")]: {
            // margin: "1em",
        },
    },
    footerLogo: {
        backgroundImage: `url(${footerLogo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "2.1rem",
        width: "7.6rem",
    },
    facebook: {
        backgroundImage: `url(${facebook})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1.5rem",
        width: "1.5rem",
    },
    instagram: {
        backgroundImage: `url(${instagram})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1.5rem",
        width: "1.5rem",
    },
    twitter: {
        backgroundImage: `url(${twitter})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1.5rem",
        width: "1.5rem",
    },
    youtube: {
        backgroundImage: `url(${youtube})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1.5rem",
        width: "2.1rem",
    },
    rightSide: {
        [theme.breakpoints.down("sm")]: {
            textAlign: 'center'
        }
    },
    millionText: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.9rem"
        }

    },
    support: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.9rem"
        }

    },
    telNumber: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.9rem"
        }

    }
}))


export default function Footer() {
    const classes = useStyles()
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"))
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))





    return (
        <React.Fragment>

            <Grid container direction="column" >

                <Grid item container direction="row"
                    justify="center" alignItems="center" className={classes.keyboard}>
                    <Grid item container justify="space-around" alignItems="center"
                    >
                        <Hidden mdUp>
                            <Grid item md className={classes.proText} ><Typography variant="h3" className={classes.subscribe} align={matchesSM ? "center" : undefined}>Ready to get Started?
                            Subscribe to our newsletter
and get 2 month for free</Typography></Grid>
                        </Hidden>
                        <Hidden smDown>
                            <Grid item md className={classes.proText} ><Typography variant="h3" className={classes.subscribe} align={matchesSM ? "center" : undefined}>Subscribe and win the chance for AnyGuard pro</Typography></Grid>
                        </Hidden>
                        <Grid item container md direction="row" alignItems="center"
                            style={{ maxWidth: 'fit-content' }}
                            className={classes.rightSide}
                        >
                            <Grid item xs={matchesXS ? 12 : undefined} style={{ marginBottom: matchesXS ? "3rem" : undefined }}>
                                <TextField
                                    className={classes.margin}
                                    id="input-with-icon-textfield"

                                    InputProps={{


                                        startAdornment: (
                                            <InputAdornment position="start" >
                                                <EmailIcon />
                                            </InputAdornment>
                                        ),
                                        disableUnderline: (
                                            true
                                        )


                                    }}
                                />
                            </Grid>
                            <Grid item xs={matchesXS ? 12 : undefined}>
                                <Button className={classes.downloadButton} variant="contained">Get 2 Month Free</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container justify="center" className={classes.mainContainer}>

                    <Grid item className={classes.gridItem} style={{ textAlign: matchesSM || matchesMD || matchesXS ? "-webkit-center" : undefined }}
                        sm={matchesSM ? 12 : undefined} md={matchesMD ? 12 : undefined} xs={matchesXS ? 12 : undefined}>
                        <Grid container direction="column" alignItems={matchesSM ? "center" : undefined} spacing={2}>
                            <Grid item className={classes.link}>
                                <div className={classes.footerLogo}></div>
                            </Grid>
                            <Grid item className={classes.linkText} >
                                The Most Growing Antivirus product in 2018. Has more than 5 award in one year first launch.
                              </Grid>
                            <Hidden smDown mdDown>
                                <Grid item container spacing={2}>
                                    <Grid item><div className={classes.facebook}></div></Grid>
                                    <Grid item><div className={classes.instagram}></div></Grid>
                                    <Grid item><div className={classes.twitter}></div></Grid>
                                    <Grid item><div className={classes.youtube}></div></Grid>

                                </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
                    <Hidden smUp>
                        <Divider style={{ backgroundColor: "#FFFFFF", margin: "3px", width: "80%", margin: "auto" }} />
                    </Hidden>

                    <Grid item className={classes.gridItem} xs={matchesXS && 3}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.linkFirst}>
                                PRODUCTS
                    </Grid>
                            <Grid item className={classes.link}>
                                Popular
                    </Grid>
                            <Grid item className={classes.link}>
                                Trending
                    </Grid>
                            <Grid item className={classes.link}>
                                Categories
                    </Grid>
                            <Grid item className={classes.link}>
                                Features
                    </Grid>
                        </Grid>
                    </Grid>


                    <Grid item className={classes.gridItem} xs={matchesXS && 3}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.linkFirst}>
                                CATEGORIES
                    </Grid>
                            <Grid item className={classes.link}>
                                Mail
                    </Grid>
                            <Grid item className={classes.link}>
                                News
                    </Grid>
                            <Grid item className={classes.link}>
                                Health
                           </Grid>
                            <Grid item className={classes.link}>
                                More...
                           </Grid>
                        </Grid>
                    </Grid>


                    <Grid item className={classes.gridItem} xs={matchesXS && 3}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.linkFirst}>
                                RESOURCES
                    </Grid>
                            <Grid item className={classes.link}>
                                Support
                    </Grid>
                            <Grid item className={classes.link}>
                                Developers
                    </Grid>
                            <Grid item className={classes.link}>
                                Customer Service
                    </Grid>
                            <Grid item className={classes.link}>
                                Get Strated Guide
                    </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem} xs={matchesXS && 3}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.linkFirst}>
                                COMPANY
                    </Grid>
                            <Grid item className={classes.link}>
                                Contact Us
                    </Grid>
                            <Grid item className={classes.link}>
                                Developers
                    </Grid>
                            <Grid item className={classes.link}>
                                Careers
                    </Grid>
                            <Grid item className={classes.link}>
                                Privacy
                    </Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem} >
                        <Grid container direction={matchesSM ? "row" : "column"} spacing={1}>
                            <Grid item container direction="column" style={{ maxWidth: matchesSM ? "10em" : "16em" }} sm={6}>
                                <Grid item className={classes.link} >
                                    <Rating
                                        name="simple-controlled"
                                        value={5}

                                        color="primary"
                                    />
                                </Grid>


                                <Grid item className={classes.link} style={{ maxWidth: "14rem" }} >
                                    <Typography className={classes.millionText}>More than 10 Million User
                                Satisfied all over the world</Typography>


                                </Grid>
                            </Grid>
                            <Grid item container direction="column" style={{ maxWidth: matchesSM ? "10em" : undefined }}
                            >
                                <Grid item container className={classes.link} >
                                    <Grid item><EmailIcon />
                                    </Grid>

                                    <Grid item style={{ marginLeft: "5px" }}><Typography
                                        className={classes.support}> support@anyguard.com</Typography>
                                    </Grid>

                                </Grid>
                                <Divider style={{ backgroundColor: "#FFFFFF", margin: "3px" }}
                                />
                                <Grid item container className={classes.link}  >
                                    <Grid item><PhoneIcon /> </Grid>
                                    <Grid item style={{ marginLeft: "5px" }}>   <Typography
                                        className={classes.telNumber}>+0800 252 22 442</Typography></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </React.Fragment >
    )

}