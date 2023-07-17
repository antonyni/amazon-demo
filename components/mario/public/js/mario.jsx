'use client'
import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
const GROUND = [0, 0, 16, 16];
const SKY = [3*16,23*16,16,16]
const SuperMario = ({time}) => {
    function loadImage(url) {
        return new Promise(resolve => {
            const image = new Image();
            image.addEventListener('load', () => {
                resolve(image);
            });
            image.src = url;
        });
    }
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        loadImage('/tiles.png').then(image => {
            for (let i = 0; i < 20; i++) {
                for(let j=0; j < 18; j++){
                    context.drawImage(image, ...SKY, i * 32, 32 * j, 40,40)
                }
                context.drawImage(image, ...GROUND, i * 32, 32 * 19, 32, 32)
                context.drawImage(image, ...GROUND, i * 32, 32 * 18, 32, 32)
                



            }
            
            context.drawImage(image, 0*16,20*16,15,15, 3 * 32, 32 * 1, 32,32)
            context.drawImage(image, 1*16,20*16,16,16, 4 * 32, 32 * 1, 32,32)
            context.drawImage(image, 2*16,20*16,16,16, 5 * 32, 32 * 1, 32,32)
            context.drawImage(image, 0*16,21*16,16,16, 3 * 32, 32 * 2, 32,32)
            context.drawImage(image, 1*16,21*16,16,16, 4 * 32, 32 * 2, 32,32)
            context.drawImage(image, 2*16,21*16,16,16, 5 * 32, 32 * 2, 32,32)

            context.drawImage(image, 0*16,20*16,16,16, 7 * 32, 32 * 2, 32,32)
            context.drawImage(image, 1*16,20*16,16,16, 8 * 32, 32 * 2, 32,32)
            context.drawImage(image, 2*16,20*16,16,16, 9 * 32, 32 * 2, 32,32)
            context.drawImage(image, 0*16,21*16,16,16, 7 * 32, 32 * 3, 32,32)
            context.drawImage(image, 1*16,21*16,16,16, 8 * 32, 32 * 3, 32,32)
            context.drawImage(image, 2*16,21*16,16,16, 9 * 32, 32 * 3, 32,32)

            context.drawImage(image, 0*16,20*16,16,16, 11 * 32, 32 * 1, 32,32)
            context.drawImage(image, 1*16,20*16,16,16, 12 * 32, 32 * 1, 32,32)
            context.drawImage(image, 2*16,20*16,16,16, 13 * 32, 32 * 1, 32,32)
            context.drawImage(image, 0*16,21*16,16,16, 11 * 32, 32 * 2, 32,32)
            context.drawImage(image, 1*16,21*16,16,16, 12 * 32, 32 * 2, 32,32)
            context.drawImage(image, 2*16,21*16,16,16, 13 * 32, 32 * 2, 32,32)

            context.drawImage(image, 0*16,8*16,16,16, 17 * 32, 32 * 16, 32,32)
            context.drawImage(image, 1*16,8*16,16,16, 18 * 32, 32 * 16, 32,32)
            context.drawImage(image, 0*16,9*16,16,16, 17 * 32, 32 * 17, 32,32)
            context.drawImage(image, 1*16,9*16,16,16, 18 * 32, 32 * 17, 32,32)

            context.drawImage(image, 0*16,8*16,16,16, 2 * 32, 32 * 16, 32,32)
            context.drawImage(image, 1*16,8*16,16,16, 3 * 32, 32 * 16, 32,32)
            context.drawImage(image, 0*16,9*16,16,16, 2 * 32, 32 * 17, 32,32)
            context.drawImage(image, 1*16,9*16,16,16, 3 * 32, 32 * 17, 32,32)
        }
        )
        loadImage('/characters.gif').then(image => {
            context.drawImage(image, 17.2*16,2.7*16,16,18,6 * 32, 32 * 17, 32,32)
            context.drawImage(image, 19.7*16,11.6*16,16,18,9 * 32, 32 * 17, 32,32)

        })


    },[time.seconds] )


    return (
        
            <Box sx={{ width: 640, height: 640, backgroundColor: "white" ,position:"relative"}}>
                <canvas ref={canvasRef} id="screen" width="640" height="640"></canvas>
                <Box sx={{position:"absolute"}}>
                </Box>
            </Box>
    )

};

export default SuperMario;
