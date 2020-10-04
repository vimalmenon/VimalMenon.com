import{METHODS} from "./helper";


export class Api implements IApi{
	public name;
	public method;
	public url;
	public body;
	public headers;
	constructor (name: string, method: METHODS, url: string) {
		this.name = name;
		this.method = method;
		this.url = url;
	}
	public setApiData<T>(data:T):void {
		this.body = JSON.stringify(data);
	}
}

class MainApi extends Api {
	constructor() {
		super("api", METHODS.GET, "/api");
	}
}
class ComponentEntitlement extends Api {
	constructor (data:IComponentEntitlementData) {
		super("componentEntitlement", METHODS.POST, "/api/component_entitlement");
		this.setApiData<IComponentEntitlementData>(data);
	}
}

export default {
	ComponentEntitlement,
	MainApi
};

export {
	ComponentEntitlement,
	MainApi
};