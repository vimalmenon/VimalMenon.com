import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";

const home:INavigation = {
	name: "Home",
	url : "/",
	title: "Vimal Menon"
};
const privacyPolicy:INavigation = {
	name :"Privacy Policy",
	url : "/privacy-policy",
	title : "Privacy Policy | Vimal Menon",	
};
const admin:INavigation = {
	name : "Admin",
	icon : (<SupervisorAccountIcon />),
	url : "/admin/admin",
	title : "Admin | Dashboard | Vimal Menon",
	breadcrumbs : [
		{
			name: "Admin",
			url : "/admin",
			title: "Dashboard | Vimal Menon",
			icon: (<HomeIcon />),
		},
		{
			name : "Admin",
			icon : (<SupervisorAccountIcon />),
			url : "/admin/admin",
			title : "Admin | Dashboard | Vimal Menon",
		}
	]
};
const dashboard:INavigation = {
	name: "Home",
	url : "/admin",
	title: "Dashboard | Vimal Menon",
	icon: (<HomeIcon />),
	navigations:[
		admin
	],
	breadcrumbs : [
		{
			name : "Home",
			url : "/admin",
			title: "Admin | Vimal Menon",
			icon : (<HomeIcon />)
		}
	]
};

const pageNotFound:INavigation = {
	name: "PageNotFound",
	url : "/page-not-found",
	title: "Page Not Found | Vimal Menon"
};
const tutorials : INavigation = {
	name: "Tutorials",
	url : "/tutorials",
	title: "Tutorials | Vimal Menon"
};
const about:IHomeNavigation = {
	name: "About",
	className:"about"
};
const tutorialsHome: IHomeNavigation = {
	name: "Tutorials",
	className:"tutorials"
};
const contact:IHomeNavigation = {
	name: "Contact",
	className:"contact"
};
const mainNavigations: IHomeNavigation[] = [
	about,
	tutorialsHome,
	contact
];
const footerNavigations : INavigation[] = [
	home,
	tutorials,
	privacyPolicy
];
const adminNavigations:INavigation[] = [
	dashboard
];
const navigationByUrl:{[key:string]:INavigation} = {
	[home.url]:home,
	[dashboard.url]:dashboard,
	[privacyPolicy.url]:privacyPolicy,
	[tutorials.url]:tutorials,
	[admin.url]:admin
};
export default {
	footerNavigations,
	mainNavigations,
	adminNavigations,
	navigationByUrl,
	pageNotFound
};