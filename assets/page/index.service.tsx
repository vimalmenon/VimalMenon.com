import {ApiCaller, common} from "utility";
import {apis} from "model";
import actions from "actions";
import store from "store";


export const init = () :void=> {
	common.themeLocalStorageAndState();
	new ApiCaller<IMain>(new apis.MainApi())
		.getPromise()
		.then((data) => {
			store.dispatch(actions.common.setSocialMedias(data.socialMedias));
		});
	
};