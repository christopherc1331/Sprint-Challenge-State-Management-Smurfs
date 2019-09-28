import React, { useState, useEffect } from "react";
import { fetchSmurfs } from "../Actions";
import { connect } from "react-redux";
import axios from "axios";

import Smurf from "./Smurf.js";

const Smurfs = ({ fetchSmurfs, ...props }) => {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  console.log("props from Smurfs.js", props);

  const [newSmurfName, setNewSmurfName] = useState("");
  const [newSmurfAge, setNewSmurfAge] = useState("");
  const [newSmurfHeight, setNewSmurfHeight] = useState("");

  const nameChangeHandler = event => {
    setNewSmurfName(event.target.value);
  };
  const ageChangeHandler = event => {
    setNewSmurfAge(event.target.value);
  };
  const heightChangeHandler = event => {
    setNewSmurfHeight(event.target.value);
  };

  const submitNewSmurf = event => {
    event.preventDefault();
    console.log("form submitted");
    let newObj = {
      name: newSmurfName,
      age: newSmurfAge,
      height: newSmurfHeight,
      id: Date.now()
    };
    axios
      .post("http://localhost:3333/smurfs", newObj)
      .then(fetchSmurfs())
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={submitNewSmurf}>
        <input
          type="text"
          name="newSmurfName"
          placeholder="New Smurf Name"
          value={newSmurfName}
          onChange={nameChangeHandler}
        />
        <input
          type="text"
          name="newSmurfAge"
          placeholder="New Smurf Age"
          value={newSmurfAge}
          onChange={ageChangeHandler}
        />
        <input
          type="text"
          name="newSmurfHeight"
          placeholder="New Smurf Height"
          value={newSmurfHeight}
          onChange={heightChangeHandler}
        />

        <button>Add Smurf</button>
      </form>
      <div>
        {props.smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs.map(smurf => {
      return {
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
        id: smurf.id
      };
    })
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs: fetchSmurfs }
)(Smurfs);
