import React from "react";
import { useLocation } from "react-router-dom";

const Home:React.FC<IBlankMethod> = () => {
	const location = useLocation();
	console.log(location);
	return (
		<div>
			This is home
			<button>
				Add Some thing
			</button>
		</div>
	);
};

export default Home;