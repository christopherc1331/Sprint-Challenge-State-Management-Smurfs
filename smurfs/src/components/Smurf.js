import React from "react";

const Smurf = props => {
  console.log("props from Smurf.js", props.smurf);
  return (
    <div>
      <h1>{props.smurf.name}</h1>
    </div>
  );
};

export default Smurf;
