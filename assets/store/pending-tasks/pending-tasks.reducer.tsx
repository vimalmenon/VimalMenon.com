import {pendingTasksReducer} from "react-redux-spinner";
import {SpinnerActionType} from "./pending-tasks.actions";

function pendingTasks (state=0, action:SpinnerActionType):number {
	return pendingTasksReducer(state, action);
}

export default pendingTasks;