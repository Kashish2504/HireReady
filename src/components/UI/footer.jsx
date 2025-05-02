import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='flex justify-between px-8 bg-blue-950 mt-5'>
        <div className="f-div  f-desc ">
          <h1 className='font-semibold mb-4 underlinee text-xl text-white'><Link to="/dashboard">HireReady</Link></h1>
          <p className='text-white'>Empowering students with the skills and confidence to ace placements and interviews!</p>
        </div>
        <div className="f-div">
          <div className="f-item text-xl font-semibold text-white">Our Services</div>
          <div className="f-item underlinee text-white"><Link to="/dashboard">Jobs</Link></div>
          <div className="f-item underlinee text-white"><Link to="/dashboard/mcq">MCQs</Link></div>
          <div className="f-item underlinee text-white"><Link to="/dashboard/virtual_interviewer">Virtual Interview</Link></div>
          <div className="f-item underlinee text-white"><Link to="/dashboard/coding">Coding Problems</Link></div>
        </div>
        <div className="f-copy text-center text-xs text-white">Copyright &#169; All rights reserved 2025 | Developed by Apex Achiever 👩‍💻</div>
      </footer>
    </>
  );
};
export default Footer;
