
import React, { useState } from 'react';

function MyComponent(){


    const [car, setCar] = useState({year: 2025, make: 'Volkswagen', model: 'Tiguan'});


    const handleYearChange = (event) => {
        setCar(c => ({...c, year: event.target.value}));
    }

    const handleMakeChange = (event) => {
        setCar(c => ({...c, make: event.target.value}));
    }

    const handleModelChange = (event) => {
        setCar(c => ({...c, model: event.target.value}));

    }

    return (
    
            <>
                <div>
                    <p>Your favorite car is a {car.year} {car.make} {car.model}</p>
                    
                    <input type='number' value={car.year} onChange={handleYearChange}></input><br/>
                    <input type='tetx' value={car.make} onChange={handleMakeChange}></input><br/>
                    <input type='text' value={car.model} onChange={handleModelChange}></input>
                </div>
            </>)
}

export default MyComponent