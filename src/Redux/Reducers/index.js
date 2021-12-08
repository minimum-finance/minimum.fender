import { combineReducers } from "redux";
import VaultReducer from "./vaultReducer";

const reducers = combineReducers({
  vaultsData: VaultReducer,
});

export default reducers;
