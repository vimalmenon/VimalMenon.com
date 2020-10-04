import React from "react";
import { ToastProvider } from "react-toast-notifications";
import Snackbar from "@material-ui/core/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import actions from "actions";


const Notification = ({children}) => {
	const value = useSelector<IState, string|null>(state => state.common.notification);
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(actions.common.setNotification(null));
	};
	return (
		<ToastProvider 
			autoDismiss
			autoDismissTimeout={3000}>
			<Snackbar
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				open={value?true:false}
				autoHideDuration={3000}
				message={value}
				onClose={handleClose} />
			{children}
		</ToastProvider>
	);
};

export default Notification;