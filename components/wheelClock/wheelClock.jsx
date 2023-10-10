'use client'
import { Typography, Box } from '@mui/material'
import { useEffect, useState} from 'react';
const outerClock = [];
const innerClock = [];
for (let i = 0; i < 60; i++) {
    innerClock.push(
        <Box key={i} sx={{ width: "63%", height: "63%", backgroundColor: "none    ", position: "absolute", transform: `rotate(-${i * 6}deg)`, color: "blue", display: 'flex', alignItems: 'center' }}>
            <Box sx={{ height: "100%", width: "100%", display: "flex", alignItems: "center", backgroundColor: "none" }}>
                <Box sx={{ width: "3.20%", height: "41.8%", backgroundColor: "#434343" }}></Box>
                {i % 5 == 0 ?
                    <Box sx={{ marginBottom: "0px", marginLeft: "3.114%", transform: "rotate(180deg)" }}>
                        <Typography variant="clockInside" sx={{}}>{i}</Typography>
                    </Box> : <></>
                }
            </Box>
        </Box>
    )

}
for (let i = 0; i < 60; i++) {
    outerClock.push(
        <Box key={i} sx={{ width: "100%", height: "100%", backgroundColor: "none    ", position: "absolute", transform: `rotate(-${i * 6}deg)`, color: "blue", display: 'flex', alignItems: 'center' }}>
            <Box sx={{ height: "100%", width: "100%", display: "flex", alignItems: "center", backgroundColor: "none" }}>
                <Box sx={{ width: "2.05%", height: "23.4%", backgroundColor: "#434343" }}></Box>
                {i % 5 == 0 ?
                    <Box sx={{ marginBottom: "0px", marginLeft: "2.114%", transform: "rotate(180deg)" }}>
                        <Typography variant="clockOutside" sx={{}}>{i}</Typography>
                    </Box> : <></>
                }
            </Box>
        </Box>
    )

}


const WheelClock = ({ time,mode }) => {
    const [rotateSeconds, setRotateSeconds] = useState({
        sx: {
            transition: "transform .35s ease-in-out",
            transform: `rotate(${time.seconds * 6 + 180}deg)`,
        },
    })
    useEffect(() => {
        if (time.seconds == 0) {
            setRotateSeconds({
                sx: {
                    transition: "transform .35s ease-in-out",
                    transform: `rotate(540deg)`,
                },

            })
            const timeout = window.setTimeout(() => {
                setRotateSeconds({
                    sx: {
                        transition: "",
                        transform: `rotate(180deg)`,
                    },

                })
            }, 351)
            return () => clearTimeout(timeout);

        }
        else {
            setRotateSeconds({
                sx: {
                    transition: "transform .35s ease-in-out",
                    transform: `rotate(${time.seconds * 6 + 180}deg)`,
                },

            })
        }


    }, [time.seconds])
    const [rotateMinutes, setRotateMinutes] = useState({
        sx: {
            transition: "transform .35s ease-in-out",
            transform: `rotate(${time.minutes * 6 + 180}deg)`,
        },
    })
    useEffect(() => {
        if (time.minutes == 0) {
            setRotateMinutes({
                sx: {
                    transition: "transform .35s ease-in-out",
                    transform: `rotate(540deg)`,
                },

            })
            const timeout = window.setTimeout(() => {
                setRotateMinutes({
                    sx: {
                        transition: "",
                        transform: `rotate(180deg)`,
                    },

                })
            }, 351)
            return () => clearTimeout(timeout);

        }
        else {
            setRotateMinutes({
                sx: {
                    transition: "transform .35s ease-in-out",
                    transform: `rotate(${time.minutes * 6 + 180}deg)`,
                },

            })
        }


    }, [time.minutes])
    return (
        <>
            <Box sx={{ overflowX: "visible", position: "relative", width: "100vw", height: "100vh", backgroundColor: "primary.main", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
                <Box sx={{ backgroundColor: "none", position: "absolute", height: 614.8, width: 614.8, display: "flex", alignItems: "center", justifyContent: "center", transition: "transform .5s ease-in-out" }}>
                    <Box sx={{ position: "relative", height: 614.8, width: 614.8, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ opacity: "1", marginTop: "20px", borderColor: "red", borderWidth: "3px", borderStyle: "solid", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "47%", left: "70%", position: "fixed", height: "70px", width: "67px", backgroundColor: "primary.main", position: "absolute", zIndex: 10, transition: "opacity .25s linear" }}>
                            <Typography variant="currentMin">
                                {time.minutes}
                            </Typography>

                        </Box>
                        <Box sx={{ marginTop: "5%" }}>
                            <Typography variant="clockMain">
                                {((mode.hours==24?time.hours:(((time.hours==0||time.hours==12)?12:time.hours%12)))).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ position: "relative", height: 614.8, width: 614.8, display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", backgroundColor: "none" }}>
                    <Box  sx={[{ display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", width: 614.8 / 1, height: 12.8 / 1,  cursor: "pointer" }, rotateSeconds.sx]}>
                        {outerClock}


                    </Box>
                    <Box  sx={[{ display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", width: 614.8 / 1, height: 12.8 / 1,  cursor: "pointer" }, rotateMinutes.sx]}>
                        {innerClock}

                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default WheelClock;