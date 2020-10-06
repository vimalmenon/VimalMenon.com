import session from "./session/session.actions";
import navigation from "./navigation/navigation.actions";
import component from "./component/component.actions";
import pendingTasks from "./pending-tasks/pending-tasks.actions";
import common from "./common/common.actions";
import admin from "./admin/admin.actions";


export default {
	admin,
	common,
	navigation,
	component,
	session,
	pendingTasks
};