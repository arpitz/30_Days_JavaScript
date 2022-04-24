class Map {
    constructor() {
        this.values = {};
        this.size = 0;
    }

    set(key, value) {
        if(!(key in this.values)) {
            this.size++;
        }
        this.values[key] = value;
    }

    get(key) {
        return this.values[key];
    }

    delete(key) {
        if(!(key in this.values)) {
            throw new Error(`${key} does not exist`);
        }
        delete this.values[key];
        this.size--;
    }

    has(key) {
        return this.values[key] !== 'undefined';
    }
}


const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2

console.log(map1.has('c'));