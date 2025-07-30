

import React from 'react'
import { Link,useLoaderData } from 'react-router-dom'

const Jobs = () => {

    const jobsData = useLoaderData();

    

    return (

        <div className='jobs'>
            {jobsData.map((job) => {
                return  (<Link>
                
                            <h4>ID: 00/{job.id}/2025</h4>
                            <h4>Title: {job.title}</h4>
                            <p>Location: {job.location}</p>
                            <p>Salary: {job.salary}</p>

                        </Link>)
            })}
        </div>
    )
}

export default Jobs

//adding a loader function

export const jobsLoader = async () => {

    const response = await fetch('http://localhost:5000/jobs');
    return response.json();
}