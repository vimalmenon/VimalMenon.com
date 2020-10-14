import {apis} from "model";

import {ApiCaller, common} from "utility";


export const signIn:(credential:ICredential) =>void = async (credential) => {
	const value = await new ApiCaller<string>(new apis.Login(credential)).getPromise();
	common.setHeadersAuthorization(value);
};