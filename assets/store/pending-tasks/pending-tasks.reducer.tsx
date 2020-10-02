import {pendingTasksReducer} from "react-redux-spinner";

function pendingTasks (state=0, action):number {
	return pendingTasksReducer(state, action);
}

export default pendingTasks;