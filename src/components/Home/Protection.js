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
import group from '../../assets/group.svg';
import icon from '../../assets/icon.svg';
import shield from '../../assets/shield.svg';
import search from '../../assets/search.svg';
import mobileGroup from '../../assets/mobileGroup.svg';
const useStyles = makeStyles((theme) => ({
    backgroundProtection: {
        backgroundImage: `url(${group})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "30rem",
        width: "100%",

        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileGroup})`,
            height: '27rem',
            background: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: "no-repeat",
        },
        [theme.breakpoints.down("sm")]: {

            // height: '19rem',

        },
        [theme.breakpoints.down("xs")]: {

            height: '19rem',

        }
    },
    icon: {
        backgroundImage: `url(${icon})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1.5rem",
        width: "1.9rem",
    },
    fontColor: {
        color: '#929292',

        [theme.breakpoints.down("md")]: {

            maxWidth: "25rem",
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
    , shield: {
        backgroundImage: `url(${shield})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1.9rem",
        width: "1.9rem",
    }
    , search: {
        backgroundImage: `url(${search})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1.9rem",
        width: "1.9rem",
    },
    total: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
            fontWeight: 700
        }
    },
    responsiveContainer: {
        marginTop: '1rem',

        [theme.breakpoints.down("sm")]: {
            textAlign: "center",

        }
    },
    security: {
        [theme.breakpoints.down("sm")]: {
            placeContent: 'center'
        }
    },
    protectionSection: {

        paddingBottom: "7.5rem",
        [theme.breakpoints.down("lg")]: {
            padding: "3rem 0",
        },
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "1rem"
        }
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
    expand: {
        marginTop: '1rem',
        [theme.breakpoints.down("lg")]: {
            marginTop: '0rem',
            width: "24em",
        },
        [theme.breakpoints.down("sm")]: {
            width: "unset",
            alignContent: "center"
        },
        [theme.breakpoints.down("xs")]: {
            width: "unset"
        },

    },
    content: {

        [theme.breakpoints.down("md")]: {

        }
    },
    expandWidth: {
        [theme.breakpoints.down("md")]: {
            maxWidth: '24em'
        },

        [theme.breakpoints.down("xs")]: {
            maxWidth: '22em'
        }
    }

}))


export default function CardList() {
    const classes = useStyles()
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"))

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
            <Grid container direction="row" className={classes.protectionSection} >
                <Grid container item>
                    <Grid container item md className={classes.img} >
                        <div className={classes.backgroundProtection}></div>
                    </Grid>

                    <Grid container item md direction="row" justify="center"
                        className={classes.content} >
                        <Grid item >
                            <Grid item container className={classes.security} alignItems="center"

                            >
                                <Grid item><div className={classes.icon}></div></Grid>
                                <Grid item style={{ marginLeft: "10px" }} className={classes.fontColor}><Typography>SECURITY</Typography></Grid>
                            </Grid>
                            <Grid container item className={classes.responsiveContainer}>
                                <Grid container item direction="column" spacing={matchesLG ? 0 : 3}
                                    className={classes.digital}>
                                    <Grid item><Typography variant="h3" paragraph className={classes.total}>Total digital protection</Typography></Grid>
                                    <Grid item className={classes.fontColor}><Typography>Whatever you use and whatever you do – Make Sure,{matchesSM ? null : <br />} Keep it secure
</Typography>
                                    </Grid>
                                    <Grid item className={classes.fontColor}  ><Typography>All your devices, your privacy and personal data, your searches,{matchesSM ? null : <br />} your software, your shopping and banking – even{matchesSM ? null : <br />}  your home network. We safeguards them all.
      </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item direction="column" spacing={matchesLG ? 0 : 3} className={classes.expand}>
                                <Grid item className={classes.expandWidth}>
                                    <ListItem button onClick={handleClick} disableGutters={matchesSM ? false : true}>
                                        <ListItemIcon>
                                            <div className={classes.shield}></div>
                                        </ListItemIcon>
                                        <ListItemText style={{ color: "red", maxWidth: "20rem" }} primary="Free Download for Any Device"
                                            secondary="Protects you in real-time against 
                    malware and online threats."/>
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
                                            <div className={classes.search}></div>
                                        </ListItemIcon>
                                        <ListItemText style={{ color: "red", maxWidth: "20rem" }} primary="Stay Safe with Safe Search"
                                            secondary="No Worries again." />
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

                </Grid>
            </Grid>
        </React.Fragment >
    )

}