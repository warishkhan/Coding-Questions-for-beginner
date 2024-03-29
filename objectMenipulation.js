// Write a function to add a key-value pair to an object.

function addKeyValuePair(obj, key, value) {
    obj[key] = value;
}

// Example usage:
// let myObject = { name: "John" };
// console.log("Before adding key-value pair:", myObject);
// addKeyValuePair(myObject, "age", 30);
// console.log("After adding key-value pair:", myObject);


// Write a function to remove a key from an object.

function removeKey(obj, key) {
    delete obj[key];
}

// Example usage:
// let myObject = { name: "John", age: 30 };
// console.log("Before removing key:", myObject);
// removeKey(myObject, "age");
// console.log("After removing key:", myObject);


// Write a function to check if a key exists in an object.

function keyExists(obj, key) {
    return key in obj;
}

// Example usage:
// let myObject = { name: "John", age: 30 };
// console.log("Does 'name' key exist:", keyExists(myObject, "name")); // Output: true
// console.log("Does 'address' key exist:", keyExists(myObject, "address")); // Output: false

// Write a function to get the value associated with a key in an object.

function getValueByKey(obj, key) {
    return obj[key];
}

// Example usage:
// let myObject = { name: "John", age: 30 };
// console.log("Value associated with 'name':", getValueByKey(myObject, "name")); // Output: "John"
// console.log("Value associated with 'age':", getValueByKey(myObject, "age")); // Output: 30


// Write a function to update the value of a key in an object.

function updateValueByKey(obj, key, value) {
    obj[key] = value;
}

// Example usage:
// let myObject = { name: "John", age: 30 };
// console.log("Before updating value:", myObject);
// updateValueByKey(myObject, "age", 40);
// console.log("After updating value:", myObject);


// Write a function to get all keys of an object as an array.

function getAllKeys(obj) {
    return Object.keys(obj);
}

// Example usage:
// let myObject = { name: "John", age: 30, city: "New York" };
// console.log("Keys of the object:", getAllKeys(myObject));


// Write a function to get all values of an object as an array.

function getAllValues(obj) {
    return Object.keys(obj).map(key => obj[key]);
}

// Example usage:
// let myObject = { name: "John", age: 30, city: "New York" };
// console.log("Values of the object:", getAllValues(myObject));


// Write a function to check if two objects have the same set of keys.
function haveSameKeys(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false; // Different number of keys
    }
    for (let key of keys1) {
        if (!keys2.includes(key)) {
            return false; // Key in obj1 not found in obj2
        }
    }
    return true; // Same set of keys
}

// Example usage:
// const obj1 = { name: "John", age: 30 };
// const obj2 = { age: 30, name: "John" };
// const obj3 = { name: "John", city: "New York" };

// console.log("Objects 1 and 2 have the same set of keys:", haveSameKeys(obj1, obj2)); // Output: true
// console.log("Objects 1 and 3 have the same set of keys:", haveSameKeys(obj1, obj3)); // Output: false


// Write a function to merge two objects.

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Example usage:
const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", country: "USA" };

// const mergedObject = mergeObjects(obj1, obj2);
// console.log("Merged object:", mergedObject);


// Write a function to clone an object.

function cloneObject(obj) {
    return { ...obj };
}

// Example usage:
// const originalObject = { name: "John", age: 30 };
// const clonedObject = cloneObject(originalObject);
// console.log("Cloned object:", clonedObject);

function cloneObject(obj) {
    return Object.assign({}, obj);
}

// Example usage:
// const originalObject = { name: "John", age: 30 };
// const clonedObject = cloneObject(originalObject);
// console.log("Cloned object:", clonedObject);


// Write a function to check if an object is empty.

function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

// Example usage:
const emptyObject = {};
const nonEmptyObject = { name: "John", age: 30 };

// console.log("Is emptyObject empty?", isEmptyObject(emptyObject)); // Output: true
// console.log("Is nonEmptyObject empty?", isEmptyObject(nonEmptyObject)); // Output: false


// Write a function to check if a value exists in an object.

function valueExists(obj, value) {
    return Object.values(obj).includes(value);
}

// Example usage:
// const myObject = { name: "John", age: 30, city: "New York" };
// console.log("Does value 'John' exist in the object?", valueExists(myObject, "John")); // Output: true
// console.log("Does value 'Tokyo' exist in the object?", valueExists(myObject, "Tokyo")); // Output: false


function valueExists(obj, value) {
    return Object.values(obj).indexOf(value) !== -1;
}

// Example usage:
// const myObject = { name: "John", age: 30, city: "New York" };
// console.log("Does value 'John' exist in the object?", valueExists(myObject, "John")); // Output: true
// console.log("Does value 'Tokyo' exist in the object?", valueExists(myObject, "Tokyo")); // Output: false


// Write a function to find the number of key-value pairs in an object.

function countKeyValuePairs(obj) {
    return Object.keys(obj).length;
}

// Example usage:
// const myObject = { name: "John", age: 30, city: "New York" };
// console.log("Number of key-value pairs in the object:", countKeyValuePairs(myObject)); // Output: 3


// Write a function to remove all key-value pairs from an object.

function removeAllKeyValuePairs(obj) {
    for (let key in obj) {
        delete obj[key];
    }
}

// Example usage:
// let myObject = { name: "John", age: 30, city: "New York" };
// console.log("Before removing key-value pairs:", myObject);
// removeAllKeyValuePairs(myObject);
// console.log("After removing key-value pairs:", myObject);


// Write a function to sort an object's keys alphabetically.

function sortObjectKeysAlphabetically(obj) {
    const sortedKeys = Object.keys(obj).sort();
    const sortedObject = {};
    for (let key of sortedKeys) {
        sortedObject[key] = obj[key];
    }
    return sortedObject;
}

// Example usage:
// const myObject = { name: "John", age: 30, city: "New York" };
// console.log("Original object:", myObject);
// const sortedObject = sortObjectKeysAlphabetically(myObject);
// console.log("Object with keys sorted alphabetically:", sortedObject);


// Write a function to find the key associated with the maximum value in an object.

function getKeyWithMaxValue(obj) {
    let maxKey = null;
    let maxValue = -Infinity;
    for (let key in obj) {
        if (obj[key] > maxValue) {
            maxKey = key;
            maxValue = obj[key];
        }
    }
    return maxKey;
}

// Example usage:
// const myObject = { name: "John", age: 30, city: "New York", salary: 50000 };
// console.log("Key associated with the maximum value:", getKeyWithMaxValue(myObject)); // Output: "salary"


// Write a function to find the key associated with the minimum value in an object.

function getKeyWithMinValue(obj) {
    let minKey = null;
    let minValue = Infinity;
    for (let key in obj) {
        if (obj[key] < minValue) {
            minKey = key;
            minValue = obj[key];
        }
    }
    return minKey;
}

// Example usage:
// const myObject = { name: "John", age: 30, city: "New York", salary: 50000 };
// console.log("Key associated with the minimum value:", getKeyWithMinValue(myObject)); // Output: "age"



// Write a function to convert an array of objects into an object with specified key-value pairs.

function arrayToObject(arr, keyPropertyName, valuePropertyName) {
    const result = {};
    for (let obj of arr) {
        const key = obj[keyPropertyName];
        const value = obj[valuePropertyName];
        result[key] = value;
    }
    return result;
}

// Example usage:
const arrayOfObjects = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" }
];

const keyPropertyName = "id";
const valuePropertyName = "name";

const resultObject = arrayToObject(arrayOfObjects, keyPropertyName, valuePropertyName);
console.log("Object with specified key-value pairs:", resultObject);

