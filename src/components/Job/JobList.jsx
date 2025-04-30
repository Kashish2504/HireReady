import "./JobList.css";
import Job from "./Job";
import { useEffect, useState } from "react";
import backend_Dashboard from "../Backend/Dashboard/fatchjobs";


const JobList = () => {

  const helper=async()=>{
    const response=await backend_Dashboard();
    if(response.status=="success"){
      setData(response.data.jobs);
    }
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    helper();
  }, []);

  if (data.length == 0) {
    return (
      <h1 className="text-3xl text-blue-950 font-bold m-5">
        Loading...💻
        
      </h1>
    );
  }

  return (
    <>
      <h1 className=" text-center font-bold text-black text-2xl">
        Jobs and Interships
      </h1>
      <div className="w-full px-4 joblist">
        {data.map((value, index) => (
          <Job
            key={index}
            id={value.id}
            title={value.position}
            company={value.Company}
            description={value.description}
            applylink={value.applyLink}
          />
        ))}
      </div>
    </>
  );
};

export default JobList;
