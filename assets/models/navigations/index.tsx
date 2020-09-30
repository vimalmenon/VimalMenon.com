const home:INavigation = {
    name: "home",
    url : "/",
    title: "Vimal Menon"
};

const mainNavigations: INavigation[] = [
    home
];
const navigationByUrl:{[x:string]:INavigation} = {
    [home.url]:home
};
export {
    mainNavigations,
    navigationByUrl
};