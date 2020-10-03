import sessionTypes from "./session.types";

const setSession = (data:ISessionState):IAction<ISessionState> => {
	return {
		type:sessionTypes.SET_SESSION,
		payload:data
	};
};

export type actionTypes = IAction<ISessionState>;

export default {
	setSession
};
