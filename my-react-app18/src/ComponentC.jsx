

import React, { useContext } from 'react';

import { userContext } from './ComponentA';

import ComponentD from "./ComponentD";

function ComponentC(){
    const user = useContext(userContext);

    return (
        <>
            <div className="box">
        
                    <h1>ComponentC</h1>
                    <h2>{`Hello again again ${user}`}</h2>
                    <ComponentD/>

            </div>
        </>)
}

export default ComponentC