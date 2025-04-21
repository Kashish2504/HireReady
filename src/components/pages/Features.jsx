import Card from "./Card";
const Features = () => {
  return (
    <div className="w-[98vw]">
      <h1 className="text-black text-center font-bold text-4xl">
        Shape Your Future, Secure Your Dream Job! ❤️
      </h1>
      <div className="flex flex-wrap  gap-3 pt-6 justify-center">
        <Card
          icon="💡"
          title="Master Interview Questions"
          description={
            "Access a vast collection of frequently asked interview questions, including MCQs and detailed answers. Prepare confidently and tackle interviews with ease!"
          }
        />
        <Card
          icon="💻"
          title="Practice Coding Challenges"
          description={
            "Solve real-world coding problems, improve your problem-solving skills, and get ready for technical interviews at top companies!"
          }
        />

        <Card
          icon="🤖"
          title="AI-Powered Virtual Interviews"
          description={
            "Experience realistic AI-driven mock interviews that simulate real job interview scenarios. Get instant feedback and improve your performance!"
          }
        />
        <Card
          icon="📜"
          title="AI-Based Plagiarism Check"
          description={
            "Ensure originality in your answers and assignments with our AI-powered plagiarism checker. Stand out with unique and well-structured responses!"
          }
        />
        <Card
          icon="👨‍🏫"
          title="Connect with Experts"
          description={
            "Chat with experienced mentors and teachers who can guide you through interview strategies, resume building, and placement tips."
          }
        />
        <Card
          icon="📚"
          title="Comprehensive Placement Resources"
          description={
            "Gain access to industry insights, company-specific interview guides, resume templates, and more—everything you need to land your dream job!"
          }
        />
      </div>
    </div>
  );
};
export default Features;
