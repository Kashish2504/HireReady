const McqCard = (props) => {
  return (
    <>
      <div>
        <h2>{props.data.sno} {props.data.question}</h2>
        <p>{props.data.optionA}</p>
        <p>{props.data.optionB}</p>
        <p>{props.data.optionC}</p>
        <p>{props.data.optionD}</p>
      </div>
    </>
  );
};

export default McqCard;
