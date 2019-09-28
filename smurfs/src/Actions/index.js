export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";

export const fetchSmurfs = dispatch => {
  return function(dispatch) {
    dispatch({ type: FETCH_SMURFS });

    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
