import { createMuiTheme } from '@material-ui/core/styles'


export default createMuiTheme({


    palette: {
        common: {
            // 
        },

    },
    typography: {
        headerButton: {
            fontFamily: "Raleway",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
        },
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 400,
            fontSize: "1rem",
        },
        responsiveTab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",

        }
        , login_register: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },

    },
    props: {
        MuiDivider: {
            backgroundColor: "red",
        },
        MuiListItem: {
            paddingLeft: 0,
            paddingTop: 0,
            paddingBottom: 0,
        },
        MuiListItemIcon: {
            minWidth: '40px'
        },


    },



})