import {storage, StorageType} from "utility";
import {ApiCaller} from "utility";
import {apis} from "model";

export const init = () => {
	new ApiCaller<any>(new apis.MainApi())
		.getPromise()
		.then((data) => {
			console.log(data);
		});
	const value = storage.selectStorage(StorageType.local).getStorage();
	console.log("this is called init");
};