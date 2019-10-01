import React from "react";

const Smurf = props => {
  console.log("props from Smurf.js", props.smurf);
  return (
    <div>
      <h1>{props.smurf.name}</h1>
      <em>{props.smurf.age}</em>
      <p>{props.smurf.height}</p>
    </div>
  );
};

export default Smurf;
