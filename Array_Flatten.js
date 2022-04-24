// Recursive
const flattenRec = nestedArr => {
    const result = [];
    function handleFlatten(arr) {
        for(let i = 0; i < arr.length; i++) {
            const curr = arr[i];
            if(Array.isArray(curr)) {
                handleFlatten(curr);
            }
            else {
                result.push(curr);
            }
        }
    }
    handleFlatten(nestedArr);
    return result;
}

// Iterative using stack

const flatten = nestedArr => {
    const stack = [...nestedArr];
    const result = [];
    while(stack.length > 0) {
        const top = stack.pop();
        if(top.constructor.name === 'Array') {
            stack.push(...top);
        }
        else {
            result.push(top);
        }
    }
    return result.reverse();
}


const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];

console.log(flatten(arr));