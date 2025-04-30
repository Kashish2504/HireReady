import "./Job.css";

const Job = (props) => {
  return (
    <>
      <div className="job rounded-md bg-gray-200">
        <div className="flex job-head">
          <h2 className="font-bold text-black text-xl">{props.title}</h2>
          <h2 className="text-right desc px-2">{props.company}</h2>
        </div>
        <h2 className="my-3 desc text-justify">Job Description</h2>
        <div className="w-full flex justify-end">
          <a href={props.applylink} className="btn text-white rounded-full">
            Apply Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Job;
