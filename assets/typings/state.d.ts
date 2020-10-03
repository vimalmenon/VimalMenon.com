interface INavigationState {
}
interface IComponentSession {
    [name:number]:IReadWrite;
}
interface IComponentState {
    [name:string]:IComponentSession;
}
interface INotificationState {
}
interface IState {
    navigation: INavigationState;
    session: ISessionState;
    component: IComponentState;
    notification: INotificationState;
    pendingTasks?:number;
}