const Card = (props) => {
  return (
    <>
      <div className="border-sky-950 border-2 w-[30%] h-60 pt-3 px-3 text-m bg-blue-950 transform transition hover:scale-105 duration-300 hover:shadow-xl shadow-lg m-2">
        <p className="text-2xl">{props.icon}</p>
        <br />
        <h3 className="font-bold text-xl text-white">{props.title}</h3>
        <h6 className="text-md mt-2 mb-4 text-white">{props.description}</h6>
      </div>
    </>
  );
};
export default Card;
