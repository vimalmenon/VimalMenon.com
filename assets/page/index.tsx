import React from "react";
import { Provider } from "react-redux";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import loadable from "@loadable/component";
import {Spinner} from "react-redux-spinner";
import { ToastProvider } from "react-toast-notifications";


import store from "../store";
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
	console.dir(Spinner);
	return (
		<Provider store={store}>
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
		</Provider>
	)
};

export default Page;