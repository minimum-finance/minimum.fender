import { combineReducers } from "redux";
import VaultReducer from "./vaultReducer";
import Web3Reducer from "./web3Reducer";

const reducers = combineReducers({
  vaultsData: VaultReducer,
  web3Data: Web3Reducer,
});

export default reducers;
