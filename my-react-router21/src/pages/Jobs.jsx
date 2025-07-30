

import React from 'react'
import { Link,useLoaderData } from 'react-router-dom'

const Jobs = () => {

    const jobsData = useLoaderData();

    

    return (

        <div className='jobs'>
            {jobsData.map((job) => {
                return  (<Link>
                
                            <h4>{job.id}</h4>
                            <h4>{job.title}</h4>
                            <p>{job.location}</p>
                            <p>{job.salary}</p>

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