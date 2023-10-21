import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id, logo,job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div>
            <div className="card card-compact mt-4  bg-base-100 shadow-xl border border-[#9873FF]">
            <figure className="mt-6"><img src= {logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#9873FF] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#9873FF] mr-4">{job_type}</button>
                </div>
                <div className="mt-2 mb-4 flex gap-6">
                    <h3 className="flex gap-2"><MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn>{location}</h3>
                    <h3 className="flex gap-2"><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>Salary: {salary}</h3>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}>
                    <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ...">View Details</button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Job;