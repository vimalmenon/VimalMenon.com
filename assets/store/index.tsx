import { createStore } from "redux";

import initialState from "./state";
import reducer from "./reducer";


import middleware from "../config/middleware";

export default createStore(reducer, initialState, middleware);

