import React from "react";
import {Helmet} from "react-helmet";


const MetaData:React.FC<IMetaData> = ({title}) => {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>{title}</title>
			<meta name="description" content="Nested component" />
		</Helmet>
	); 
};

export default MetaData;