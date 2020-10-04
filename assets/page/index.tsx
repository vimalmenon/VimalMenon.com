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
import { useDispatch, useSelector } from "react-redux";

import {init} from "./index.service";

import User from "./user";



const Admin = loadable(() => import( /* webpackChunkName: "admin" */ /* webpackMode: "lazy" */ "./admin"));

/*
import actions from "../store/actions";
const OtherPage = ({session, action}) => {
	return (
		<div>
			<MetaData title="Vimal Menon" />
			This is vimal Menon
			<button onClick={() => action("Vimal Menon")}>
				Add
			</button>
		</div>
	);
};
interface IStateProps {
	session:ISessionState
}
interface IDispatchProps {
	action: (test:string)=>void
}

const mapStateToProps = (state:IState):IStateProps => {
	return {
		session: state.session
	};
};
const mapActionsToProps = ():IDispatchProps => {
	return {
		action: (test) => console.log("My name is ", test)
	};
};

const OtherPageHOC = connect<IStateProps, IDispatchProps, IEmptyObject, IState>(mapStateToProps, mapActionsToProps)(OtherPage);
*/


const Page:React.FC<IEmptyObject> = () => {
	React.useEffect(() => {
		init();
	}, []);
	const type = useSelector<IState, ThemeType>(state => state.common.theme);
	const theme = createMuiTheme({
		palette: {
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