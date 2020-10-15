import React from "react";

import {signIn, onSubmit} from "./index.service";

import Header from "../../user/common/header";
import Footer from "../../user/common/footer";
const Login:React.FC = () => {
	const [credential, setCredential] = React.useState<ICredential>({username:"", password:""});
	return (
		<div>
			<Header />
			<form onSubmit={(e) => onSubmit(e, credential)}>
				<input 
					type="text" 
					name="username" 
					placeholder="Username"
					value={credential.username}
					onChange={(e) => setCredential({...credential, username:e.target.value})}/>
				<input 
					type="password" 
					name="password" 
					placeholder="Password"
					value={credential.password}
					onChange={(e) =>setCredential({...credential, password:e.target.value})}/>
				<button onClick={() => signIn(credential)} >Sign In</button>
			</form>
			<Footer />
		</div>
	);
};

export default Login;