import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import {signIn, onSubmit} from "./index.service";
import Header from "../../user/common/header";
import Footer from "../../user/common/footer";
import Container from "../../user/common/container";



const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			backgroundColor: theme.palette.background.paper,
			color: theme.palette.text.primary,
		},
		signInContainer : {
			margin: theme.spacing(1),
		},
		container : {
			display:"flex",
			flex: "1 1 100%",
		}
	});
});

const Login:React.FC = () => {
	const classes = useStyles();
	const [credential, setCredential] = React.useState<ICredential>({username:"", password:""});
	const [showPassword, setShowPassword] = React.useState<boolean>(false);
	return (
		<div className={classes.root}>
			<Header />
			<Container>				
				<form onSubmit={onSubmit} autoComplete={"off"} className={classes.container}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="h4" align="center">
								Sign In
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<TextField 
								fullWidth={true}
								color="secondary"
								required 
								id="username" 
								label="Username" 
								value={credential.username || ""}
								onChange={(e) => setCredential({...credential,"username": e.target.value})}
								placeholder="Username"/>
						</Grid>
						<Grid item xs={12}>
							<FormControl fullWidth={true} required color="secondary">
								<InputLabel>Password</InputLabel>
								<Input
									type={showPassword ? "text" : "password"}
									value={credential.password || ""}
									onChange={(e) => setCredential({...credential,"password": e.target.value})}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={() => setShowPassword(!showPassword)}>
												{showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									} />
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<Button 
								type="submit"
								fullWidth={true}
								variant="contained" 
								color="primary"
								onClick={() => signIn(credential)}>
								Sign In
							</Button>
						</Grid>
					</Grid>
				</form>
			</Container>

			<Footer />
		</div>
	);
};

export default Login;