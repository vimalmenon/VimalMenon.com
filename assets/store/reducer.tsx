import { combineReducers } from "redux";

import session from "./session/session.reducer";
import navigation from "./navigation/navigation.reducer";
import component from "./component/component.reducer";
import notification from "./notification/notification.reducer";
import pendingTasks from "./pending-tasks/pending-tasks.reducer";
import common from "./common/common.reducer";
import admin from "./admin/admin.reducer";

const reducer = combineReducers<IState>({
	admin,
	common,
	component,
	notification,
	navigation,
	pendingTasks,
	session
});

export default reducer;