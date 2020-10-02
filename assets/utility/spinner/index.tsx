import store from "../../store";

import actions from "../../store/actions";

const start:IVoidNoParamMethod = () => {
	store.dispatch(new actions.pendingTasks.StartSpinner());
};

const stop:IVoidNoParamMethod = () => {
	store.dispatch(new actions.pendingTasks.StopSpinner());
};

export default {
	start,
	stop
};

