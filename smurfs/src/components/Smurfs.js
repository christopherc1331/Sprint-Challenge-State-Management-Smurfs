import React, { useState, useEffect } from "react";
import { fetchSmurfs } from "../Actions";
import { connect } from "react-redux";

const Smurfs = ({ fetchSmurfs, ...props }) => {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  console.log(props);

  const [newSmurfName, setNewSmurfName] = useState("");

  const changeHandler = event => {
    setNewSmurfName(event.target.value);
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="newSmurfName"
          placeholder="New Smurf Name"
          value={newSmurfName}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="newSmurfName"
          placeholder="New Smurf Name"
          value={newSmurfName}
          onChange={changeHandler}
        />

        <button hidden />
      </form>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: [
      state.smurfs.map(smurf => {
        return {
          name: smurf.name,
          age: smurf.age,
          height: smurf.height,
          id: smurf.id
        };
      })
    ]
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs: fetchSmurfs }
)(Smurfs);
