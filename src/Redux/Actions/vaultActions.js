import { ACTION_TYPES } from "../constants";

export const setVaults = (vaults) => {
  return {
    type: ACTION_TYPES.SET_VAULTS_DATA,
    payload: vaults,
  };
};

export const setProvider = (provider) => {
  return {
    type: ACTION_TYPES.SET_PROVIDER,
    payload: provider,
  };
};

export const setNetwork = (network) => {
  return {
    type: ACTION_TYPES.SET_NETWORK,
    payload: network,
  };
};

export const setAddress = (address) => {
  return {
    type: ACTION_TYPES.SET_ADDRESS,
    payload: address,
  };
};
