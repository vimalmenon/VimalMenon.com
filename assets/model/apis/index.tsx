import{METHODS, getHeaders} from "./helper";
import storage, {StorageType} from "../storage";


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
		this.setHeaders();
	}
	public setApiData (data) {
		this.body = JSON.stringify(data);
	}
	public setHeaders () {
		const value = storage.selectStorage(StorageType.session).getStorage();
		this.headers = getHeaders(value);
	}
	public clearHeader () {
		const sessionStorage = storage.selectStorage(StorageType.session).getStorage();
		storage.selectStorage(StorageType.session).addToStorage({...sessionStorage, Authorization: null});
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
		this.setApiData(data);
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