import store from "../../store";

import actions from "../../store/actions";

const start:IVoidNoParamMethod = () => {
	store.dispatch(actions.pendingTasks.startSpinner());
};

const stop:IVoidNoParamMethod = () => {
	store.dispatch(actions.pendingTasks.stopSpinner());
};

export default {
	start,
	stop
};
export {
	start,
	stop
};

