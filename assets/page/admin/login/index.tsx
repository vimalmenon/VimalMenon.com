import React from "react";

import {signIn} from "./index.service";

const Login:React.FC = () => {
	const [credential, setCredential] = React.useState<ICredential>({username:"", password:""});
	return (
		<div>
			<input 
				type="text" 
				name="username" 
				placeholder="Username"
				value={credential.username}
				onChange={(e) =>setCredential({...credential, username:e.target.value})}/>
			<input 
				type="password" 
				name="password" 
				placeholder="Password"
				value={credential.password}
				onChange={(e) =>setCredential({...credential, password:e.target.value})}/>
			<button onClick={() => signIn(credential)} >Sign In</button>
		</div>
	);
};

export default Login;