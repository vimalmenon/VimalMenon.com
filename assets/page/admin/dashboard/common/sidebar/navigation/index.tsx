import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { useHistory } from "react-router-dom";

import {navigations} from "model";
import Collapse from "@material-ui/core/Collapse";

const Navigation = () => {
	const history = useHistory();
	const onNavigationClick = (navigation:INavigation) => {
		history.push(navigation.url);
	};
	return (
		<List>
			{navigations.adminNavigations.map((navigation, key) => {
				return (
					<React.Fragment key={key} >
						<ListItem
							button 
							selected={false}
							onClick={() => onNavigationClick(navigation)}>
							<ListItemIcon>
								{navigation.icon}
							</ListItemIcon>
							<ListItemText primary={navigation.name} />
						</ListItem>
						{navigation.navigations  ?
							<Collapse in={true} timeout="auto" unmountOnExit >
								{navigation.navigations.map((innerNavigation, innerKey) => {
									return (
										<List component="div" disablePadding key={innerKey}>
											<ListItem 
												button 
												onClick={() => onNavigationClick(innerNavigation)}>
												<ListItemIcon>
													{innerNavigation.icon}
												</ListItemIcon>
												<ListItemText primary={innerNavigation.name} />
											</ListItem>
										</List>
									);
								})}
							</Collapse> : 
							null
						}
					</React.Fragment>
				);
			})}
		</List>
	);
};

export default Navigation;