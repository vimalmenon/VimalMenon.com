import { useToasts } from "react-toast-notifications";

interface IUseNotification {
	onError:IVoidOneParamMethod<string>,
	onInfo: IVoidOneParamMethod<string>,
	onSuccess: IVoidOneParamMethod<string>,
	onWarning: IVoidOneParamMethod<string>,
}
const useNotification = ():IUseNotification => {
	const { addToast } = useToasts();

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
	return {onError, onInfo, onSuccess, onWarning};
};


export default useNotification;