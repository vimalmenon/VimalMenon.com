import {start, stop} from "../spinner";
import actions from "../../store/actions";
import store from "../../store";


class ApiCaller<T> {
	private promise;
	private controller;
	private isSpinning;
	constructor (data:IApi) {
		this.controller = new AbortController();
		const signal = this.controller.signal;
		const {url, clearHeader, ...rest} = data;
		this.isSpinning = true;
		start();
		this.promise = new Promise<T>((resolve, reject)=> {
			fetch(url, {...rest, signal})
				.then((result) => {
					this.isSpinning = false;
					stop();
					return result.json();
				}).then((success:IResponse<T>) => {
					if(success.session) {
						store.dispatch(actions.session.setSession(success.session));
					}
					if(success.flush) {
						clearHeader();
					}
					resolve(success.data);
				})
				.catch((error:IResponse<T>) => {
					if(error.flush) {
						clearHeader();
					}
					reject(error.data);
				});
		});
	}
	public getPromise ():Promise<T> {
		return this.promise;
	}
	public abort ():void {
		if(this.isSpinning) {
			stop();
		}
		this.controller.abort();
	}
}

export default ApiCaller;