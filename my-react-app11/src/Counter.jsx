
import React,{ useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        
        //uses the CURRENT state to calculate the NEXT state
        //ste functons do not trigger an update
        //React batches together state updates for performance reasons
        //NEXT state becomes the CURRENT state after an update
        /*
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        */
        
        //you can do this instead
        
        //takes the PENDING state not 'current' to calculate the NEXT state
        //React puts your updater function in a queue (waiting in line)
        //during the next render, it will call them in the same order

        setCount(c => c + 1);   //pending in queue till ext one is called
        setCount(c => c + 1);   //pending in queue till ext one is called
        setCount(c => c + 1);   //called 1st
    }
    const reset = () => {
        setCount(0);
    }
    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }



    return (
    
        <>
        <div className="container">
            <p>{count}</p>
            <div className="buttons">
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
        </>)
}

export default Counter