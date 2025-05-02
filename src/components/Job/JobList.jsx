import "./JobList.css";
// import Job from "./Job";
import { useEffect, useState } from "react";
// import backend_Dashboard from "../Backend/Dashboard/fatchjobs";
// import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/jobs");
        const data = await response.json();
        console.log(data);
        setJobs(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  if (jobs.length == 0) {
<<<<<<< HEAD
    return <h1 className="text-3xl text-black font-bold m-5">Loading...💻</h1>;
=======
    return (
      <h1 className="text-3xl text-black font-bold m-5">
        Loading...💻
        
      </h1>
    );
>>>>>>> 36d005d82b0c96c61e1ac22037def3199d3cbff6
  }

  return (
    <>
      <h1 className=" text-center font-bold text-black text-2xl">
        Jobs and Interships
      </h1>
      <div className="w-full px-4 joblist ">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="space-y-4 pt-6">
            {jobs.map((job) => (
              <li key={job.id} className="border bg-blue-950 p-4 rounded-lg shadow h-30 flex flex-col items-end">
                <div className="flex justify-between">
                  <h2 className="text-xl text-white font-semibold">{job.position}</h2>
                  <p className="text-white pl-50">
                    Company: {job.company}
                  </p>
                </div>
                <button className="rounded-lg bg-slate-50 mt-5 w-fit px-4 py-3 hover:bg-sky-500 text-blue-500 font-bold hover:text-white">
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Here
                </a></button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default JobList;
