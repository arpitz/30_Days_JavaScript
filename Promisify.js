const myPromisify = (fn) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            function customCallback(err, ...results) {
                if(err) {
                    return reject(err);
                }
                else {
                    return resolve(results.length === 1 ? results[0] : results);
                }
            }
            args.push(customCallback);
            fn.call(this, ...args);
        });
    }
}




// Example:
const getSumAsync = (num1, num2, callback) => {
  if (!num1 || !num2) {
    return callback(new Error("Missing dependencies"), null);
  }

  const sum = num1 + num2;
  const message = `Sum is ${sum}`;
  return callback(null, sum, message);
};
const getSumPromise = myPromisify(getSumAsync);
getSumPromise(2, 3)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Reference: https://www.freecodecamp.org/news/write-your-own-promisify-function-from-scratch/

