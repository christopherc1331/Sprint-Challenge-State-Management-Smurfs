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
        smurfs: [
          {
            name: action.payload.name,
            age: action.payload.age,
            height: action.payload.height,
            id: action.payload.id
          }
        ]
      };

    default:
      return state;
  }
};

export default Reducer;
