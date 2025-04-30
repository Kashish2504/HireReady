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
        const response = await fetch('http://localhost:8000/api/jobs')
        const data = await response.json()
        console.log(data)
        setJobs(data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching jobs:', err)
      }
    }
    fetchJobs()
  }, [])

  if (jobs.length == 0) {
    return <h1 className="text-3xl text-black font-bold m-5">Loading...💻</h1>;
  }

  return (
    <>
      <h1 className=" text-center font-bold text-black text-2xl">
        Jobs and Interships
      </h1>
      <div className="w-full px-4 joblist">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="space-y-4">
            {jobs.map((job) => (
              <li key={job.id} className="border p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold">{job.position}</h2>
                <p className="text-gray-600">Company: {job.company}</p>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Apply Here
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default JobList;
