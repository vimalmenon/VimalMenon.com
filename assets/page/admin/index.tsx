import React from "react";
import { useLocation } from "react-router-dom";

import {Entitlement} from "../../component";

const Admin = () => {
	const location = useLocation();
	console.log(location);
	return (
		<div>
			<Entitlement
				name="Login"
				render={() => {
					return (
						<div>
							This is admin page
						</div>
					);
				}} />
		</div>
	);
};

export default Admin;