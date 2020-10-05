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
	name: "Admin",
	url : "/admin",
	title: "Admin | Vimal Menon"
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
const adminNavigations:INavigation[] = [];
const navigationByUrl:{[x:string]:INavigation} = {
	[home.url]:home,
	[admin.url]:admin,
	[privacyPolicy.url]:privacyPolicy
};
export default {
	footerNavigations,
	mainNavigations,
	adminNavigations,
	navigationByUrl,
	pageNotFound
};