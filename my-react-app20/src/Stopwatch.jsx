
import React, { useState, useEffect, useRef } from 'react';

function Stopwatch(){


    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);


    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);



    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }


    const stop = () => {
        setIsRunning(false);
    }


    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }


    const formatTime = () => {

        let hours = Math.floor(elapsedTime / (1000 * 60 *60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);     //% 6o to cater for any spillover minutes
        let seconds = Math.floor((elapsedTime / 1000) % 60);  // % 60 to cater for any spillover seconds
        let milliSeconds = Math.floor((elapsedTime % 1000) / 10); //to display the 1st 2 digits only

        //padding with leading zeros

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        milliSeconds = String(milliSeconds).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}:${milliSeconds}`;
    }



    return (
        <>
        <div className='stopwatch-container'>

            <p className='display'>{formatTime()}</p>

            <div className='buttons'>

                <button className='start-button' onClick={start}>Start</button>
                <button className='reset-button' onClick={reset}>Reset</button>
                <button className='stop-button' onClick={stop}>Stop</button>
                
            </div>
            
        </div>

        </>)
}
export default Stopwatch