/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdOutlineDateRange } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/Localstorage";

const JobDetaile = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);


    const handleApplyJob = () => {
      saveJobApplication (idInt);
      toast('You have applied succesfully')
    }
    return (
        <div>
            <div  className="text-center font-bold text-4xl mt-4 mb-4">
              <h1>Job Details</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="border md:col-span-2">
                    <h1 className="mt-4"><span className="font-bold text-xl">Job Description:</span> {job.job_description}</h1>
                    <h1 className="mt-4"><span className="font-bold text-xl">Job Responsibility:</span> {job.job_responsibility}</h1>
                    <h1 className="mt-4 font-bold text-xl">Educational Requirements:</h1>
                    <p className="mt-4">{job.educational_requirements}</p>
                    <h1 className="mt-4 font-bold text-xl">Experiences:</h1>
                    <p className="mt-4">{job.experiences}</p>
                   
               </div>
                   
                 <div className="border">
                   <div className=" font-bold pt-4 pl-4 text-xl">
                   <h1>Job Details</h1>
                   </div>
                   <br />
                   <hr />
                   <div>
                     <h2 className="flex gap-2 pl-2 pt-4"><HiOutlineCurrencyDollar className=" text-2xl"></HiOutlineCurrencyDollar><span className="font-bold">Salary :</span>{job.salary}(Per Month)</h2>
                     <h2 className="flex gap-2 pl-2 pt-2 w-auto"><MdOutlineDateRange className=" text-2xl"></MdOutlineDateRange><span className="font-bold">Job Title :</span>{job.job_title}</h2>
                    
                     <br />
                     <br />
        
                     <p className="font-bold text-xl pl-4">Contact Information</p>
                     
                     <br />
                     <hr />
                     <div>
                     <h2 className="flex gap-2 pl-2 pt-4"><BiPhone className=" text-2xl"></BiPhone><span className="font-bold">Phone :</span>{job.contact_information.phone}</h2>
                     <h2 className="flex gap-2 pl-2 pt-2"><AiOutlineMail className=" text-2xl"></AiOutlineMail><span className="font-bold">Email :</span>{job.contact_information.email}</h2>
                     <h2 className="flex gap-2 pl-2 pt-2"><SlLocationPin className=" text-2xl"></SlLocationPin><span className="font-bold">Address :</span></h2>
                     <p className="pl-10">{job.contact_information.address}</p>
                     </div>

                     <br />
                     <br />
                     <div>
                        <button onClick={handleApplyJob} className="btn text-white w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Apply Now</button>
                     </div>
                   </div>
                   <ToastContainer />
               </div>
            </div>

        </div>
    );
};

export default JobDetaile;