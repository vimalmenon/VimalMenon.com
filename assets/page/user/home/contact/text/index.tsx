import React from "react";

import {apis} from "model";
import {ApiCaller} from "utility";


const Text = () => {
	const [contact, setContact] = React.useState(null);
	React.useEffect(() => {
		new ApiCaller(new apis.GetContactUs())
	}, []);
	return(
		<section>
		</section>
	);
};

export default Text;