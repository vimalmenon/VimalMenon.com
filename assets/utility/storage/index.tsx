import {STORAGE_VALUE} from "../../const";

export enum StorageType {
    session="session",
    local="local"
}
class Storage {
	public storage;
	constructor(){
		const local = localStorage.getItem(STORAGE_VALUE) || JSON.stringify({});
		const session = sessionStorage.getItem(STORAGE_VALUE) || JSON.stringify({});
		localStorage.setItem(STORAGE_VALUE, local);
		sessionStorage.setItem(STORAGE_VALUE, session);
		this.storage = sessionStorage;
	}
	public selectStorage (storageType:StorageType) {
		if(storageType === StorageType.session) {
			this.storage = sessionStorage;
		} else {
			this.storage = localStorage;
		}
		return this;
	}
	public selectLocalStorage () {
		this.storage = localStorage;
	}
	public selectSessionStorage () {
		this.storage = sessionStorage;
	}
	public getStorage () {
		return JSON.parse(this.storage.getItem(STORAGE_VALUE));
	}
	public addToStorage (value) {
		const storageValue = this.getStorage();
		this.storage.setItem(STORAGE_VALUE, JSON.stringify({...storageValue, ...value}));
	}
}

export const storage = new Storage();

export default storage;