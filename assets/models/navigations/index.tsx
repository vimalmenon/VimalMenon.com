const home:INavigation = {
    name: "home",
    url : "/",
    title: "Vimal Menon"
};
const admin:INavigation = {
    name: "admin",
    url : "/admin",
    title: "Admin | Vimal Menon"
};

const mainNavigations: INavigation[] = [
    home
];
const adminNavigations:INavigation[] = []
const navigationByUrl:{[x:string]:INavigation} = {
    [home.url]:home,
    [admin.url]:admin
};
export {
    mainNavigations,
    adminNavigations,
    navigationByUrl
};