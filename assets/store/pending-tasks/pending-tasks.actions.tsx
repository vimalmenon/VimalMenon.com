import pendingTasksTypes from "./pending-tasks.types";

import {
	pendingTask, // The action key for modifying loading state
	begin, // The action value if a "long" running task begun
	end
} from "react-redux-spinner";

export class StartSpinner implements IAction<number>{
	public type = pendingTasksTypes.START_SPINNER;
    public payload;
	constructor() {
        this[pendingTask] = begin;
	}
}
export class StopSpinner implements IAction<number>{
	public type = pendingTasksTypes.STOP_SPINNER;
    public payload;
	constructor() {
        this[pendingTask] = end;
	}
}

export default {
    StartSpinner,
    StopSpinner
};