
import React, { useState } from 'react';

function MyComponent(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    const handleAddCar = () => {
        
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};

        setCars(c => [...c, newCar]);

        //resetting the input fields

        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');

    }

    const handleChangeYear = (event) => {
        setCarYear(event.target.value);
    }

    const handleChangeMake = (event) => {
        setCarMake(event.target.value);
    }

    const handleChangeModel = (event) => {
        setCarModel(event.target.value);
    }

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_, i) => i !== index));
    }

    return (
            <>
                <div>
                    <h2>List of Car Objects</h2>
                    <ul>
                        {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
                    </ul>
                    <input type='number' value={carYear} onChange={handleChangeYear}/><br/>
                    <input type='text' value={carMake} onChange={handleChangeMake} placeholder='Enter car make'/><br/>
                    <input type='text' value={carModel} onChange={handleChangeModel} placeholder='Enter car model'/><br/>
                    <button onClick={handleAddCar}>Add Car</button>
                </div>
            </>)
}

export default MyComponent