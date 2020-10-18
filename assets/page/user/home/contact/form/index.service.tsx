import {apis} from "model";
import {ApiCaller} from "utility";


export const onSave = (contact:IContact):void => {
	new ApiCaller(new apis.SaveContact(contact));
};