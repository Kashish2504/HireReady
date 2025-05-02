import Navbar from "../../UI/Navbar.jsx";
import MCQ_Component from "./loadmcq.jsx";
import Mcqcontent from "./mcqcontent.jsx";
import Footer from "../../UI/footer.jsx";
import { useState } from "react";


export default function MCQ() {
  const [section, setSection] = useState('');
  return (
    <>
      <Navbar />
      <div>
        <p onClick={()=>setSection('coa')} >COA</p>
        <p onClick={()=>setSection('dbms')} >DBMS</p>
        <p onClick={()=>setSection('java')} >JAVA</p>
        <p onClick={()=>setSection('python')} >Python</p>
        <p onClick={()=>setSection('oops')} >OOPs</p>
        <p onClick={()=>setSection('web')} >Web Development</p>
        <p onClick={()=>setSection('mix')} >Mix</p>
      </div>
      <MCQ_Component section={section}/>
      <Mcqcontent />
      <Footer />
    </>
  );
}