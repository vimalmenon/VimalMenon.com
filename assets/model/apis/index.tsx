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

class Login extends Api {
	constructor (data:ICredential) {
		super("login", METHODS.POST, "/api/log_in");
		this.setApiData<ICredential>(data);
	}
}

export default {
	ComponentEntitlement,
	MainApi,
	Login
};

export {
	ComponentEntitlement,
	MainApi,
	Login
};