// map method

Array.prototype.map = function(callback) {
    const newarr = [];
    const length = this.length;

    for(let i = 0; i < length; i++) {
        newarr[i] = callback(this[i], i, this);
    }
    return newarr;
}
const a = [1, 2, 3, 4];
// console.log(a.map(i => i * 10));

// filter method

Array.prototype.filter = function(callback) {
    const newarr = [];
    const { length } = this;
    for(let i = 0; i < length; i++) {
        if(callback(this[i], i, this)) {
            newarr.push(this[i]);
        }
    }
    return newarr;
}
// console.log(a.filter(i => i % 2 === 0));

// reduce method
Array.prototype.reduce = function(callback, initialValue = 0) {
    let result = initialValue;
    const { length } = this;
    for(let i = 0; i < length; i++) {
        const value = callback(result, this[i]);
        result = value;
    }
    return result;
}


// console.log(a.reduce((acc, curr) => acc * curr, 1));

// sort method

