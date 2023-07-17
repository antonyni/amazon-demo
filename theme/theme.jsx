'use client'
import {createTheme} from '@mui/material/styles'
import '../app/globals.css'


const theme = createTheme({
    palette:{
        primary:{main:"#141414",},
        border:{
            main:"#FF0000"
        }
    },
    typography:{
        
        clockOutside:{
            color:"white",
            fontFamily:'Comfortaa,roboto',
            fontSize:"22px",
            fontWeight:"bold"
        },
        clockInside:{
            color:"white",
            fontFamily:'Comfortaa,roboto',
            fontSize:"25px",
            fontWeight:"bold"
        },
        clockMain:{
            color:"white",
            fontFamily:'Comfortaa,roboto',
            fontSize:"95px",
            fontWeight:"bold"
        },
        currentMin:{
            color:"white",
            fontFamily:'Comfortaa,roboto',
            fontSize:"38px",
            fontWeight:"bold"
        },
        menuTitle:{
            color:"white",
            fontFamily:"DM Mono",
            fontSize:"20px",
            fontWeight:"500",
        },
        fontFamily:'Comfortaa,sans-serif',

    },

});


export default theme;