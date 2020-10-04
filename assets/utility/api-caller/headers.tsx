import storage, {StorageType} from "../storage";

export const getHeaders = ():HeadersInit => {
	const value = storage.selectStorage(StorageType.session).getStorage();
   
	const headers:HeadersInit = {
		"Content-Type": "application/json",
	};
	if(value["Authorization"]) {
		headers["Authorization"] = value["Authorization"];
	}
	return headers;
};

export const clearHeaders = ():void => {
	const sessionStorage = storage.selectStorage(StorageType.session).getStorage();
	storage.selectStorage(StorageType.session).addToStorage({...sessionStorage, Authorization: null});
};