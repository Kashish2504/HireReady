import "./Team.css";

const Team = () => {
  return (
    <div className="w-[98vw]">
      <h1 className="mt-9 font-bold text-black text-4xl text-center">Our Team 🧑🏻‍💻</h1>
      <div className="team-container flex flex-row items-center justify-between px-4 overflow-x-hidden gap-5">
        <div className="member flex flex-col items-center justify-center gap-5 p-3">
          <div className="img">
            <img src="..\..\src\assets\Aman.jpg" alt="" className="scale-150 brightness-105 "/>
          </div>
          <h2 className="text-black">Aman Singh</h2>
          {/* <p>This is Shubhram our member</p> */}
        </div>
        <div className="member flex flex-col items-center justify-center gap-5 p-3">
          <div className="img">
            <img src="..\..\src\assets\Vibhor.jpg" alt="" className="scale-105 brightness-125"/>
          </div>
          <h2 className="text-black">Vibhor Sharma</h2>
          {/* <p>This is Shubhram our member</p> */}
        </div>
        <div className="member flex flex-col items-center justify-center gap-5 p-3">
          <div className="img">
            <img src="..\..\src\assets\Kashish.jpg" alt="" className="scale-150 brightness-110"/>
          </div>
          <h2 className="text-black">Kashish Omar</h2>
          {/* <p>This is Shubhram our member</p> */}
        </div>
        <div className="member flex flex-col items-center justify-center gap-5 p-3">
          <div className="img">
            <img src="..\..\src\assets\Shubhram.jpg" alt="" />
          </div>
          <h2 className="text-black">Shubhram Singh</h2>
          {/* <p>This is Shubhram our member</p> */}
        </div>
        <div className="member flex flex-col items-center justify-center gap-5 p-3">
          <div className="img">
            <img src="..\..\src\assets\Kanishka.jpg" alt="" />
          </div>
          <h2 className="text-black">Kanishka Gupta</h2>
          {/* <p>This is Shubhram our member</p> */}
        </div>
      </div>
    </div>
  );
};
export default Team;
