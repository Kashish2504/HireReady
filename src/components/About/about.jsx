import { motion } from "framer-motion";
import Navbar from "../UI/Navbar";
import "./about.css";

const sections = [
  {
    id: 1,
    color: "bg-blue-500",
    title: "Aman Singh",
    subtitle: "Team Leader",
    role: "Full-Stack Developer",
    image: "../../src/assets/Aman.jpg",
  },
  {
    id: 2,
    color: "bg-green-500",
    title: "Vibhor Sharma",
    subtitle: "Co-Leader",
    role: "Frontend Developer & Backend Developer",
    image: "../../src/assets/Vibhor.jpg",
  },
  {
    id: 3,
    color: "bg-red-500",
    title: "Shubhram Singh Kushwaha",
    subtitle: "Marketing Guru",
    role: "Content Manager & AI Developer",
    image: "../../src/assets/Shubhram.jpg",
  },
  {
    id: 4,
    color: "bg-yellow-500",
    title: "Kashish Omar",
    subtitle: "Design Head",
    role: "Frontend Developer & UI/UX Designer",
    image: "../../src/assets/Kashish.jpg",
  },
  {
    id: 5,
    color: "bg-purple-500",
    title: "Kanishka Gupta",
    subtitle: "Tech Enthusiast",
    role: "Content Manager",
    image: "../../src/assets/Kanishka.jpg",
  },
];
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};
const FullPageScroll = () => {
  const textLines = ["you'll look", "better", "with you", "\n"];
  const footerText = ["\n", "Scroll to know", "Our team"];
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="h-screen flex items-center justify-center bg-black relative">
          <motion.img
            src="https://www.fcinq.com/v3/wp-content/uploads/cover-fcinq.jpg"
            alt="Landing"
            className="w-full h-full object-cover absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute text-white text-center">
            {textLines.map((line, index) => (
              <motion.h1
                key={index}
                className={`text-${index}`}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {line}
              </motion.h1>
            ))}
            {footerText.map((line, index) => (
              <motion.h1
                key={index}
                className={`text-${index}`}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {line}
              </motion.h1>
            ))}
          </div>
        </section>
        {sections.map((section) => (
          <motion.div
            key={section.id}
            className={`h-screen flex items-center justify-center ${section.color} text-white team-member`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center  ">
              <img src={section.image} className="member-img" alt="image" />
              <div className="text-center pointer-events-none">
                <h1 className="text-5xl font-bold">{section.title}</h1>
                <h2 className="text-3xl mt-2 italic">{section.subtitle}</h2>
                <p className="text-xl mt-2 italic">{section.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
};

export default FullPageScroll;
