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
    headers: HeadersInit;
    clearHeader:IVoidNoParamMethod
}
interface ISessionState {
    id?: number;
	user?:string;
	group?: string;
}
interface IResponse {
	code:number;
	message:string;
	session: ISessionState;
	flush:boolean;
}
interface IResponseWithData<T> extends IResponse {
	data: T;
}

interface IComponentEntitlementData {
    name:string
}

