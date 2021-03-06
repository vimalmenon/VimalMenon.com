import {getHeaders, clearHeaders} from "./headers";

import {start, stop} from "../spinner";
import session from "../session";

class ApiCaller<T> {
	private promise;
	private controller;
	private isSpinning;
	constructor (data:IApi) {
		this.controller = new AbortController();
		const signal = this.controller.signal;
		const {url, ...rest} = data;
		const headers = getHeaders();
		this.isSpinning = true;
		start();
		this.promise = new Promise<T>((resolve, reject)=> {
			fetch(url, {...rest, headers, signal})
				.then((result) => {
					this.isSpinning = false;
					stop();
					return result.json();
				}).then((success:IResponse<T>) => {
					if(success.session) {
						session.setSession(success.session);
					}
					if(success.flush) {
						clearHeaders();
					}
					resolve(success.data);
				})
				.catch((error:IResponse<T>) => {
					if(error.flush) {
						clearHeaders();
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