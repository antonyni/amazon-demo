'use client'
import { Typography, Box } from '@mui/material'
import WheelClock from '../wheelClock/wheelClock'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import MenuItem from './carouselMenuOption';
import AnalogClock from '../analogClock/analogClock'
import SuperMario from '../mario/public/js/mario'

let lastEventTime = 0;
let pressed = false;
const numberTileMaker = (left,top) =>{
    return(
        [<Image src="/numbers.png" width={500} height={500} style={{ width: "700px", height: "auto", position: "absolute", left: `${left}px`, top: `${top}px` }}></Image>]
    )
}
const ZERO = numberTileMaker(2,-22);
const ONE = numberTileMaker(67,-22);
const TWO = numberTileMaker(-335,-22);
const THREE =numberTileMaker(-464,-22);
const FOUR = numberTileMaker(-594,-24);
const FIVE = numberTileMaker(-149,-245);
const SIX = numberTileMaker(-188,-17);
const SEVEN = numberTileMaker(-22,-223);
const EIGHT = numberTileMaker(-283,-244);
const NINE = numberTileMaker(-428,-244);
const Mapper = (num) => {
    switch (num) {
        case 0:
            return (ZERO)
        case 1:
            return (ONE)
        case 2:
            return (TWO)
        case 3:
            return (THREE)
        case 4:
            return (FOUR)
        case 5:
            return (FIVE)
        case 6:
            return (SIX)
        case 7:
            return (SEVEN)
        case 8:
            return (EIGHT)
        case 9:
            return (NINE)
            break;
    }
}

