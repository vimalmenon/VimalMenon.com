import { useLocation } from "react-router-dom";
import {navigations} from "model";

const metadata = ():{navigation:INavigation} => {
	const location = useLocation();
	const {pathname} = location;
	let navigation = navigations.navigationByUrl[pathname];
	if(!navigation) {
		navigation = navigations.pageNotFound;
	}
	return {navigation};
};

export default metadata;