import React from "react";

import { Provider } from "react-redux";

import store from "../store";


const Page:React.FC<INoPropsComponent> = () => {
	return (
		<Provider store={store}>
			<div>
				This is vimal Menon
			</div>
		</Provider>
	);
};

export default Page;