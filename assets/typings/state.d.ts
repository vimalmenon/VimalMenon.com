interface INavigationState {
}

interface ISessionState {
    id?: number;
	user?:string;
	group?: string;
}

interface IState {
    navigation: INavigationState;
    session: ISessionState;
}