import React from "react";

import { useSelector, useDispatch } from "react-redux";

//import action from "../../store/actions";

const Entitlement:React.FC<IEntitlement> = ({name, render}) => {
	const session = useSelector<IState, ISessionState>(state => state.session);
	const component = useSelector<IState, IComponentState>(state => state.component);
	//const dispatch = useDispatch();
	const id = session.id;
	const componentName = component[name];
	if(id && componentName){
		const readWrite = componentName[id];
		if(readWrite.read) {
			return render(readWrite);
		}
	}
	return null;
};

export default Entitlement;