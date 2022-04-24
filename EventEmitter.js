class MyEventEmitter {
    constructor() {
        this.events = {};
    }

    on(name, listener) {
        if(!this.events[name]) {
            this.events[name] = [];
        }
        this.events[name].push(listener);
    }

    removeListener(name, listenerToRemove) {
        if(!this.events[name]) {
            throw new Error(`Can't remove a listener. Event ${name} does not exist.`);
        }
        this.events[name] = this.events[name].filter(listener => listener !== listenerToRemove);
    }

    emit(name, data) {
        if(!this.events[name]) {
            throw new Error(`Can't emit the data. Event ${name} does not exist.`);
        }

        this.events[name].forEach(cb => cb(data));
    }
}