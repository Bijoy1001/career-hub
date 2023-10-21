import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const[jobs, setJobs] = useState ([]);
    const[dataLength, setDataLength] = useState(4);

        useEffect(() => {
            fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
        },[])
    return (
    
        <div>
            <div className="text-center">
            <h1 className="font-bold text-4xl">Featured Jobs </h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center pt-4">
            <div className= {dataLength === jobs.length ? 'hidden': ''}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">See All Jobs</button>
            </div>
            </div>
          </div>
    );
};

export default FeaturedJobs;