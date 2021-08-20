import { combineReducers } from "redux";
import users from "../reducer/users";
import devicesState from "../reducer/devices";

export default combineReducers({
  users,
  devicesState,
});
