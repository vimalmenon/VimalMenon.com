import store from "store";
import actions from "actions";

const setSession = (session:ISessionState):void => {
	const id = store.getState().session.id;
	if (id !==session.id) {
		console.log("session is updated", id, session.id);
		store.dispatch(actions.session.setSession(session));
	}
};

export default {
	setSession
};