
import React, { useState } from 'react';

function MyComponent(){

    const [foods, setFoods] = useState(['apple','banana','orange','pineapple']);

    const handleAddFood = () => {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';    //ensures the input tag resets after every new food addition

        setFoods(f => [...f, newFood]);     //updater function
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, index2) => index2 !== index));    //_(underscore) is for when we are given a parameter but we don't actually use it => in this case 'element' from filter(element, index) method
    }


    return(
        <>
            <div>
                <h2>List of Foods</h2>
                <ul>
                    {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
                </ul>
                <input type='text' id='foodInput' placeholder='Enter food name'/>
                <button onClick={handleAddFood}>Add Food</button>
            </div>
        </>)
}

export default MyComponent