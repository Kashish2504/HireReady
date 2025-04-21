import Center from "../UI/Center";
import Navbar from "../UI/Navbar";
import Footer from "../UI/footer";
import JobList from "../Job/JobList";
import "./Dashboard.css";


const Dashboard = () => {
  
  return (
    <>
      <Navbar />
      <Center />
      <JobList />
      <Footer />
    </>
  );
};

export default Dashboard;
