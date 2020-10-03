import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {apis} from "model";
import {ApiCaller} from "../../utility";

import actions from "../../store/actions";


const {ComponentEntitlement} = apis;

const Entitlement:React.FC<IEntitlement> = ({name, render}) => {
	const session = useSelector<IState, ISessionState>(state => state.session);
	const component = useSelector<IState, IComponentState>(state => state.component);
	const dispatch = useDispatch();
	const id = session.id;
	const componentName = component[name]||{};
	React.useEffect(() => {
		if (id) {
			const readWrite = componentName[id];
			if(!readWrite) {
				new ApiCaller<IReadWrite>(new ComponentEntitlement({name}))
					.getPromise()
					.then((data) => {
						dispatch(actions.component.setComponentEntitlement({
							name,
							id,
							readWrite:data
						}));
					});
			}
		}
	},[id]);
	if(id && componentName){
		const readWrite = componentName[id];
		if(readWrite?.read) {
			return render(readWrite);
		}
	}
	return null;
};

export default Entitlement;