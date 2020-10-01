import { combineReducers } from "redux";

import session from "./session/session.reducer";
import navigation from "./navigation/navigation.reducer";
import component from "./component/component.reducer";

const reducer = combineReducers<IState>({
	component,
	navigation,
	session
});

export default reducer;