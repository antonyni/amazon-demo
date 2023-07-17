'use client'
import { useState, useEffect } from 'react';
import Carousel from '../components/carousel/carousel'

export default function Home() {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds()
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds()
      })
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])
  return (
    <>
      <Carousel time={time}></Carousel>
    </>
  )
}
