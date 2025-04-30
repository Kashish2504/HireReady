import Navbar from "../../UI/Navbar.jsx";
import MCQ_Component from "./loadmcq.jsx";
import Mcqcontent from "./mcqcontent.jsx";
import Footer from "../../UI/footer.jsx";
export default function MCQ() {
  return (
    <>
      <Navbar />
      <MCQ_Component />
      <Mcqcontent />
      <Footer />
    </>
  );
}