import sessionTypes from "./session.types";

class SetSession implements IActions<any>{
	public type = sessionTypes.SET_SESSION;
	public payload;
	constructor (data:any) {
		this.payload = data;
	}
}


export default {
	SetSession
};