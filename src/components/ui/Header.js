import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import SortIcon from '@material-ui/icons/Sort'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import MenuIcon from '@material-ui/icons/Menu'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Divider from '@material-ui/core/Divider';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

import MenuList from '@material-ui/core/MenuList';

import { Link } from 'react-router-dom';


import logo from '../../assets/logo.svg'
import responsiveLogo from '../../assets/responsiveLogo.svg'
import redLogo from '../../assets/redLogo.svg'
import loginWhiteUser from '../../assets/loginWhiteUser.svg'
import registerBlackUser from '../../assets/registerBlackUser.svg'
import blackLogo from '../../assets/blackLogo.svg'
import blackUser from '../../assets/blackUser.svg'
import android from '../../assets/android.svg'
import apple from '../../assets/apple.svg'
const useStyles = makeStyles((theme) => ({
    appabar: {
        background: "none",
    },
    logoImage: {
        backgroundImage: `url(${logo})`,
        backgroundPosition: 'center',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "5em",
        width: "20em",

        [theme.breakpoints.down("lg")]: {
            height: "3.5em",
            width: "12em",
        }
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    toolbarMargin: {
        // ...theme.mixins.toolbar
    },
    toolbar: {
        padding: "1.5rem",
        width: '85%',
        margin: 'auto',
        [theme.breakpoints.down("lg")]: {
            padding: "1em"
        }
    },
    root: {
        flexGrow: 1
    },
    button: {
        ...theme.typography.headerButton,
        width: "100px",
        borderRadius: "50px",
        "&:hover": {
            backgroundColor: '#F26C6C',
            color: 'white',
            borderRadius: "50px",

        }
    },
    tab: {
        ...theme.typography.tab,

    },
    number: {
        fontWeight: 300
    },
    menu: {
        zIndex: 1302,
        borderRadius: "0px "
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerContainer: {

        color: "#fff",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        height: "40px",
        width: "40px"
    },
    drawerIconRight: {
        height: "40px",
        width: "40px",

    },
    rightIconDrawer: {
        marginLeft: "auto"
    },
    responsiveLogo: {
        width: "4rem",
        height: "4rem",
        background: `url(${responsiveLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    leftDrawerList: {
        width: '14rem',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        padding: "2rem"
    },
    rightDrawerList: {
        width: '14rem',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        padding: "2rem",

    },
    rightDrawerList2: {
        padding: "2rem"
    },
    menuIcon: {
        width: "3rem",
        height: "3rem",
        color: "red"

    },
    redLogo: {
        width: "3rem",
        height: "3rem",
        background: `url(${redLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    blackUser: {
        width: "3rem",
        height: "3rem",
        background: `url(${blackUser})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    blackLogo: {
        width: "3rem",
        height: "3rem",
        background: `url(${blackLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    tabResponsive: {

        ...theme.typography.responsiveTab,


    },
    listItemIcon: {
        cursor: "pointer"
    },
    divider: {
        ...theme.props.MuiDivider,
        opacity: 0.3
    },
    dividerRight: {
        backgroundColor: "#17262F",

    },
    loginWhiteUser: {
        width: "3rem",
        height: "3rem",
        background: `url(${loginWhiteUser})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    registerBlackUser: {
        width: "3rem",
        height: "3rem",
        background: `url(${registerBlackUser})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    apple: {
        width: "3rem",
        height: "3rem",
        background: `url(${apple})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"

    },
    android: {
        width: "3rem",
        height: "3rem",
        background: `url(${android})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"

    },
    login_register_typograpgy: {
        ...theme.typography.login_register
    },
    login_Color: {
        color: "white",
        borderRadius: "50px",
        backgroundColor: "#17262F",
        marginBottom: "2rem"
    },
    marginBottom: {
        marginBottom: "1rem"
    },
    paddingButton: {
        ...theme.props.MuiListItem,
    },
    downloadText: {
        marginBottom: "2rem",
        fontWeight: 700,
        fontSize: "1.2rem",
        lineHeight: 1.1,
        color: "#17262F"
    },
    widthofIcon: {
        ...theme.props.MuiListItemIcon
    },

}))

export default function Header() {
    const classes = useStyles();
    const theme = useTheme();//this gives us access to the default theme within our component
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
    const matches = useMediaQuery(theme.breakpoints.down(1480));
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openLeftDrawer, setOpenLeftDrawer] = useState(false);
    const [value, setValue] = useState(0);//for links
    const [anchorEl, setAnchorEl] = useState(null);//for menus
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);//for menuItems

    const [openInsideList, setOpenInsideList] = useState(false);
    const [openInsideList1, setOpenInsideList1] = useState(false);
    const [openInsideList2, setOpenInsideList2] = useState(false);
    const [headerShow, setHeaderShow] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setHeaderShow(true)
        } else {
            setHeaderShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })


    const handleClickInsideList = () => {
        setOpenInsideList(!openInsideList);
    };
    const handleClickInsideList1 = () => {
        setOpenInsideList1(!openInsideList1);
    };
    const handleClickInsideList2 = () => {
        setOpenInsideList2(!openInsideList2);
    };
    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true)
    }


    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false)
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpenMenu(false);
        }
    }

    const menuOptions = [{ name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile Apps Development", link: "/mobileapps" }, { name: "Website Development", link: "/websites" }]


    useEffect(() => {

        switch (window.location.pathname) {
            case "/":
                if (value !== 0) {
                    setValue(0)
                    setSelectedIndex(0)

                }
                break;
            case "/customsoftware":
                if (value !== 0) {
                    setValue(0)
                    setSelectedIndex(1)
                }
                break;
            case "/mobileapps":
                if (value !== 0) {
                    setValue(0)
                    setSelectedIndex(2);
                }
                break;
            case "/websites":
                if (value !== 0) {
                    setValue(0)
                    setSelectedIndex(3);
                }
                break;
            case "/business":
                if (value !== 1) {
                    setValue(1)
                }
                break;
            case "/pricing":
                if (value !== 2) {
                    setValue(2)
                }
                break;
            case "/about":
                if (value !== 3) {
                    setValue(3)
                }
                break;

            default:
                break;
        }

    }, [value])


    const tabs = (
        <React.Fragment>
            <Grid container alignItems="center" justify="center">
                <Grid item container xl={5} lg={5} >
                    <Grid item container spacing={3} alignItems="center" >
                        <Grid item>
                            <Button disableRipple component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)}>
                                <div className={classes.logoImage} />
                            </Button>
                        </Grid>
                        <Grid item>
                            <ShoppingCartIcon />
                        </Grid>
                        <Grid item>
                            <Typography className={classes.tab}>English</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.number}>+385 1 4825 850</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xl={5} lg={5} >
                    <Grid item container justify="center">
                        <Grid item>
                            <Tabs value={value} onChange={handleChange} >
                                <Tab aria-owns={anchorEl ? "simple-menu" : undefined}
                                    aria-haspopup={anchorEl ? "true" : undefined}

                                    onMouseOver={event => handleClick(event)}
                                    onMouseLeave={() => setOpenMenu(false)}
                                    className={classes.tab}
                                    component={Link} to="/" label="For Home" />
                                <Tab className={classes.tab} component={Link} to="/business" label="For Business" />
                                <Tab className={classes.tab} component={Link} to="/pricing" label="Pricing" />
                                <Tab className={classes.tab} component={Link} to="/about" label="About us" />
                            </Tabs>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xl={2} lg={2}>
                    <Grid container spacing={matchesLG ? undefined : 0} alignItems="center" justify="center">
                        <Grid item>
                            <Button className={classes.button} component={Link} to="/signin">Login</Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.button} component={Link} to="/signup">Sign up</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Popper open={openMenu} anchorEl={anchorEl} role={undefined} placement="bottom-start" transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: "top left" }}
                    >
                        <Paper classes={{ root: classes.menu }} elevation={0}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList onMouseOver={() => setOpenMenu(true)} onMouseLeave={handleClose} disablePadding autoFocusItem={false} id="simple-menu" onKeyDown={handleListKeyDown}>
                                    {menuOptions.map((option, i) => (
                                        <MenuItem key={option.name} component={Link} to={option.link} classes={{ root: classes.menuItem }}
                                            onClick={event => { handleMenuItemClick(event, i); setValue(0); handleClose() }}
                                            selected={i === selectedIndex && value === 0 && window.location.pathname !== "/"}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>


        </React.Fragment >
    )


    const drawer = (
        <React.Fragment>
            <SwipeableDrawer anchor="left" disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
                <List component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader disableGutters component="div" id="nested-list-subheader">
                            <Grid container direction="row" justify="flex-end" >

                                <Grid item xs>
                                    <Grid container justify="flex-end">

                                        <Grid item><div className={classes.redLogo}></div></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs>
                                    <Grid container justify="flex-end" alignItems="center" >
                                        <Grid item >
                                            <ListItemIcon className={classes.listItemIcon} onClick={() => setOpenDrawer(false)}>
                                                <MenuIcon className={classes.menuIcon} />
                                            </ListItemIcon></Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </ListSubheader>
                    }
                    className={classes.leftDrawerList}
                >

                    <ListItem className={classes.marginBottom}
                        button onClick={handleClickInsideList}>
                        <ListItemIcon>
                            <HomeOutlinedIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText className={classes.tabResponsive} disableTypography>For Home</ListItemText>
                        {openInsideList ? <ExpandLess color="secondary" /> : <ExpandMore color="secondary" />}
                    </ListItem>
                    <Collapse in={openInsideList} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <HomeOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    className={classes.tabResponsive} disableTypography>Starred</ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem className={classes.marginBottom}
                        button onClick={handleClickInsideList1}>
                        <ListItemIcon>
                            <BusinessCenterOutlinedIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                            className={classes.tabResponsive} disableTypography>For Business</ListItemText>
                        {openInsideList1 ? <ExpandLess color="secondary" /> : <ExpandMore color="secondary" />}
                    </ListItem>
                    <Collapse in={openInsideList1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <SortIcon />
                                </ListItemIcon>
                                <ListItemText
                                    className={classes.tabResponsive} disableTypography>Starred</ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem className={classes.marginBottom} button component={Link} to="/">
                        <ListItemIcon>
                            <LocalOfferOutlinedIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                            className={classes.tabResponsive} disableTypography>Pricing</ListItemText>
                    </ListItem>
                    <ListItem className={classes.marginBottom} button component={Link} to="/">
                        <ListItemIcon>
                            <GroupOutlinedIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                            className={classes.tabResponsive} disableTypography>About Us</ListItemText>
                    </ListItem>
                    <ListItem className={classes.marginBottom}
                        button onClick={handleClickInsideList2}>
                        <ListItemIcon>
                            <ShoppingCartOutlinedIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                            className={classes.tabResponsive} disableTypography>Cart</ListItemText>
                        {openInsideList2 ? <ExpandLess color="secondary" /> : <ExpandMore color="secondary" />}
                    </ListItem>
                    <Collapse in={openInsideList2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <SortIcon />
                                </ListItemIcon>
                                <ListItemText
                                    className={classes.tabResponsive} disableTypography>Cart</ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
                <Divider variant="middle" className={classes.divider} />
                <List component="nav"
                    aria-labelledby="nested-list-subheader"

                    className={classes.leftDrawerList}
                >
                    <ListItem className={classes.marginBottom} button component={Link} to="/">
                        <ListItemIcon className={classes.widthofIcon}>
                            <GroupOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                            className={classes.tabResponsive} disableTypography>+0800 252 22 442</ListItemText>
                    </ListItem>
                    <ListItem className={classes.marginBottom} button component={Link} to="/">
                        <ListItemIcon className={classes.widthofIcon}>
                            <GroupOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                            className={classes.tabResponsive} disableTypography>support@anyguard.com</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer >
            <IconButton className={classes.drawerContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple >
                <SortIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment >
    )

    const drawerRight = (
        <React.Fragment>
            <SwipeableDrawer anchor="right" disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openLeftDrawer} onClose={() => setOpenLeftDrawer(false)} onOpen={() => setOpenLeftDrawer(true)}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader disableGutters component="div" id="nested-list-subheader">
                            <Grid container direction="row" justify="center" >


                                <Grid item xs>
                                    <Grid container justify="flex-start" alignItems="center" >
                                        <Grid item >
                                            <ListItemIcon className={classes.listItemIcon} onClick={() => setOpenLeftDrawer(false)}>
                                                <div className={classes.blackUser}></div>
                                            </ListItemIcon></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs>
                                    <Grid container justify="flex-start">

                                        <Grid item><div className={classes.blackLogo}></div></Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </ListSubheader>
                    }
                    className={classes.rightDrawerList}
                >

                    <Grid container justify="center" className={classes.login_Color}>
                        <Grid item>
                            <ListItem button className={classes.paddingButton} >
                                <ListItemIcon>
                                    <div className={classes.loginWhiteUser}></div>
                                </ListItemIcon>
                                <ListItemText disableTypography className={classes.login_register_typograpgy} >LOG IN</ListItemText>
                            </ListItem>
                        </Grid>
                    </Grid>


                    <Grid container justify="center"
                    >
                        <Grid item>
                            <ListItem button className={classes.paddingButton}>
                                <ListItemIcon>
                                    <div className={classes.registerBlackUser}></div>
                                </ListItemIcon>
                                <ListItemText disableTypography className={classes.login_register_typograpgy} >REGISTER</ListItemText>
                            </ListItem>
                        </Grid>
                    </Grid>



                </List>
                <Divider variant="middle" className={classes.dividerRight} />

                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader disableGutters component="div" id="nested-list-subheader"

                        >
                            <Grid container direction="row"  >


                                <Grid item xs>
                                    <Grid container justify="center" alignItems="center" >
                                        <Grid item  >
                                            <ListItemText
                                                disableTypography
                                                className={classes.downloadText}
                                            >
                                                Download<br /> AnyGuard
                                            </ListItemText>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </ListSubheader>
                    }
                    className={classes.rightDrawerList2}
                >

                    <Grid container justify="center" className={classes.login_Color}>
                        <Grid item>
                            <ListItem button className={classes.paddingButton} >
                                <ListItemIcon>
                                    <div className={classes.apple}></div>
                                </ListItemIcon>
                                <ListItemText disableTypography className={classes.login_register_typograpgy} >FOR IOS</ListItemText>
                            </ListItem>
                        </Grid>
                    </Grid>


                    <Grid container justify="center"
                    >
                        <Grid item>
                            <ListItem button className={classes.paddingButton}>
                                <ListItemIcon>
                                    <div className={classes.android}></div>
                                </ListItemIcon>
                                <ListItemText disableTypography className={classes.login_register_typograpgy} >FOR ANDROID</ListItemText>
                            </ListItem>
                        </Grid>
                    </Grid>



                </List>


            </SwipeableDrawer>
            <IconButton className={classes.drawerContainer} onClick={() => setOpenLeftDrawer(!openLeftDrawer)} disableRipple >
                <PersonOutlineIcon className={classes.drawerIconRight} />
            </IconButton>
        </React.Fragment>
    )

    const drawers = (
        <Grid container>
            <Grid item xs>
                <Grid item>{drawer}</Grid>
            </Grid>
            <Grid item xs>

                <Grid item><div className={classes.responsiveLogo}></div></Grid>
            </Grid>
            <Grid item >
                <Grid item >{drawerRight}</Grid>
            </Grid>
        </Grid>
    )

    return (
        <React.Fragment>
            <AppBar className={classes.appabar} style={{ background: headerShow ? "#2C404F" : "transparent", transition: "all 0.5s ease", }} elevation={0}>
                <Toolbar disableGutters className={classes.toolbar}>
                    {matches ? drawers : tabs}
                </Toolbar>
            </AppBar>

        </React.Fragment>
    )
}   