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
type ThemeType = "light"|"dark";
interface ICommonState {
    theme:ThemeType;
}
interface IState {
    navigation: INavigationState;
    session: ISessionState;
    component: IComponentState;
    notification: INotificationState;
    common:ICommonState;
    pendingTasks?:number;
}