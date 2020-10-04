import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import loadable from "@loadable/component";
import {Spinner} from "react-redux-spinner";

import {
	ThemeProvider,
	createMuiTheme
} from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import {palette} from "model";
import {init} from "./index.service";

import {Notification} from "component";

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
			<Notification>
				<Spinner config={{}}/>
				<Router>
					<Switch>
						<Route path="/admin" component={Admin} />
						<Route path="/" component={User} />
					</Switch>
				</Router>
			</Notification>
		</ThemeProvider>
	);
};

export default Page;