import spinner from "./spinner";
import useNotification from "./notification";
import ApiCaller from "./api-caller";

interface IUtility {
	spinner:typeof spinner;
	useNotification: typeof useNotification;
	ApiCaller: typeof ApiCaller;
}
const utility:IUtility = {
	spinner,
	useNotification,
	ApiCaller
};
export default utility;