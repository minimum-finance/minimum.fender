import { ACTION_TYPES } from "../constants";

const initialState = {
  vaults: [],
};

const vaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_VAULTS_DATA:
      return state;
    default:
      return state;
  }
};

export default vaultReducer;
