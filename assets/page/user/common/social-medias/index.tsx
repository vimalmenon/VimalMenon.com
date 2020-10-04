import React from "react";
import { useSelector } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";

import {icons} from "model";

const SocialMedias:React.FC = () => {
	const socialMedias = useSelector<IState, ISocialMedia[]>(state => state.common.socialMedias);
	return (
		<React.Fragment>
			{socialMedias.map((socialMedia, key) => {
				const Icon = icons[socialMedia.name];
				return (
					<Tooltip title={socialMedia.title} aria-label={socialMedia.name} key={key}>
						<Link href={socialMedia.url} target="_blank" color="inherit">
							<IconButton color="inherit">
								<Icon/> 
							</IconButton>
						</Link>
					</Tooltip>
				);			
			})}
		</React.Fragment>
	);
};

export default SocialMedias;