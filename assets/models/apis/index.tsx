import{METHODS, getHeaders} from "./helper";
import storage, {StorageType} from "../storage"


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
	public setApiData (data) {
		this.body = JSON.stringify(data);
    }
    public getHeaders () {
        const value = storage.selectStorage(StorageType.session).getStorage();
        this.headers = getHeaders(value);
    }
}

class MainApi extends Api {
	constructor() {
        super("api", METHODS.GET, "/api");
	}
}

export default {
    MainApi
};