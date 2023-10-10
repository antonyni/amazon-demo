'use client'
import { Typography, Box } from '@mui/material'
import { useEffect, useState} from 'react';
const outerClock = [];
for (let i = 0; i < 12; i++) {
    outerClock.push(
        <Box key={i} sx={{ width: "76%", height: "100%", backgroundColor: "none    ", position: "absolute", transform: `rotate(-${i * 30}deg)`, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ height: "100%", width: "100%", display: "flex", alignItems: "center", backgroundColor: "none" }}>
                <Box sx={{ width:i%3==0?"15px":"6px", height: i%3==0?"15px":"6px", borderRadius:"50%",backgroundColor:i%3==0?"white":"lightgrey" }}></Box>
            </Box>
        </Box>
    )

}


const AnalogClock = ({ time }) => {
    const [rotateSeconds, setRotateSeconds] = useState({
        sx: {
            transition: "transform .35s ease-in-out",
            transform: `rotate(${time.seconds * 6 + 270}deg)`,
        },
    })
    useEffect(() => {
        if (time.seconds == 0) {
            setRotateSeconds({
                sx: {
                    transition: "transform .35s ease-in-out",
                    transform: `rotate(630deg)`,
                },

            })
            const timeout = window.setTimeout(() => {
                setRotateSeconds({
                    sx: {
                        transition: "",
                        transform: `rotate(270deg)`,
                    },

                })
            }, 351)
            return () => clearTimeout(timeout);

        }
        else {
            setRotateSeconds({
                sx: {
                    transition: "transform .35s ease-in-out",
                    transform: `rotate(${time.seconds * 6 + 270}deg)`,
                },

            })
        }


    }, [time.seconds])
    const [rotateMinutes, setRotateMinutes] = useState({
        sx: {
            transition: "transform .35s ease-in-out",
            transform: `rotate(${time.minutes * 6 + 270}deg)`,
        },
    })
    useEffect(() => {
        if (time.minutes == 0) {
            setRotateMinutes({
                sx: {
                    transition: "transform .35s ease-in-out",
                    transform: `rotate(630deg)`,
                },

            })
            const timeout = window.setTimeout(() => {
                setRotateMinutes({
                    sx: {
                        transition: "",
                        transform: `rotate(270deg)`,
                    },

                })
            }, 351)
            return () => clearTimeout(timeout);

        }
        else {
            setRotateMinutes({
                sx: {
                    transition: "transform .35s ease-in-out",
                    transform: `rotate(${time.minutes * 6 + 270}deg)`,
                },

            })
        }


    }, [time.minutes])
    const [rotateHours, setRotateHours] = useState({
        sx: {
            transition: "transform .35s ease-in-out",
            transform: `rotate(${(time.hours%12 * 30)+(time.minutes/60*30) + 270}deg)`,
        },
    })
    useEffect(() => {
        if (time.hours%12 == 0) {
            setRotateHours({
                sx: {
                    transition: "transform .35s ease-in-out",
                    transform: `rotate(630deg)`,
                },

            })
            const timeout = window.setTimeout(() => {
                setRotateHours({
                    sx: {
                        transition: "",
                        transform: `rotate(270deg)`,
                    },

                })
            }, 351)
            return () => clearTimeout(timeout);

        }
        else {
            setRotateHours({
                sx: {
                    transition: "transform .35s ease-in-out",
                    transform: `rotate(${(time.hours%12 * 30)+(time.minutes/60*30) + 270}deg)`,
                },

            })
        }


    }, [time.hours])
    return (
        <>
            <Box sx={{ overflowX: "visible", position: "relative", width: "100vw", height: "100vh", backgroundColor: "none", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
            
                <Box sx={{ position: "relative", height: 614.8, width: 614.8, display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", backgroundColor: "none" }}>
                    <Box  sx={[{ display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", width: 614.8 / 1, height: 12.8 / 1,  cursor: "pointer" }]}>
                        {outerClock}


                    </Box>
                    <Box sx={{width:"19px",height:"19px",position:"relative",borderRadius:"50%",backgroundColor:"white", display:"flex",alignItems:"center"}}>
                        <Box sx={[{marginLeft:"9px",width:"200px",height:"7px",backgroundColor:"red",position:"absolute",borderRadius:"10px",zIndex:"-1",transformOrigin:"left"},rotateSeconds.sx]}></Box>
                        <Box sx={[{borderColor:"white",borderWidth:"2px",borderStyle:"solid",marginLeft:"9px",width:"160px",height:"5px",backgroundColor:"primary.main",position:"absolute",borderRadius:"10px",zIndex:"-2",transformOrigin:"left"},rotateMinutes.sx]}></Box>
                        <Box sx={[{borderColor:"white",borderWidth:"2.5px",borderStyle:"solid",marginLeft:"9px",width:"110px",height:"10px",backgroundColor:"primary.main",position:"absolute",borderRadius:"10px",zIndex:"-3",transformOrigin:"left",display:"flex",justifyContent:"center",alignItems:"center"},rotateHours.sx]}>
                            <Box sx={{width:"60px",height:"2px",backgroundColor:"white"}}></Box>
                        </Box>
                    </Box>

                </Box>
                <Box sx={{height:614.8,width:614.8,position:"absolute",zIndex:100,display:"flex",justifyContent:"center",alignItems:"center"}}>
                    
                </Box>
            </Box>
        </>
    )
}

export default AnalogClock;