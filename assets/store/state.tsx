import navigation from "./navigation/navigation.state";
import session from "./session/session.state";
import component from "./component/component.state";
import notification from "./notification/notification.state";
import common from "./common/common.state";


const state:IState = {
	common,
	navigation,
	session,
	component,
	notification
};

export default state;