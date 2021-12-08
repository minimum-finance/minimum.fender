import { combineReducers } from "redux";
import VaultReducer from "./vaultReducer";

const reducers = combineReducers({
  vaults: VaultReducer,
});

export default reducers;
