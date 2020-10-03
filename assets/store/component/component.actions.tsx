import  ComponentTypes from "./component.types";

interface IComponentEntitlement {
	name?:string;
	id?:number;
	readWrite?:IReadWrite;
}
const setComponentEntitlement = (data:IComponentEntitlement):IAction<IComponentEntitlement>=> {
	return {
		type:ComponentTypes.SET_COMPONENT_ENTITLEMENT,
		payload:data
	};
};

export type actionTypes = IAction<IComponentEntitlement>;

export default {
	setComponentEntitlement
};