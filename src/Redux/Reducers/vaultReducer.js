import { ACTION_TYPES } from "../constants";

const initialState = {
  vaults: [],
};

const vaultReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SET_VAULTS_DATA:
      return { ...state, vaults: payload };
    default:
      return state;
  }
};

export default vaultReducer;