const Carousel = ({ time }) => {
    const [mode, setMode] = useState({
        hours: 12,
        clock: 0,
    });

    const [shrinkSX, setShrinkSX] = useState({
        sx: {
            transition: "transform .5s ease-in-out"


        },
        sxMenu: {
            transform: "translateY(35%)",
            transition: "transform .3s ease-in-out, opacity .25s ease-in-out",
            opacity: "0"

        }
    });


    const ChangeHours = (num) => {
        setMode(
            {
                hours: num,
                clock: mode.clock,
            }
        )


    }
    useEffect(() => {
        if (mode.clock != 3) {
            const handleInteraction = () => {
                lastEventTime = Date.now();
                if (pressed == false) {
                    pressed = true;
                    setShrinkSX(() => ({
                        sx: {
                            transform: "scale(.6) translateY(-20%)",
                            transition: "transform .5s ease-in-out",
                        },
                        sxMenu: {
                            transform: "translateY(0%)",
                            transition: "transform 1.3s ease-in-out, opacity .25s ease-in-out",
                            opacity: "1",
                        },
                    }));


                    window.setTimeout(() => {
                        setShrinkSX(() => ({
                            sx: {
                                transform: "scale(.6) translateY(-25%)",
                                transition: "transform .5s ease-in-out",
                            },
                            sxMenu: {
                                transform: "translateY(0%)",
                                transition: "transform 1.3s ease-in-out, opacity .25s ease-in-out",
                                opacity: "1",
                            },
                        }));
                    }, 501);
                }
            };
            if (Date.now() - lastEventTime >= 3500) {
                setShrinkSX(() => ({
                    sx: {
                        transform: "",
                        transition: "transform .5s ease-in-out",
                    },
                    sxMenu: {
                        transform: "translateY(35%)",
                        transition: "transform .3s ease-in-out, opacity .25s ease-in-out",
                        opacity: "0",
                    },
                }));
                pressed = false;
            }

            document.addEventListener("click", handleInteraction);

            return () => {

                document.removeEventListener("click", handleInteraction);
            };
        }

    }, [time.seconds]);



    return (
        <>
            <Box sx={{ position: "relative", display: "flex", justifyContent: "center", width: "100vw", height: "100vh" }}>
                <Box sx={{ overflowX: "visible", transform: `translateX(-${mode.clock * 100}%)`, transition: "transform .5s ease-in-out", width: "100vw", height: "100vh", backgroundColor: "primary.main", flexWrap: "nowrap", display: "flex" }}>
                    <Box sx={shrinkSX.sx}>
                        <WheelClock time={time} mode={mode}></WheelClock>
                    </Box>
                    <Box sx={shrinkSX.sx}>
                        <AnalogClock time={time} ></AnalogClock>
                    </Box>
                    <Box sx={shrinkSX.sx}>
                        <Box sx={{ overflowX: "visible", position: "relative", width: "100vw", height: "100vh", backgroundColor: "primary.main", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
                            <SuperMario time={time}></SuperMario>
                            <Box sx={{ position: "absolute", width: 100, height: 160, overflow: "hidden", backgroundColor: "", marginRight: "450px", marginBottom: "20px" }}>
                                {mode.hours == 12 ? (time.hours == 12 || time.hours == 0 ? Mapper(1) : Mapper(0)) : Mapper(Math.floor(time.hours / 10))}
                            </Box>
                            <Box sx={{ position: "absolute", width: 100, height: 160, overflow: "hidden", backgroundColor: "", marginRight: "170px", marginBottom: "20px" }}>
                                {mode.hours == 12 ? (time.hours == 0 ? Mapper(2) : Mapper(time.hours % 12)) : Mapper(time.hours % 12)}
                            </Box>
                            <Box sx={{ position: "absolute", width: 100, height: 160, overflow: "hidden", backgroundColor: "", marginRight: "-170px", marginBottom: "20px" }}>
                                {Mapper(Math.floor(time.minutes / 10))}
                            </Box>
                            <Box sx={{ position: "absolute", width: 100, height: 160, overflow: "hidden", backgroundColor: "", marginRight: "-450px", marginBottom: "20px" }}>
                                {Mapper(time.minutes % 10)}
                            </Box>
                            <Box sx={{ position: "absolute", width: 32, height: 32, overflow: "hidden", backgroundColor: "", marginRight: "0", marginBottom: "-50px" }}>
                                <Image src={time.seconds % 2 ? "/glowing.png" : "/dim.png"} width={32} height={32} styles={{}}></Image>
                            </Box>
                            <Box sx={{ position: "absolute", width: 32, height: 32, overflow: "hidden", backgroundColor: "", marginRight: "0", marginBottom: "100px" }}>
                                <Image src={time.seconds % 2 ? "/glowing.png" : "/dim.png"} width={32} height={32} styles={{}}></Image>
                            </Box>
                            <Box sx={{
                                position: "absolute", width: 32, height: 32, overflow: "hidden", backgroundColor: "",
                                marginRight:
                                    (time.seconds < 15 && time.seconds >= 0 ?
                                        "-610px" :
                                        (time.seconds >= 15 && time.seconds < 30 ? `${-610 + time.seconds % 15 * 81.3333}px` :
                                            (time.seconds >= 30 && time.seconds < 45 ? "610px" :
                                                time.seconds >= 45 && time.seconds < 60 ? `${610 - time.seconds % 15 * 81.3333}px` :
                                                    "-610px"))
                                    ), marginBottom:
                                    (time.seconds < 15 && time.seconds >= 0 ?
                                        `${608 - time.seconds % 15 * 81}px` :
                                        (time.seconds >= 15 && time.seconds < 30 ? "-608px" :
                                            (time.seconds >= 30 && time.seconds < 45 ? `${-610 + time.seconds % 15 * 81}px` :
                                                time.seconds >= 45 && time.seconds < 60 ? "608px" :
                                                    "608px"))
                                    )   
                            }}>
                                <Image src={time.seconds % 2 ? "/star.png" : "/stardim.png"} width={32} height={32} styles={{}}></Image>
                            </Box>

                        </Box>
                    </Box>
                </Box>
                <Box sx={[{ backgroundColor: "primary.main", position: "absolute", width: "276px", height: "12vh", bottom: "25%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", transition: "transform .3s ease-in-out, opacity .25s ease-in-out", }, shrinkSX.sxMenu]}>
                    <Typography variant="menuTitle">
                        Select your clock style
                    </Typography>
                    <Box sx={{ marginTop: "5px", display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                        <Image src="/arrow.png" onClick={() => { setMode({ hours: mode.hours, clock: mode.clock == 0 ? mode.clock : mode.clock - 1 }) }} width={20} height={20} style={{ width: "7px", height: "10.92px", opacity: mode.clock == 0 ? .5 : 1 }}></Image>
                        <Box sx={{ width: "67%", height: "30px", overflow: "hidden", display: "flex", justifyContent: "center" }}>
                            <Box sx={{ width: "100%", backgroundColor: "none", display: "flex", height: "30px", transition: "transform .2s ease-in-out", transform: `translateX(-${mode.clock * 100}%)`, overflowX: "visible", zIndex: -1 }}>
                                <MenuItem clock={{ name: "Wheel" }}></MenuItem>
                                <MenuItem clock={{ name: "Analog" }}></MenuItem>
                                <MenuItem clock={{ name: "It's a Me!" }}></MenuItem>
                            </Box>
                        </Box>
                        <Image onClick={() => { setMode({ hours: mode.hours, clock: mode.clock == 2 ? mode.clock : mode.clock + 1 }) }} src="/arrow.png" width={20} height={20} style={{ width: "7px", height: "10.92px", transform: "rotate(180deg)", opacity: mode.clock == 2 ? .5 : 1 }}></Image>

                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "3px" }}>
                        <Typography onClick={() => ChangeHours(12)} variant="menuTitle" sx={{ cursor: "pointer", paddingBottom: "3px", fontSize: "18px", marginRight: "25px", border: mode.hours == 24 ? "none" : "solid", borderWidth: "2px 2px 2px 2px", borderColor: "transparent transparent white transparent", transition: "border .25s ease-in-out, transform .25s ease-in-out, color .25s ease-in-out", transform: mode.hours == 12 ? "" : "scale(.9)", color: mode.hours == 12 ? "white" : "grey" }}>
                            12H
                        </Typography>
                        <Typography onClick={() => ChangeHours(24)} variant="menuTitle" sx={{ cursor: "pointer", fontSize: "18px", border: mode.hours == 24 ? "solid" : "none", borderWidth: "2px 2px 2px 2px", borderColor: "transparent transparent white transparent", transition: "border .25s ease-in-out, transform .25s ease-in-out, color .25s ease-in-out", transform: mode.hours == 24 ? "" : "scale(.9)", color: mode.hours == 24 ? "white" : "grey" }}>24H</Typography>
                    </Box>



                </Box>
            </Box>
        </>
    )

}
export default Carousel;