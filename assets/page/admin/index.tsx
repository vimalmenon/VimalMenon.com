import React from "react";

import {Entitlement} from "component";

import Login from "./login";
import Dashboard from "./dashboard";

const Admin:React.FC<IBlankMethod> = () => {
	return (
		<div>
			<Entitlement
				name="Login"
				render={() => {
					return (
						<Login />
					);
				}} />
			<Entitlement
				name="Dashboard"
				render={() => {
					return (
						<Dashboard />
					);
				}} />
		</div>
	);
};

export default Admin;