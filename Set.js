class Set {
    constructor(initialValues) {
        this.values = {};
        this.size = 0;
        for(const v of initialValues) {
            this.add(v);
        }
    }

    add(value) {
        if(!this.contains(value)) {
            this.values[value] = value;
            this.size++;
        }
    }

    remove() {
        if(this.contains(value)) {
            delete this.values[value];
            this.size--;
        }
    }

    contains(value) {
        return typeof this.values[value] !== 'undefined';
    }

    getSize() {
        return this.size;
    }

    each(iteratorFunction, thisObj) {
        for(const value in this.values) {
            iteratorFunction.call(thisObj, this.values[value]);
        }
    }
}

const set = new Set([1,2,1,2, 3, 3, 4]);

console.log(set.getSize());