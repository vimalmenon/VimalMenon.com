import React from "react";

import {apis} from "model";
import {ApiCaller} from "utility";


const Text:React.FC = () => {
	const [contact, setContact] = React.useState<IContactText|null>(null);
	React.useEffect(() => {
		new ApiCaller<IContactText>(new apis.GetContactUs())
			.getPromise()
			.then((data) => {
				setContact(data);
			});
	}, []);
	if (contact){
		return(
			<section>
			</section>
		);
	}
	return null;
	
};

export default Text;