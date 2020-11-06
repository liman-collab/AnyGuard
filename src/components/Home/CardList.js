import React, { useState, useEffect } from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Grid, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import avatar_card_one from '../../assets/avatar_card_one.svg'
import avatar_card_two from '../../assets/avatar_card_two.svg'
import avatar_card_4 from '../../assets/avatar_card_4.svg'
import avatar_shape_3 from '../../assets/avatar_shape_3.svg'
import headphones from '../../assets/headphones.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery'
const useStyles = makeStyles((theme) => ({
    secondSection: {
        // padding: '7.5rem '
        padding: "9rem 3rem",
        // [theme.breakpoints.down("md")]: {
        //     padding: '3em 2em'
        // },
        [theme.breakpoints.down("sm")]: {
            padding: '3rem 6rem'
        },
        [theme.breakpoints.down("xs")]: {
            padding: '3rem 2rem'
        }
    },
    avatar: {
        backgroundColor: "white",
        padding: "0.5rem",

    },
    avatar_card_one: {
        backgroundImage: `url(${avatar_card_one})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "2rem",
        width: "2rem",
    },
    avatar_card_two: {
        backgroundImage: `url(${avatar_card_two})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "2rem",
        width: "2rem",

    },
    avatar_shape_3: {
        backgroundImage: `url(${avatar_shape_3})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "2rem",
        width: "2rem",
    },
    avatar_card_4: {
        backgroundImage: `url(${avatar_card_4})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "2rem",
        width: "2rem",

    },
    headphones: {
        backgroundImage: `url(${headphones})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "2rem",
        width: "2rem",
    },

    safetyText: {

        maxWidth: '10em',


    },
    cardContent: {
        [theme.breakpoints.down("md")]: {
            textAlign: "center",

        }

    },
    cardHeader: {
        [theme.breakpoints.down("md")]: {
        }
    },
    cardRoot: {
        [theme.breakpoints.down("md")]: {
            display: 'block',
            padding: '16px',
            alignItems: 'center',
            textAlign: '-webkit-center',
        }
    },
    textWidth: {
        // maxWidth: "18em"
    },
    position: {
        width: '70%',
        margin: 'auto',
        [theme.breakpoints.down("lg")]: {
            width: 'unset',

        }
    },
    paragraph1: {
        maxWidth: '23%',
        margin: "auto"
    },
    textH4: {

        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
            fontWeight: 900,

        }
    }
}))


export default function CardList() {
    const classes = useStyles()
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"))

    return (
        <React.Fragment>
            <Grid container className={classes.secondSection} alignItems="center" justify="center">
                <Grid container spacing={matchesSM ? undefined : 10} alignItems="center" >
                    <Grid item md={4}  >
                        <Card elevation={0} className={classes.position}>

                            <CardContent className={classes.cardContent}>
                                <Typography variant="body1" className={classes.textWidth}>WHY CHOOSE US</Typography>
                                <Typography variant={matchesLG ? "h5" : "h4"} className={classes.textH4} component="p">
                                    We can Give You
                                    Safety Guarantee.
                                    Anytime, Anywhere
        </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4} >
                        <Card elevation={0} className={classes.position}>
                            <CardHeader classes={{ root: classes.cardRoot }}
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        <div className={classes.avatar_card_one}></div>
                                    </Avatar>
                                }
                                className={classes.cardHeader}

                            >
                            </CardHeader>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h6">Advanced Security</Typography>
                                <Typography variant="body1" className={classes.textWidth} color="textSecondary" component="p">
                                    All your devices, privacy and personal data, your searches, your software, your shopping and banking and your home network.
        </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={4} >
                        <Card elevation={0} className={classes.position}>
                            <CardHeader classes={{ root: classes.cardRoot }}
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        <div className={classes.avatar_card_two}></div>
                                    </Avatar>
                                }
                            >
                            </CardHeader>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h6">Absolute Privacy</Typography>
                                <Typography variant="body1" className={classes.textWidth} color="textSecondary" component="p">
                                    All your devices, privacy and personal data, your searches, your software, your shopping and banking and your home network.
        </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4} >
                        <Card elevation={0} className={classes.position}>
                            <CardHeader classes={{ root: classes.cardRoot }}
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        <div className={classes.avatar_shape_3}></div>
                                    </Avatar>
                                }
                            >
                            </CardHeader>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h6">Cloud Data Storage</Typography>
                                <Typography variant="body1" color="textSecondary"
                                    className={classes.textWidth}
                                    component="p">
                                    All your devices, privacy and personal data, your searches, your software, your shopping and banking and your home network.
</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4} >
                        <Card elevation={0} className={classes.position}>
                            <CardHeader classes={{ root: classes.cardRoot }}
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        <div className={classes.avatar_card_4}></div>
                                    </Avatar>
                                }
                            >
                            </CardHeader>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h6">One License, All Device</Typography>
                                <Typography variant="body1" className={classes.textWidth} color="textSecondary" component="p">
                                    All your devices, privacy and personal data, your searches, your software, your shopping and banking and your home network.
</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={4}  >
                        <Card elevation={0} className={classes.position}>
                            <CardHeader classes={{ root: classes.cardRoot }}
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        <div className={classes.headphones}></div>
                                    </Avatar>
                                }

                            >
                            </CardHeader>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h6">24/7 Customer Care</Typography>
                                <Typography variant="body1" className={classes.textWidth} color="textSecondary" component="p">
                                    All your devices, privacy and personal data, your searches, your software, your shopping and banking and your home network.
</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment >
    )

}