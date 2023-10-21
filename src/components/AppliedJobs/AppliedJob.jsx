import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoragedJobApplication } from "../../Utility/Localstorage";

const AppliedJob = () => {
    const jobs= useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState ([]);

    useEffect(() => {
        const storedJobIds = getStoragedJobApplication();
        if(jobs.length > 0){
                // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

                const jobsApplied = [];
                for(const id of storedJobIds){
                    const job = jobs.find(job => job.id === id);
                    if(job){
                        jobsApplied.push(job)
                    }
                }

                setAppliedJobs(appliedJobs);
            // console.log(jobs. storedJobIds, jobsApplied)
            
        }
    }, []);
    return (
        <div>
            <h2 className="text-2xl text-center"> Jobs I applied: {appliedJobs.length} </h2>

          <ul>
            {
                appliedJobs.map(job => <li key={job.id}><span>{job.job_title}{job.company_name}</span></li>)
            }
          </ul>
        </div>
     
    );
};

export default AppliedJob;