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

type ThemeType = "light"|"dark"|undefined;

interface ICommonState {
    theme:ThemeType;
    socialMedias:ISocialMedia[];
    notification:string|null;
    loading:boolean;
    selectedNavigation?:INavigation;
}
interface IAdminState {

}
interface IState {
    navigation: INavigationState;
    session: ISessionState;
    component: IComponentState;
    notification: INotificationState;
    common:ICommonState;
    pendingTasks?:number;
    admin:IAdminState
}