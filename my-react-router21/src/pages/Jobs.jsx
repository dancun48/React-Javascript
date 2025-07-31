

import React from 'react';
import { Link,useLoaderData } from 'react-router-dom';

const Jobs = () => {

    const jobsData = useLoaderData();

    

    return (

        <div className='jobs'>

            {jobsData.map((job) => {
                
                return  (<Link to={job.id.toString()} key={job.id}>
                
                            <h5>ID: 00/{job.id}/2025</h5>
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

    const response = await fetch('http://localhost:3000/jobs');

    if(!response.ok){
        throw Error('Could not find the job details!⛔');
    }
    return response.json();
}