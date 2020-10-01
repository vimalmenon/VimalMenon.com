import React from "react";

import { useSelector } from "react-redux";

const Entitlement:React.FC<IEntitlement> = ({name, render}) => {
	const session = useSelector<IState, ISessionState>(state => state.session);
	const id = session.id;
	if(id) {
		return render({write:true, read: true});
	}
	return null;
};

export default Entitlement;