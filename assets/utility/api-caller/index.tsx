class ApiCaller {
    private promise;
    private controller;
    constructor (data:IApi) {
        this.controller = new AbortController();
        const signal = this.controller.signal;
        const {url, ...rest} = data;
        this.promise = new Promise((resolve, reject)=> {
            fetch(url, {...rest, signal});
        });
    }
    public flushSession () {

    }
    public getPromise () {
        return this.promise;
    }
    public abort () {
        this.controller.abort();
    }
}

export default ApiCaller;