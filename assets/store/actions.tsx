import session from "./session/session.actions";
import navigation from "./navigation/navigation.actions";
import component from "./component/component.actions";


export interface ActionTypes {
	session:typeof session; 
	navigation:typeof navigation;
	component: typeof component;
}
const actions:ActionTypes = {
	navigation,
	component,
	session
};

export default actions;