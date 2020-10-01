import React from "react";
import { Provider, connect } from "react-redux";

import store from "../store";
import actions from "../store/actions";

import {MetaData} from "../component";

console.log(actions);

const OtherPage = ({session, action}) => {
	console.log(session);
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

const OtherPageHOC = connect<IStateProps, IDispatchProps, INoPropsComponent, IState>(mapStateToProps, mapActionsToProps)(OtherPage);

const Page:React.FC<INoPropsComponent> = () => {
	return (
		<Provider store={store}>
			<OtherPageHOC />
		</Provider>
	);
};

export default Page;