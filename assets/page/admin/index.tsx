import React from "react";

import {Entitlement} from "../../component";

const Admin = () => {
	return (
		<div>
			<Entitlement
				name="Login"
				render={() => {
					return (
						<div>
							This is admin page
						</div>
					)
				}} />
			
		</div>
	);
};

export default Admin;