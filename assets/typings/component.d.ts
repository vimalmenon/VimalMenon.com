interface IMetaData {
    title:string;
}

interface IReadWrite {
    read:boolean;
    write:boolean;
}
interface IEntitlement{
    name:string;
    render: IReturnOneParamMehod<IReadWrite, React.ReactElement>
}