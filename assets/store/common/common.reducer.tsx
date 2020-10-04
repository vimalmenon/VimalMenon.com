import common from "./common.state";
import CommonTypes from "./common.types";
import {ActionTypes} from "./common.actions";

export default function (oldState=common, action:ActionTypes):ICommonState  {
	if(action.type === CommonTypes.SET_THEME) {
		const state = {...oldState};
		state.theme = action.payload?.theme;
		return state;
	}else if (action.type === CommonTypes.SET_SOCIAL_MEDIAS) {
		const state = {...oldState};
		state.socialMedias = action.payload?.socialMedias || [];
		return state;
	}
	return oldState;
}