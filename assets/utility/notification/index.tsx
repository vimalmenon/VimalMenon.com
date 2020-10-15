import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import actions from "actions";

interface IUseNotification {
	onError:IVoidOneParamMethod<string>;
	onInfo: IVoidOneParamMethod<string>;
	onSuccess: IVoidOneParamMethod<string>;
	onWarning: IVoidOneParamMethod<string>;
	onToast:IVoidOneParamMethod<string|null>
}
let dispatch;
let addToast;
const init = ():void => {
	dispatch = useDispatch();
	addToast = useToasts().addToast;
};
const useNotification = ():IUseNotification => {
	const onError:IVoidOneParamMethod<string> = (message:string) => {
		addToast(message, { appearance: "error"});
	};
	const onInfo:IVoidOneParamMethod<string> = (message:string) => {
		addToast(message, { appearance: "info"});
	};
	const onSuccess:IVoidOneParamMethod<string> = (message:string) => {
		addToast(message, { appearance: "success"});
	};
	const onWarning:IVoidOneParamMethod<string> = (message:string) => {
		addToast(message, { appearance: "warning"});
	};
	const onToast = (value:string|null) => {
		dispatch(actions.common.setNotification(value));
	};
	return {onError, onInfo, onSuccess, onWarning, onToast};
};


export default {
	init,
	useNotification
};