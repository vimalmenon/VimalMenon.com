import {apis} from "model";
import { SyntheticEvent } from "react";

import {ApiCaller, common, notification} from "utility";


export const signIn = (credential:ICredential):void => {
	if (!(credential.password && credential.username)) {
		const {onWarning} = notification.useNotification();
		onWarning("Username and Password cannot be blank");
		return;
	}
	new ApiCaller<string>(new apis.Login(credential), common.setHeadersAuthorization);
};
export const onSubmit = (e:SyntheticEvent):void => {
	e.preventDefault();
};