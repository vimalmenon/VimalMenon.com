import { combineReducers } from "redux";

import session from "./session/session.reducer";
import navigation from "./navigation/navigation.reducer";
import component from "./component/component.reducer";
import notification from "./notification/notification.reducer";
import pendingTasks from "./pending-tasks/pending-tasks.reducer";

const reducer = combineReducers<IState>({
	component,
	notification,
	navigation,
	pendingTasks,
	session
});

export default reducer;