import React from "react";

import { useSelector } from "react-redux";

const Entitlement:React.FC<IEntitlement> = ({name, render}) => {
	const session = useSelector<IState, ISessionState>(state => state.session);
	console.log(session);
	return (
		<div>
			This is Entitlement
		</div>
	);
};

export default Entitlement;