import session from "./session.state";
import sessionTypes from "./session.types";
import {actionTypes} from "./session.actions";

export default function (oldState:ISessionState=session, actions:actionTypes):ISessionState  {
	if (actions.type ===sessionTypes.SET_SESSION) {
		return {
			id:actions.payload?.id,
			group:actions.payload?.group,
			user:actions.payload?.user,
		};
	}
	return oldState;
}