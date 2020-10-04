import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import loadable from "@loadable/component";
import {Spinner} from "react-redux-spinner";
import { ToastProvider } from "react-toast-notifications";

import {
	ThemeProvider,
	createMuiTheme
} from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import {palette} from "model";

import {init} from "./index.service";

import User from "./user";
const Admin = loadable(() => import( /* webpackChunkName: "admin" */ /* webpackMode: "lazy" */ "./admin"));


/*
const OtherPageHOC = connect<IStateProps, IDispatchProps, IEmptyObject, IState>(mapStateToProps, mapActionsToProps)(OtherPage);
*/


const Page:React.FC<IEmptyObject> = () => {
	React.useEffect(() => {
		init();
	}, []);
	const type = useSelector<IState, ThemeType>(state => state.common.theme);
	const theme = createMuiTheme({
		palette: {
			...palette,
			type
		}
	});
	return (
		<ThemeProvider theme={theme}>
			<ToastProvider 
				autoDismiss
				autoDismissTimeout={3000}>
				<Spinner config={{}}/>
				<Router>
					<Switch>
						<Route path="/admin" component={Admin} />
						<Route path="/" component={User} />
					</Switch>
				</Router>
			</ToastProvider>
		</ThemeProvider>
	);
};

export default Page;