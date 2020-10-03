import { ThunkAction } from "redux-thunk";
import sessionTypes from "./session.types";

export type actionTypes = IAction<ISessionState>;
type ThunkResult = ThunkAction<void, IState, void, IAction<ISessionState>>;



const setSession = (data:ISessionState):ThunkResult => {
	return (dispatch, state) => {
		const id = state().session.id;
		if(id !== data.id) {
			console.log("session is updated", id, data.id);
			dispatch({
				type:sessionTypes.SET_SESSION,
				payload:data
			});
		}
	};
};

export default {
	setSession,
};
