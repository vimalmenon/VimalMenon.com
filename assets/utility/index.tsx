import spinner from "./spinner";
import useNotification from "./notification";

interface IUtility {
	spinner:typeof spinner,
	useNotification: typeof useNotification
}
const utility:IUtility = {
	spinner,
	useNotification
};
export default utility;