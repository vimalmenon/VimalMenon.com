import React from "react";

import {apis} from "model";
import {ApiCaller} from "utility";
import {YOUTUBE_URL} from "const";

import Container from "../../common/container";


const About:React.FC = () => {
	const [aboutMe, setAboutMe] = React.useState<IAboutMe|null>(null);
	React.useEffect(() => {
		new ApiCaller<IAboutMe>(new apis.AboutMe())
			.getPromise()
			.then((data) => {
				setAboutMe(data);
			});
	},[]);
	return (
		<Container>
			<div>
				<div>
					<iframe width={"100%"} src={`${YOUTUBE_URL}${aboutMe?.videoLink}`} frameBorder="0" allowFullScreen={true} />
				</div>
				<div>
					{aboutMe?.detail.title}
					this is about
				</div>
			</div>
		</Container>
		
	);
};

export default About;