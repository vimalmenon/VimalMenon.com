import { useLocation } from "react-router-dom";
import {navigations} from "model";

const metadata = () => {
	const location = useLocation();
	const {pathname} = location;
	let navigation = navigations.navigationByUrl[pathname];
	if(!navigation) {
		navigation = navigations.PageNotFound;
	}
	return {navigation};
};

export default metadata;