import Navbar from "../../UI/Navbar.jsx";
import MCQ_Component from "./loadmcq.jsx";
import Mcqcontent from "./mcqcontent.jsx";
import Footer from "../../UI/footer.jsx";

import { useState } from "react";

// import { useState } from "react";



export default function MCQ() {
  const [section, setSection] = useState('');
  return (
    <>
      <Navbar />
      <MCQ_Component/>
      <Mcqcontent />
      <Footer />
    </>
  );
}