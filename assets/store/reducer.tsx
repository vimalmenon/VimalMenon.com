import { combineReducers } from "redux";

import session from "./session/session.reducer";
import navigation from "./navigation/navigation.reducer";

const reducer = combineReducers<IState>({
	navigation,
	session
});

export default reducer;