type IVoidNoParamMethod = ()=>void;
type IVoidOneParamMethod<T> = (value:T)=>void;

type IReturnNoParamMehod<K> = ()=>K;
type IReturnOneParamMehod<T, K> = (value:T)=>K;

type IBlankMethod = ()=>{};

interface IEmptyObject {}