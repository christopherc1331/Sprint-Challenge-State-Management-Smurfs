import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const ADD_SMURFS = "ADD_SMURFS";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";

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

// export const fetchSmurfs = dispatch => {
//   return function(dispatch) {
//     dispatch({ type: ADD_SMURFS });

//     axios
//       .post("http://localhost:3333/smurfs")
//       .then(res => {
//         console.log(res);
//         dispatch({ type: ADD_SMURFS_SUCCESS, payload: res });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// };
