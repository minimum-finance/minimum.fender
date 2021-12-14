import { ACTION_TYPES } from "../constants";

const initialState = {
  network: "",
  provider: null,
  address: "",
};

const web3Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SET_NETWORK:
      return { ...state, network: payload };
    case ACTION_TYPES.SET_PROVIDER:
      return { ...state, provider: payload };
    case ACTION_TYPES.SET_ADDRESS:
      return { ...state, address: payload };
    default:
      return state;
  }
};

export default web3Reducer;
