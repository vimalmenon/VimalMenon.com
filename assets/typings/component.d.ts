interface IMetaData {
    title:string;
}

interface IReadWrite {
    read:boolean;
    write:boolean;
}
interface IEntitlement{
    name:string;
    render: IReturnOneParamMethod<IReadWrite, React.ReactElement>
}

interface IComponentChildren {
    children: JSX.Element[] | JSX.Element
}