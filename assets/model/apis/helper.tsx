export enum METHODS {
	GET="GET",
	PUT="PUT",
	POST="POST",
	DELETE="DELETE"
}

export const getHeaders = (value:any):HeadersInit => {
	const headers:HeadersInit = {
		"Content-Type": "application/json",
	};
	if(value["Authorization"]) {
		headers["Authorization"] = value["Authorization"];
	}
	return headers;
};