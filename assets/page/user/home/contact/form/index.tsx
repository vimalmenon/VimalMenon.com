import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Grid from "@material-ui/core/Grid";


import {onSave} from "./index.service";


const Form:React.FC = () => {
	const [contact, setContact] = React.useState<IContact>({name:"",emailAddress:"",subject:"",message:""});
	const onChange = (e) => {
		const {name, value}= e.target;
		setContact({...contact, [name]:value});
	};
	return(
		<section>
			<form onSubmit={(e) => e.preventDefault()}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<TextField
							label="Your Name"
							required
							autoComplete="off"
							color="secondary"
							fullWidth={true}
							name="name"
							value={contact.name}
							onChange={onChange}/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Your Email"
							autoComplete="off"
							color="secondary"
							fullWidth={true}
							name="emailAddress"
							value={contact.emailAddress}
							onChange={onChange}/>
					</Grid>
					<Grid item xs={12}>
						<TextField 
							label="Subject"
							required
							autoComplete="off"
							color="secondary"
							fullWidth={true}
							name="subject"
							value={contact.subject}
							onChange={onChange}/>
					</Grid>
					<Grid item xs={12}>
						<TextField 
							fullWidth={true}
							autoComplete="off"
							label="Message"
							required
							color="secondary" 
							multiline 
							rows={6}
							name="message"
							value={contact.message}
							onChange={onChange}/>
					</Grid>
					<Grid item xs={12}>
						<Button 
							variant="contained" 
							color="secondary"
							onClick={() => onSave(contact)}>
							Send Message
							<ArrowForwardIcon/>
						</Button>
					</Grid>
				
				</Grid>
			</form>
		</section>
	);
};

export default Form;