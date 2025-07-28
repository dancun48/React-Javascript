import React, { useState, useEffect } from 'react';

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green')

    //useEffect(function, [dependencies]);

    //useEffect(() => {document.title = `count:  ${count}`}); //updates the current count in the title of the webpage everytime we click on 'add' button

    //useEffect(() => {document.title = `count:  ${count}`}, []); //updates the current count in the title of the webpage ONLY once despite clicking the 'add' button

    useEffect(() => {document.title = `count:  ${count} ${color}`}, 
        //return () => {}, => code to free-up the useEffect()
        [count, color]);

    
    function addCount(){
        setCount(c => c + 1)
    }

    function subtractCount(){
        setCount(c => c - 1)
    }

    function changeColor(){
        setColor(col => col === 'green' ? 'red' : 'green')
    }



//----------different example------------------

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);


    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('EVENT LISTENER ADDED!');

        return() => {
            window.removeEventListener('resize', handleResize);
            console.log('EVENT LISTENER REMOVED!');
        }
    },[]);

    useEffect(() => {
        document.title = `Size: ${width}px x ${height}px`;
    }, [width, height])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (<>
                <p style={{color: color}}>Count: {count}</p>
                <button onClick={addCount}>Add</button>
                <button onClick={subtractCount}>Subtract</button><br/>
                <button onClick={changeColor}>Change Color</button><br/><br/><br/><br/><br/><br/><br/><br/>

                <p>Window width: {width}px</p>
                <p>Window height: {height}px</p>
            </>);
}

export default MyComponent