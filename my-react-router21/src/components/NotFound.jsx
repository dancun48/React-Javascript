
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate();
    return (
        <div>
            <h2>404 | Page Not found.</h2><br/>
            <button onClick={() => {navigate('/')}}>Go to homepage</button>
        </div>
    )
}

export default NotFound