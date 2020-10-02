const home:INavigation = {
    name: "Home",
    url : "/",
    title: "Vimal Menon"
};
const PrivacyPolicy:INavigation = {
	name :"Privacy Policy",
	url : "/privacy-policy",
	title : "Privacy Policy | Vimal Menon",	
};
const admin:INavigation = {
    name: "admin",
    url : "/admin",
    title: "Admin | Vimal Menon"
};

const mainNavigations: INavigation[] = [
    PrivacyPolicy
];
const adminNavigations:INavigation[] = []
const navigationByUrl:{[x:string]:INavigation} = {
    [home.url]:home,
    [admin.url]:admin,
    [PrivacyPolicy.url]:PrivacyPolicy
};
export {
    mainNavigations,
    adminNavigations,
    navigationByUrl
};