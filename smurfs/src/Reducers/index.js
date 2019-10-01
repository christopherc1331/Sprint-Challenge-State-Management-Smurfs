import { FETCH_SMURFS, FETCH_SMURFS_SUCCESS } from "../Actions/";

const initialState = {
  isLoading: false,
  smurfs: [
    {
      name: "",
      age: "",
      height: "",
      id: ""
    }
  ]
};

const Reducer = (state = initialState, action) => {
  console.log("action from Reducer: ", action);
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload.map(smurf => {
          return {
            name: smurf.name,
            age: smurf.age,
            height: smurf.height,
            id: smurf.id
          };
        })
      };

    default:
      return state;
  }
};

export default Reducer;
