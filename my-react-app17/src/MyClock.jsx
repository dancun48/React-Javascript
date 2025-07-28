
import React, { useState, useEffect } from 'react';

function MyClock(){

    
    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, [])



    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const milliSeconds = Math.round(time.getMilliseconds()/10);

        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(milliSeconds)} ${meridiem}`;
    }
    

    function padZero(number){
        return (number < 10 ? '0' : '') + number;
    }


    return(
    
            <>
                <div className='clock-container'>
                    <div className='clock'>
                        <span>{formatTime()}</span>
                    </div>
                </div>
            </>);
}

export default MyClock