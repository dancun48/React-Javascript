import React from 'react'
import { useLoaderData } from 'react-router-dom';
//import { useParams } from 'react-router-dom'

const JobDetails = () => {

    const jobDetails = useLoaderData();

    //const {id} = useParams();

    return (

        <div className='job-details'>
            <p><b>Job Title: </b>{jobDetails.title}</p>
            <p><b>Location: </b>{jobDetails.location}</p>
            <p><b>Salary: </b>{jobDetails.salary}</p>
            <p><b>Description: </b>A Software Developer designs, codes, tests, 
            and maintains software applications, including websites, mobile apps, and operating systems. 
            They work on all stages of the software development lifecycle, from initial concept to deployment 
            and ongoing maintenance</p>
            <button>Apply Now</button>
        </div>
    )
}

export default JobDetails

export const jobDetailsLoader = async ({params})=> {
    const {id} = params;
    const res = await fetch('http://localhost:3000/jobs/' + id);

    if(!res.ok){
        throw Error('Could not find the job details!⛔');
    }

    return res.json();
}