// Recursive solution
Promise.all = function promiseAllRecursive(arr) {
    if(arr.length === 0) {
        return Promise.resolve([]);
    }
    const [first, ...rest] = arr;

    return Promise.resolve(first).then(firstResult => {
        return promiseAllRecursive(rest).then(restResult => {
            return [firstResult, ...restResult];
        })
    })
}

// Iterative Solution
Promise.all = function promiseIterative(arr) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        arr.forEach((value, index) => {
            Promise.resolve(value).then(res => {
                results[index] = res;
                completed += 1;
                if(completed === arr.length) {
                    resolve(results);
                } 
            })
            .catch((err) => reject(err));
        })
    })
} 