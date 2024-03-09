// filterOutOdds

const filterOutOdds = (...args) => args.filter(number => number % 2 === 0);

// findMin

const findMin = (...args) => Math.min(...args);

// mergeObjects

const mergeObjects = (firstObject, secondObject) => ({...firstObject,...secondObject});

// doubleAndReturnArgs

const doubleAndReturnArgs = (array, ...args) => [...array, ...args.map(number => number * 2)];

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let len = items.length;
    let index = Math.floor(Math.random() * len);
    let result = [...items];
    result.splice(index,1)
    return result;
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    let result = [...array1,...array2];
    return result;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let object = {...obj};
    object[key] = val;
    return object;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let object = {...obj};
    delete object[key];
    return object;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    let result = ({...obj, ...obj2});
    return result;
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let object = {...obj};
    object[key] = val;
    return object;
}