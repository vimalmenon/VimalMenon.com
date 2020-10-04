interface INavigation {
    name: string;
    url : string;
    title: string;
}
interface IApi {
    name: string;
    method : string;
    url : string;
    body?: string;
}
interface ISessionState {
    id?: number;
	user?:string;
	group?: string;
}
interface IResponse<T> {
	code:number;
	message:string;
	session: ISessionState;
    flush:boolean;
    data:T;
}

interface IComponentEntitlementData {
    name:string
}

interface ISessionStorage {

}
interface ILocalStorage {
    theme:ThemeType;
}