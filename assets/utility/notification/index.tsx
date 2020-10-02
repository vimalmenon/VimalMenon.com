import { useToasts } from "react-toast-notifications";

const useNotification = () => {
    const { addToast } = useToasts()

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