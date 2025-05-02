import { useState, useEffect } from "react";
const mcqList = (props) => {
  const [mcqs, setMcqs] = useState([]);
  const [selectedMcqs, setSelectedMcqs] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [section, setSection] = useState("");
  useEffect(() => {
    const fetchMCQ = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/mcqs");
        const data = await response.json();
        const newData = data.filter((mcq)=>{
          return mcq.section == props.section;
        })
        setMcqs(newData);
        console.log(newData);
        // setMCQ(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching MCQ's:", err);
      }
    };
    fetchMCQ();
  }, []);

  return (
    <>
      <div>
        {
          mcqs.map((m)=>{
            <p>{m.question}</p>
          })
        }
      </div>
    </>
  );
};

export default mcqList;

// import loadMCQ_CAT from "../../Backend/API/mcq";
// import getMCQ from "../../Backend/API/get mcq";
// import Center from "../../UI/Center.jsx";
// import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
// import { useState, useEffect } from "react";
// export default function MCQ_Component() {
//   const [allowedToAnswer, setAllowedToAnswer] = useState([]);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [showCorrectOption, setShowCorrectOption] = useState([]);
//   const [categ, setCateg] = useState("");
//   const [showCateg, setShowCateg] = useState(true);
//   const [mcqCateg, setMcqCateg] = useState([]);
//   const [mcqQuestions, setMcqQuestions] = useState([]);
//   const Categ_payload = async () => {
//     const response = await loadMCQ_CAT();
//     if (response.status == "success") {
//       setMcqCateg(response.data.data);
//     } else {
//       console.log("loading failed");
//     }
//   };
//   const loadMCQ_payload = async (categs) => {
//     const response = await getMCQ(categs);
//     if (response.status == "success") {
//       setShowCateg(false);
//       setMcqQuestions(response.data);
//     } else {
//       console.log("Not able to load Questions");
//     }
//   };
//   const handleCategSelect = async (cat_id) => {
//     setCateg(cat_id.name);
//     await loadMCQ_payload(cat_id.doc_id);
//   };
//   useEffect(() => {
//     Categ_payload();
//   }, []);
//   const handleAnswerClick = (index, selectedOption) => {
//     if (allowedToAnswer.includes(index)) return; // Prevent multiple selections

//     setAllowedToAnswer((prev) => [...prev, index]);
//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [index]: selectedOption,
//     }));
//   };
//   const handleShowResult = (index) => {
//     setShowCorrectOption((prev) =>
//       prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//     );
//   };
//   return (
// <>
//   {showCateg ? (
//     <>
//       <Center />
//       <div className=" my-2 p-2 text-black">
//         <h1 className="text-black font-bold flex justify-center p-1 m-1 text-xl">
//           Select Cataegory
//         </h1>
//         <div className="flex justify-around">
//           {mcqCateg.map((value, index) => (
//             <div
//               key={index}
//               className="text-black bg-gray-300 m-2 p-4 flex justify-center "
//             >
//               <button
//                 onClick={() => handleCategSelect(value)}
//                 className="text-black hover:-translate-y-1 transition-all ease-in"
//               >
//                 {value.name}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   ) : (
//     <div>
//   <p className="text-black flex justify-center text-xl m-2 p-2">
//     {categ} MCQ
//   </p>
//   {mcqQuestions.map((value, index) => (
//     <div key={index} className="text-black bg-gray-100 my-1 mx-2 p-1 rounded">
//       <div className="flex justify-between">
//         <p className="text-green-400">Question Number: {index + 1}</p>
//         <p
//           className={`px-2 ${
//             value.difficulty === 1
//               ? "text-green-500"
//               : value.difficulty === 2
//               ? "text-yellow-500"
//               : "text-red-500"
//           }`}
//         >
//           Difficulty:{" "}
//           {value.difficulty === 1 ? "Easy" : value.difficulty === 2 ? "Medium" : "Hard"}
//         </p>
//       </div>
//       <p className="text-black text-m">Question: {value.question_text}</p>
//       <div className="flex justify-start">
//         <div className="w-1/2">
//           {["A", "B"].map((option) => (
//             <button
//               key={option}
//               className={`flex justify-start text-black block rounded m-2 px-2 py-1 text-base border-gray-500 border-[1.5px] w-2/3
//                 ${
//                   selectedAnswers[index] === option
//                     ? option === value.correct_answer
//                       ? "bg-green-500" // Correct answer: green
//                       : "bg-red-500" // Wrong answer: red
//                     : "bg-white hover:border-blue-500" // Default state
//                 }`}
//               disabled={allowedToAnswer.includes(index)}
//               onClick={() => handleAnswerClick(index, option)}
//             >
//               {option}: {value[`option_${option.toLowerCase()}`]}
//             </button>
//           ))}
//         </div>
//         <div className="w-1/2">
//           {["C", "D"].map((option) => (
//             <button
//               key={option}
//               className={`flex justify-start text-black block rounded m-2 px-2 py-1 text-base border-gray-500 border-[1.5px] w-2/3
//                 ${
//                   selectedAnswers[index] === option
//                     ? option === value.correct_answer
//                       ? "bg-green-500" // Correct answer: green
//                       : "bg-red-500" // Wrong answer: red
//                     : "bg-white hover:border-blue-500" // Default state
//                 }`}
//               disabled={allowedToAnswer.includes(index)}
//               onClick={() => handleAnswerClick(index, option)}
//             >
//               {option}: {value[`option_${option.toLowerCase()}`]}
//             </button>
//           ))}
//         </div>
//       </div>
//       {/* Show Correct Option */}
//       <div className="text-black text-xs mt-2">
//         <button
//           className="text-blue-500 flex items-center"
//           onClick={() => handleShowResult(index)}
//         >
//           {showCorrectOption.includes(index) ? (
//             <>
//               <CiCircleChevUp className="text-black mr-1" /> Hide Correct Answer
//             </>
//           ) : (
//             <>
//               <CiCircleChevDown className="text-black mr-1" /> Show Correct Answer
//             </>
//           )}
//         </button>
//         {showCorrectOption.includes(index) && (
//           <p className="text-green-600 font-bold">Correct Answer: {value.correct_answer}</p>
//         )}
//       </div>
//     </div>
//   ))}
//       <button
//         className="text-white bg-blue-500 rounded p-2 mx-8 my-2"
//         onClick={() => (window.location.href = "/dashboard/mcq")}
//       >
//         Back
//       </button>
//     </div>
//   )}
// </>
//   );
// }
