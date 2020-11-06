import React, { Fragment, useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import homePageBck from '../../assets/homePageBck.svg'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import grupi from '../../assets/grupi.svg'
import dots from '../../assets/dots.svg'
const useStyles = makeStyles((theme) => ({

    section2: {
        padding: "40rem 0",
        [theme.breakpoints.down("md")]: {
            padding: "47rem 0",
        }
    },
    dots: {
        backgroundImage: `url(${dots})`,
        backgroundRepeat: "no-repeat",
        height: "1rem",
        width: "4rem",
    },
    textWrap: {
        maxWidth: "20rem"
    },
    textWrap2: {
        maxWidth: "24rem"
    },
    button: {
        margin: theme.spacing(1, 0),
        background: "#FEF3F3",
        color: "red",
        padding: "7px",

    },
    textRight: {
        maxWidth: "23rem"
    },
    adjustText: {
        fontSize: "1.2rem",
        fontWeight: 400
    },
    space: {
        padding: theme.spacing(1, 0),
    }
}))

export default function Section1() {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"))


    return (
        <React.Fragment>
            <Grid container direction="row" className={classes.section2} >
                <Grid item container direction="column" md alignContent="center" >
                    <Grid item component="p" className={classes.space}>
                        <Grid item container direction="row" alignItems="center">
                            <div className={classes.dots}></div>
                            <Grid item><Typography style={{ color: "#868686" }}>THE VISION</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.space}><Typography variant="h5" className={classes.textWrap}>We work hard every day to
                    make Anyguard the world's
most best antivirus product.</Typography></Grid>
                    <Grid item className={classes.space}><Typography variant="body2" className={classes.textWrap2}>AnyGuard is one of the largest security companies in the world using next-gen technologies to fight cyber attacks in real time. We differ from other next-gen companies in that we have an immense cloud-based machine learning engine.</Typography></Grid>
                    <Grid item className={classes.space}> <Button

                        className={classes.button}
                        endIcon={<ChevronRightIcon fontSize="large" />}
                    >
                        Learn More&nbsp;&nbsp;&nbsp;&nbsp;
      </Button></Grid>
                </Grid>
                <Grid item container direction="column" md alignContent="center">
                    <Grid item className={classes.space}>
                        <Grid item container direction="row" alignItems="center">
                            <div className={classes.dots}></div>
                            <Grid item><Typography style={{ color: "#868686" }}>THE MISSION</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.space}>
                        <Grid item container direction="row" spacing={2} alignItems="center">
                            <Grid item><Typography color="secondary">1</Typography></Grid>
                            <Grid item><Typography className={classes.adjustText}>Device Security</Typography></Grid>

                        </Grid>
                    </Grid>
                    <Grid item className={classes.space}>
                        <Typography variant="body2" className={classes.textRight}>AnyGuard is one of the largest security companies in the world using next-gen technologies to fight cyber attacks.</Typography>
                    </Grid>
                    <Grid item className={classes.space}>
                        <Grid item container direction="row" spacing={2} alignItems="center">
                            <Grid item><Typography color="secondary">2</Typography></Grid>
                            <Grid item><Typography className={classes.adjustText}>Cloud Data Backup</Typography></Grid>

                        </Grid>
                    </Grid>
                    <Grid item className={classes.space}>
                        <Typography variant="body2" className={classes.textRight}>AnyGuard is one of the largest security companies in the world using next-gen technologies to fight cyber attacks.</Typography>
                    </Grid>
                    <Grid item className={classes.space}>
                        <Grid item container direction="row" spacing={2} alignItems="center">
                            <Grid item><Typography color="secondary">3</Typography></Grid>
                            <Grid item><Typography className={classes.adjustText}>Protection Digital Asset</Typography></Grid>

                        </Grid>
                    </Grid>
                    <Grid item className={classes.space}>
                        <Typography variant="body2" className={classes.textRight}>AnyGuard is one of the largest security companies in the world using next-gen technologies to fight cyber attacks.</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment >


    )

}
