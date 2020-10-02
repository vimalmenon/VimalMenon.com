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
}

