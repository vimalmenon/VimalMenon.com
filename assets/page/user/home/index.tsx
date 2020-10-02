import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
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