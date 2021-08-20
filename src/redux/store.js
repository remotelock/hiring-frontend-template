import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../redux/reducer/reducer";

const enchaser = () => applyMiddleware(thunk);

export default createStore(reducer, enchaser());
