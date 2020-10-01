import session from "./session/session.actions";
import navigation from "./navigation/navigation.actions";


export interface ActionTypes {
	session:typeof session; 
	navigation:typeof navigation;
}
const actions:ActionTypes ={
	navigation,
	session
};

export default actions;