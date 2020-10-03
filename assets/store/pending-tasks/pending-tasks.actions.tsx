import pendingTasksTypes from "./pending-tasks.types";

import {
	pendingTask, // The action key for modifying loading state
	begin, // The action value if a "long" running task begun
	end
} from "react-redux-spinner";

export const startSpinner = ():IAction<null> => {
	return {
		type:pendingTasksTypes.START_SPINNER,
		[pendingTask]: begin
	};
};
export const stopSpinner = ():IAction<null> => {
	return {
		type:pendingTasksTypes.STOP_SPINNER,
		[pendingTask]:end
	};
};

export default {
	startSpinner,
	stopSpinner
};