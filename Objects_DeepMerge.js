// deep merge objects

function deepMerge() {
    const result = {};

    const merge = obj => {
        for(const prop in obj) {
            if(obj.hasOwnProperty(prop)) {
                if(obj[prop].constructor.name === 'Object') {
                    result[prop] = deepMerge(result[prop], obj[prop]);
                }
                else {
                    result[prop] = obj[prop];
                }
            }
        }
    }
    for(let i = 0; i < arguments.length; i++) {
        merge(arguments[i]);
    }

    return result;
}




const profile = {
    name: 'Arpit',
    age: 30,
    address: {
        house: '3/2',
        city: 'Glasgow',
        zip: 'G140NG'
    }
};
const job = {
    tech: {
        main: 'Front-End',
        skills: ['JS', 'React', 'HTML', 'CSS', 'Debugging']
    }
};

const newadd = {
    address: 'London'
};

const user = deepMerge(profile, job, newadd);
console.log(user);