import {pendingTasksReducer} from "react-redux-spinner";
import { Action } from "redux";

function pendingTasks (state=0, action:Action):number {
	return pendingTasksReducer(state, action);
}

export default pendingTasks;