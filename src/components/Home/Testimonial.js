import React, { useState, useEffect } from 'react';


import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating'
import Avatar from '@material-ui/core/Avatar'
import prev from '../../assets/prev.svg'
import next from '../../assets/next.svg'
import oval from '../../assets/oval.svg'
import Hidden from '@material-ui/core/Hidden'
import CarouselComp from './CarouselComp'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "2rem"
    },
    reviewContainer: {
        marginLeft: '5.5rem',
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
            marginLeft: 0,
            maxWidth: '16em',
        }
    },
    arrowContainer: {
        marginRight: '5.5rem',

    },
    textMain: {
        maxWidth: '20rem'
    },
    itemContainer: {
        maxWidth: "22em",
        background: "#FAFAFA",
        padding: "3.5rem",
        marginLeft: '5.5rem',
        marginTop: "1rem",
        [theme.breakpoints.down("md")]: {

            marginLeft: 0,
        }
    },
    carousel: {
        [theme.breakpoints.down("md")]: {

            placeContent: "center"
        }
    }
}))


export default function Testimonial() {
    const classes = useStyles()
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"))
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const [StarValue, setStarValue] = useState(2)




    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.container}>
                <Grid item container justify="center" >
                    <Grid item container direction="column" md sm className={classes.reviewContainer}>
                        <Grid item>
                            <Typography paragraph variant="body1" color="secondary">TESTIMONIAL REVIEW</Typography>
                            <Typography paragraph variant="h5" style={{ maxWidth: matchesMD ? undefined : "18rem" }}>What are They Saying About Anyguard</Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown> <Grid item container direction="row" justify="flex-end" alignItems="center" md sm className={classes.arrowContainer}>
                        <Grid item >
                            <IconButton size="small" >
                                <img src={prev} alt="Back to previous page" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton size="small" >
                                <img src={next} alt="Go to next page" />
                            </IconButton>
                        </Grid>
                    </Grid></Hidden>
                    <Grid item container direction="row" >

                        <Grid item container direction="row" className={classes.carousel} >
                            <Grid item container className={classes.itemContainer}>
                                <Grid item container direction="column">
                                    <Grid item style={{ marginBottom: "0.5em" }}>
                                        <Rating
                                            name="simple-controlled"
                                            value={StarValue}
                                            disabled
                                        />

                                    </Grid>
                                    <Grid item>
                                        <Typography paragraph variant="body1">Anyguardis the best antivirus I’ve ever use until now. I don’t worry about device protection cause Anyguard can give me secure feeling when I need to surfing in internet everytime.</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={1} alignItems="center" >
                                    <Grid item><Avatar alt="Cody Palmer"
                                        src={oval} /></Grid>

                                    <Grid item>
                                        <Typography>Cody 1</Typography>
                                        <Typography>CEO of Palmer Group Ltd</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container className={classes.itemContainer}>
                                <Grid item container direction="column">
                                    <Grid item style={{ marginBottom: "0.5em" }}>
                                        <Rating
                                            name="simple-controlled"
                                            value={StarValue}
                                            disabled
                                        />

                                    </Grid>
                                    <Grid item>
                                        <Typography paragraph variant="body1">Anyguardis the best antivirus I’ve ever use until now. I don’t worry about device protection cause Anyguard can give me secure feeling when I need to surfing in internet everytime.</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={1} alignItems="center" >
                                    <Grid item><Avatar alt="Cody Palmer"
                                        src={oval} /></Grid>

                                    <Grid item>
                                        <Typography>Cody 1</Typography>
                                        <Typography>CEO of Palmer Group Ltd</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container className={classes.itemContainer}>
                                <Grid item container direction="column">
                                    <Grid item style={{ marginBottom: "0.5em" }}>
                                        <Rating
                                            name="simple-controlled"
                                            value={StarValue}
                                            disabled
                                        />

                                    </Grid>
                                    <Grid item>
                                        <Typography paragraph variant="body1">Anyguardis the best antivirus I’ve ever use until now. I don’t worry about device protection cause Anyguard can give me secure feeling when I need to surfing in internet everytime.</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={1} alignItems="center" >
                                    <Grid item><Avatar alt="Cody Palmer"
                                        src={oval} /></Grid>

                                    <Grid item>
                                        <Typography>Cody 1</Typography>
                                        <Typography>CEO of Palmer Group Ltd</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container className={classes.itemContainer}>
                                <Grid item container direction="column">
                                    <Grid item style={{ marginBottom: "0.5em" }}>
                                        <Rating
                                            name="simple-controlled"
                                            value={StarValue}
                                            disabled
                                        />

                                    </Grid>
                                    <Grid item>
                                        <Typography paragraph variant="body1">Anyguardis the best antivirus I’ve ever use until now. I don’t worry about device protection cause Anyguard can give me secure feeling when I need to surfing in internet everytime.</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={1} alignItems="center" >
                                    <Grid item><Avatar alt="Cody Palmer"
                                        src={oval} /></Grid>

                                    <Grid item>
                                        <Typography>Cody 1</Typography>
                                        <Typography>CEO of Palmer Group Ltd</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>
                    <Hidden lgUp> <Grid item container direction="row" justify="center" alignItems="center" md sm >
                        <Grid item >
                            <IconButton size="small" >
                                <img src={prev} alt="Back to previous page" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton size="small" >
                                <img src={next} alt="Go to next page" />
                            </IconButton>
                        </Grid>
                    </Grid></Hidden>
                </Grid>
            </Grid>
        </React.Fragment >
    )

}