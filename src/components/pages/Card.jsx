const Card = (props) => {
  return (
    <>
      <div className="border-black border-2 w-[30%] h-60 pt-3 px-3 text-md ">
        <p className="text-2xl">{props.icon}</p>
        <br />
        <h3 className="text-black font-bold text-xl">{props.title}</h3>
        <h6 className="text-black text-md mt-2 mb-4">{props.description}</h6>
      </div>
    </>
  );
};
export default Card;
