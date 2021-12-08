import { ACTION_TYPES } from "../constants";

export const setVaults = (vaults) => {
  return {
    type: ACTION_TYPES.SET_VAULTS_DATA,
    payload: vaults,
  };
};
