import React from "react";

import {
	Link
} from "react-router-dom";

import {navigations} from "model";


const Explore = () => {
	console.log(navigations.footerNavigations);
	return (
		<div>
			{navigations.footerNavigations.map((navigation, key) => {
				return (
					<div key={key}>
						<Link to={navigation.url}>
							{navigation.name}
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default React.memo(Explore);