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

import pc2 from '../../assets/pc2.svg';
import rocket from '../../assets/rocket.svg';
import performance from '../../assets/performance.svg';

import pc2Responsive from '../../assets/pc2Responsive.svg';

const useStyles = makeStyles((theme) => ({
    backgroundProtection: {
        backgroundImage: `url(${pc2})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        background: 'center',
        height: "30rem",
        width: "100%",
        marginLeft: '4rem',
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${pc2Responsive})`,
            height: "27rem",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            marginLeft: 'unset',
        },
        [theme.breakpoints.down("sm")]: {
            backgroundImage: `url(${pc2Responsive})`,
            height: "23rem",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            marginLeft: 'unset',
        }
    },
    rocket: {
        backgroundImage: `url(${rocket})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1.5rem",
        width: "1.5rem",
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
    , performance: {
        backgroundImage: `url(${performance})`,
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
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        }
    },
    security: {
        [theme.breakpoints.down("sm")]: {
            placeContent: 'center'
        }
    },
    performanceSection: {
        paddingBottom: "7.5rem",
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "4rem"
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
    expandWidth: {
        [theme.breakpoints.down("md")]: {
            maxWidth: '24em'
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: '22em'
        }

    },

}))


export default function Performance() {
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
            <Grid container direction="row" className={classes.performanceSection} >
                <Grid container item >
                    <Grid container item md >
                        <div className={classes.backgroundProtection}></div>
                    </Grid>

                    <Grid container item md direction="row" justify="center" alignItems="center">
                        <Grid item>
                            <Grid container item className={classes.security} alignItems="center"
                            >
                                <Grid item><div className={classes.rocket}></div></Grid>
                                <Grid item className={classes.fontColor} style={{ marginLeft: "10px" }}><Typography
                                >PERFORMANCE</Typography></Grid>
                            </Grid>
                            <Grid container item className={classes.responsiveContainer}>
                                <Grid container item direction="column" spacing={matchesLG ? 0 : 3}
                                    className={classes.device}>
                                    <Grid item><Typography variant="h3" className={classes.total} paragraph>Get unbelievable {matchesSM ? null : <br />} device performance</Typography></Grid>
                                    <Grid item className={classes.fontColor}><Typography>Your Device maybe too slow. It’s not cause they’re bad. {matchesSM ? null : <br />} Just need a “right” Antivirus Product
</Typography>
                                    </Grid>
                                    <Grid item className={classes.fontColor}  ><Typography>You deserve the best digital experience. Get greater speed{matchesSM ? null : <br />}  and more memory from your devices. All with just one click.
      </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item direction="column" spacing={matchesLG ? 0 : 3}
                                className={classes.expand}
                            >
                                <Grid item className={classes.expandWidth}>
                                    <ListItem button onClick={handleClick} disableGutters={matchesSM ? false : true}>
                                        <ListItemIcon>
                                            <div className={classes.performance}></div>
                                        </ListItemIcon>
                                        <ListItemText style={{ color: "red", maxWidth: "20rem" }} primary="Preformance Optimizer"
                                            secondary="Make RAM, VGA and Storage can get a best perform. Bye bye Slow Anymore" />
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

                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </React.Fragment >
    )

}