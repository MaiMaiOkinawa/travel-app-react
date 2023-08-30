import "./Goal.css";

function GoalData(props) {
  return (
    <div className="card-goal">
      <div className="card-image">
        <img alt="" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default GoalData;
