import admin from "./admin";
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
class AboutMe extends Api {
	constructor () {
		super("aboutMe", METHODS.GET, "/api/about_me");
	}
}

class SaveContact extends Api {
	constructor(data:IContact) {
		super("saveContact", METHODS.POST, "/api/save_contact");
		this.setApiData<IContact>(data);
	}
}
class GetContactUs extends Api {
	constructor() {
		super("getContactUs", METHODS.GET, "/api/contact_us");
	}
}
export default {
	ComponentEntitlement,
	GetContactUs,
	SaveContact,
	AboutMe,
	MainApi,
	Login,
	admin,
};

export {
	ComponentEntitlement,
	GetContactUs,
	SaveContact,
	AboutMe,
	MainApi,
	Login,
	admin,
};