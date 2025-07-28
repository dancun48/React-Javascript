
import React, {useState} from 'react'   //importing the react hook function from the react module

function MyComponent(){

    const [name, setName] = useState('Guest');  //whatever value passed into the useState() hook serves as the intitial state value
    let [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {

        //name = 'Spongebob';   //does not update on the virtual DOM

        setName('Spongebob');   //updates the name on the virtual DOM - stateful variable
        console.log(name);
    }

    const updateAge = () => {
        age++;
        setAge(age);
    }

    const toggleEmploymentStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Increment Age</button>

            <p>Employment Status: {isEmployed ? 'Yes' : 'No'}</p>
            <button onClick={toggleEmploymentStatus}>Toggle Employment Status</button>
        </div>)
}

export default MyComponent