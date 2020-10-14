import {getHeadersAuthorization, setHeadersAuthorization} from "../common";

export const getHeaders = ():HeadersInit => {
	
	const value = getHeadersAuthorization();
	const headers:HeadersInit = {
		"Content-Type": "application/json",
	};
	if(value) {
		headers["Authorization"] = value;
	}
	return headers;
};

export const clearHeaders = ():void => {
	setHeadersAuthorization(null);
};