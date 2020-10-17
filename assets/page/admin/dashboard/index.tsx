import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./common/header";
import Sidebar from "./common/sidebar";

const Dashboard:React.FC = () => {
	return(
		<section>
			<CssBaseline />
			<Header />
			<Sidebar />
			This is dashboard
		</section>
	);
};

export default Dashboard;