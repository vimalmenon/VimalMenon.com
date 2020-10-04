import {ApiCaller, common} from "utility";
import {apis} from "model";

export const init = () :void=> {
	new ApiCaller<any>(new apis.MainApi())
		.getPromise()
		.then((data) => {
			console.log(data);
		});
	common.themeLocalStorageAndState();
};