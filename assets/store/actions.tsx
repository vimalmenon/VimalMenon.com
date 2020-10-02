import session from "./session/session.actions";
import navigation from "./navigation/navigation.actions";
import component from "./component/component.actions";
import pendingTasks from "./pending-tasks/pending-tasks.actions";

export interface ActionTypes {
	session:typeof session; 
	navigation:typeof navigation;
	component: typeof component;
	pendingTasks: typeof pendingTasks;
}
const actions:ActionTypes = {
	navigation,
	component,
	session,
	pendingTasks
};

export default actions;