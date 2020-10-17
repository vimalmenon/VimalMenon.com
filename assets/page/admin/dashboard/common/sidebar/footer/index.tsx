import React from "react";

import {APP_VERSION} from "const";

const Footer = () => {
	return (
		<footer>
			<span>v{APP_VERSION}</span>
		</footer>
	);
};

export default Footer;