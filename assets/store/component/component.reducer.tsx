import component from "./component.state";
import {actionTypes} from "./component.actions";
import ComponentTypes from "./component.types";

export default function (oldState:IComponentState=component, action:actionTypes):IComponentState  {
	if(action.type === ComponentTypes.SET_COMPONENT_ENTITLEMENT) {
		const readWrite = action.payload?.readWrite;
		const id = action.payload?.id||0;
		const name = action.payload?.name||"";
		const state = {...oldState};
		state[name] = state[name] || {};
		state[name][id] = readWrite|| {read:false, write:false};
		return state;
	}
	return oldState;
}