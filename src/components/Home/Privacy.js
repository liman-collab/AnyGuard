import React, { useState, useEffect } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import StarBorder from '@material-ui/icons/StarBorder';

import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import pc from '../../assets/pc.svg';
import lock from '../../assets/lock.svg';
import password from '../../assets/password.svg';
import identity from '../../assets/identity.svg';
import privacyRespo from '../../assets/privacyRespo.svg';
import editedImage from '../../assets/editedImage.svg';

const useStyles = makeStyles((theme) => ({
    backgroundPC: {
        backgroundImage: `url(${pc})`,
        backgroundSize: "contain",
        // background: 'center',

        backgroundRepeat: "no-repeat",
        height: "30rem",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${editedImage})`,
            height: "27rem",
            backgroundSize: "cover",
            // backgroundPositionX: 'right',


            backgroundRepeat: "no-repeat",
        },
        [theme.breakpoints.down("sm")]: {
            // background: 'center',
            height: "32rem",
            backgroundSize: "contain",
            // backgroundPositionX: 'right',
            backgroundPosition: "center"

        },
        [theme.breakpoints.down("xs")]: {

            height: "20rem",


        }
    },
    lock: {
        backgroundImage: `url(${lock})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1.7rem",
        width: "1.5rem",
    },
    fontColor: {
        color: '#929292',
        [theme.breakpoints.down("md")]: {
            maxWidth: "34rem",
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: "unset",
            alignSelf: "center"
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: "17rem",
            alignSelf: "center"
        }
    }
    , password: {
        backgroundImage: `url(${password})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1.9rem",
        width: "1.9rem",
    }
    , identity: {
        backgroundImage: `url(${identity})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1.9rem",
        width: "1.9rem",
    },
    total: {
        [theme.breakpoints.down("lg")]: {
            fontSize: "2rem",
            fontWeight: 700
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "1.5rem",
            fontWeight: 700
        }
    },
    responsiveContainer: {
        marginTop: '1rem',

        [theme.breakpoints.down("lg")]: {
            justifyContent: "center",
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",

        }
    },
    security: {

        [theme.breakpoints.down("lg")]: {
            maxWidth: "23rem",

        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: "unset",
            placeContent: 'center',

        }
    }, privacySection: {
        paddingBottom: "7.5rem",
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "4rem"
        }
    },
    privacy: {
        marginLeft: '7.5rem',

    },
    expand: {
        marginTop: '1rem',

        [theme.breakpoints.down("lg")]: {
            width: "24em",
        },
        [theme.breakpoints.down("sm")]: {
            width: "inherit",
            alignContent: 'center',

        }
    },
    expandWidth: {
        [theme.breakpoints.down("md")]: {
            maxWidth: '24em'
        },
        [theme.breakpoints.down("sm")]: {
            width: "unset",
            alignContent: "center"
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: '22em'
        }

    },
    paragraphLG: {
        marginLeft: "9rem",

        [theme.breakpoints.down("lg")]: {

            marginLeft: 'unset',

        },
        [theme.breakpoints.down("md")]: {
            marginTop: "1rem",

        },

    },


    onlinePrivacy: {
        maxWidth: "35em",
        [theme.breakpoints.down("lg")]: {
            maxWidth: "23em"
        },
        [theme.breakpoints.down("md")]: {
            maxWidth: "unset",

        },
        [theme.breakpoints.down("sm")]: {
            width: undefined
        }
    }
}))


export default function Privacy() {
    const classes = useStyles()
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"))
    const matchesXL = useMediaQuery(theme.breakpoints.down("xl"))

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const handleClick = () => {
        setOpen(!open);
    };


    const handleClick2 = () => {
        setOpen2(!open2);
    };
    return (
        <React.Fragment>
            <Grid container direction="row" className={classes.privacySection} >
                <Grid item container  >
                    {matchesSM ? <Grid item container md justify="center" >

                        <div className={classes.backgroundPC}></div>

                    </Grid> : null}

                    <Grid container item md direction="row" className={classes.paragraphLG}>
                        <Grid item container justify="center" >
                            <Grid container item className={classes.security}>
                                <Grid item><div className={classes.lock}></div></Grid>
                                <Grid item className={classes.fontColor} style={{ marginLeft: "10px" }} ><Typography>PRIVACY</Typography></Grid>
                            </Grid>
                            <Grid container item className={classes.responsiveContainer} >
                                <Grid container item direction="column" spacing={matchesLG ? 0 : 3}

                                    className={classes.onlinePrivacy} >
                                    <Grid item><Typography variant="h3" paragraph className={classes.total}>Enjoy true online privacy</Typography></Grid>
                                    <Grid item className={classes.fontColor}><Typography>Be anonymous in everything you do</Typography>
                                    </Grid>
                                    <Grid item className={classes.fontColor}  ><Typography>Take back control of your data. Every trace you leave online,{matchesSM ? null : <br />} what you buy, where you are, what you search for, which{matchesSM ? null : <br />} passwords you use – We keeps it private.
      </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item direction="column" spacing={matchesLG ? 0 : 3} className={classes.expand}>
                                <Grid item className={classes.expandWidth}>
                                    <ListItem button onClick={handleClick} disableGutters={matchesSM ? false : true}>
                                        <ListItemIcon>
                                            <div className={classes.identity}></div>
                                        </ListItemIcon>
                                        <ListItemText style={{ color: "red", maxWidth: '20rem' }} primary="Phantom VPN Identity"
                                            secondary="Encrypts and anonymizes your web traffic (500 MB/month)" />
                                        {open ? <ExpandLess color="secondary" /> : <ExpandMore color="secondary" />}
                                    </ListItem>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItem button className={classes.nested}>
                                                <ListItemIcon>
                                                    <StarBorder />
                                                </ListItemIcon>
                                                <ListItemText primary="Starred" />
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                </Grid>
                                <Grid item className={classes.expandWidth}>
                                    <ListItem button onClick={handleClick2} disableGutters={matchesSM ? false : true}>
                                        <ListItemIcon >
                                            <div className={classes.password}></div>
                                        </ListItemIcon>
                                        <ListItemText style={{ color: "red", maxWidth: '20rem' }} primary="Pasword Manager Protection"
                                            secondary="Creates & remembers unhackable passwords for each account
                                            " />
                                        {open2 ? <ExpandLess color="secondary" /> : <ExpandMore color="secondary" />}
                                    </ListItem>
                                    <Collapse in={open2} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItem button className={classes.nested}>
                                                <ListItemIcon>
                                                    <StarBorder />
                                                </ListItemIcon>
                                                <ListItemText primary="Starred" />
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {matchesSM ? null : <Grid container item md >
                        <div className={classes.backgroundPC}></div>
                    </Grid>}

                </Grid>
            </Grid>
        </React.Fragment >
    )

}