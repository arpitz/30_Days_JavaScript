const sum = function(...args) {
    return Object.assign(
        sum.bind(null, ...args),
        { valueOf: () => args.reduce((acc, curr) => acc + curr, 0) }
    )
}

// console.log(+sum(1, 2, 3)(4)(5, 6)) // 21

function add(a) {
    return function(b) {
        if(b) return add(a + b);
        return a;
    }
}

const func = add(1)(2)(3);
console.log(func());

//add(1,2..n)(5,6…n)…(n)()

function add(...args) {
    const a = args.reduce((a, b) => a + b, 0);
    return function(...args) {
        const b = args.reduce((a, b) => a + b, 0);
        if(b) {
            return add(a + b);
        }
        return a;
    }
}

//console.log(add(1,2..n)(5,6…n)…(n)());