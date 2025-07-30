
import React, { useState, useEffect, useRef } from 'react';

function MyComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    //const ref = useRef(0); //returns one object with the property of current; you can preset the property

    //let [number, setNumber] = useState(0);

    useEffect(() => {
        console.log('component rendered')
    }, []);


    const handleClick1 = () => {
        //setNumber(n => n + 1);
        //ref.current++;
        //console.log(ref.current);
        inputRef1.current.focus(); //activates the input element (focus())
        inputRef1.current.style.backgroundColor = 'yellow';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    }


    const handleClick2 = () => {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = 'lightgreen';
        inputRef3.current.style.backgroundColor = '';
    }


    const handleClick3 = () => {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = 'skyblue';
    }


    return (
            <>
            <div className='container'>
                <button onClick={handleClick1}>
                    Click Me 1
                </button><br/>
                <input ref={inputRef1}/><br/>

                <button onClick={handleClick2}>
                    Click Me 2
                </button><br/>
                <input ref={inputRef2}/><br/>

                <button onClick={handleClick3}>
                    Click Me 3
                </button><br/>
                <input ref={inputRef3}/>
            </div>
                
            </>
            );


}
export default MyComponent