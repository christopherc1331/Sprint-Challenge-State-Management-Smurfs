import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";

export const fetchSmurfs = dispatch => {
  return function(dispatch) {
    dispatch({ type: FETCH_SMURFS });

    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        res.data.forEach(smurf => {
          console.log("smurf in forEach", smurf);
          dispatch({ type: FETCH_SMURFS_SUCCESS, payload: smurf });
        });
      })

      .catch(err => {
        console.log(err);
      });
  };
};
