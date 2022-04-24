function clone(obj) {
    // for primitives
    if(obj === null || typeof obj !== "object") {
        return obj;
    }
    // for date objects
    if(obj instanceof Date) {
        return new Date(obj.getTime());
    }
    // for arrays
    if(obj.constructor === Array) {
        const clonedArr = [];
        obj.forEach(ele => clonedArr.push(clone(ele)));
        return clonedArr;
    }
    // for objects
    const clonedObj = new obj.constructor();
    for(const prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            clonedObj[prop] = clone(obj[prop]);
        }
    }
    return clonedObj;
}

const a = {
    name: 'Arpit',
    age: 30,
    address: {
        house: '3/2',
        city: 'Glasgow',
        zip: 'G140NG'
    },
    tech: {
        main: 'Front-End',
        skills: ['JS', 'React', 'HTML', 'CSS', 'Debugging']
    }
}

const b = clone(a);
//const b = Object.assign({}, a);
console.log(b);
console.log(b === a);

a.tech.skills.push('DSA');
console.log(b);
console.log(a);