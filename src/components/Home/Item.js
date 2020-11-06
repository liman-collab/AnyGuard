import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Rating from '@material-ui/lab/Rating'
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar'




const useStyles = makeStyles((theme) => ({
    container: {
        padding: "2rem"
    },
    itemContainer: {
        maxWidth: "22em",
        background: "#FAFAFA",
        padding: "3.5rem",
        margin: '1rem',
        // marginTop: "1rem"
    },
    carousel: {
        // marginLeft: "3.5rem"
    }
}))
export default function Item(props) {
    const classes = useStyles()
    const [StarValue, setStarValue] = useState(2)
    return (
        <>
            <Grid item container direction="row" justify="center" className={classes.carousel}>
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
                            <Typography paragraph variant="body1">{props.text}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={1} alignItems="center" >
                        <Grid item><Avatar alt="Cody Palmer"
                            src={props.avatar} /></Grid>

                        <Grid item>
                            <Typography>{props.name}</Typography>
                            <Typography>CEO of Palmer Group Ltd</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid item container className={classes.itemContainer}>
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
                            src={props.avatar} /></Grid>

                        <Grid item>
                            <Typography>{props.name}</Typography>
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
                            src={props.avatar} /></Grid>

                        <Grid item>
                            <Typography>{props.name}</Typography>
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
                            src={props.avatar} /></Grid>

                        <Grid item>
                            <Typography>{props.name}</Typography>
                            <Typography>CEO of Palmer Group Ltd</Typography>
                        </Grid>
                    </Grid> 
                </Grid>*/}
            </Grid>
        </>
    )
}