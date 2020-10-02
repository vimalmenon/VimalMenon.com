import {
	pendingTask, // The action key for modifying loading state
	begin, // The action value if a "long" running task begun
} from "react-redux-spinner";
import store from "../store";
export const callSpinner = () => {
	store.dispatch({
		type: "ANY_OF_YOUR_ACTION_TYPES_DONE",
		[pendingTask]: begin
	});
};

