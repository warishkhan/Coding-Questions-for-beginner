// Write a function to find the maximum element in an array.

function findMax(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let maxElement = arr[0]; // Assume the first element is the maximum
    for (let i = 1; i < arr.length; i++) { // Iterate from the second element
        if (arr[i] > maxElement) { // If current element is greater than current max
            maxElement = arr[i]; // Update maxElement
        }
    }
    return maxElement;
}



// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Maximum element:", findMax(array));


// Write a function to find the minimum element in an array.

function finMin(arr){
    if (arr.length === 0) {
        return null; // Return null for empty array
    }

    let minElement = arr[0]
    for (let i = 1; i < arr.length; i++) { // Iterate from the second element
        if (arr[i] < minElement) { // If current element is greater than current max
            minElement = arr[i]; // Update maxElement
        }
    }

    return minElement;

}

// console.log("Manimum element:", finMin(array));

// Write a function to calculate the sum of all elements in an array.

function calculateSum(arr) {
    let sum = 0; // Initialize sum to 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add each element to the sum
    }
    return sum;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Sum of all elements:", calculateSum(array));

// Write a function to reverse an array.

function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

// Example usage:
// console.log("Original array:", array);
// console.log("Reversed array:", reverseArray(array));

// Without Using Built-in method

function reverseArray(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    
    while (leftIndex < rightIndex) {
        // Swap elements at leftIndex and rightIndex
        let temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
        
        // Move to the next pair of elements
        leftIndex++;
        rightIndex--;
    }
    return arr;
}

// Example usage:
// console.log("Original array:", array);
// console.log("Reversed array:", reverseArray(array));


function myReversed(arr){
let newArr =[]
for (let index = arr.length - 1; index >= 0; index--) {
     newArr[(arr.length - 1) -index ] = arr[index];
    
}
return newArr;
}

// console.log("Reversed array:", myReversed(array));

// Write a function to check if an array contains a specific element.

function containsElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true; // Element found
        }
    }
    return false; // Element not found
}

// Example usage:
// const array = [1, 2, 3, 4, 5];
// const elementToFind = 3;
// console.log("Array:", array);
// console.log("Element to find:", elementToFind);
// console.log("Does the array contain the element?", containsElement(array, elementToFind));


// Write a function to remove duplicate elements from an array.

function removeDuplicates(arr) {
    const uniqueElements = {}; // Use an object to keep track of unique elements
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueElements[arr[i]]) {
            result.push(arr[i]); // If element is not already in uniqueElements, add it to result
            uniqueElements[arr[i]] = true; // Mark element as seen
        }
    }
    
    return result;
}

// Example usage:
// const array1 = [1, 2, 2, 3, 4, 4, 5];
// console.log("Original array:", array1);
// console.log("Array after removing duplicates:", removeDuplicates(array1));


// function removeDuplicates(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 isDuplicate = true;
//                 break; // Exit inner loop if duplicate is found
//             }
//         }
//         if (!isDuplicate) {
//             result.push(arr[i]); // Add element to result if it's not a duplicate
//         }
//     }
//     return result;
// }

// Example usage:
// const array2 = [1, 2, 2, 3, 4, 4, 5];
// console.log("Original array:", array2);
// console.log("Array after removing duplicates:", removeDuplicates(array2));


// Write a function to sort an array in ascending order.

function sortAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// Example usage:
// const array3 = [3, 1, 5, 2, 4];
// console.log("Original array:", array3);
// console.log("Sorted array in ascending order:", sortAscending(array3));

// function bubbleSort(arr) {
//     const length = arr.length;
//     for (let i = 0; i < length - 1; i++) {
//         for (let j = 0; j < length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Swap elements if they are in the wrong order
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// Example usage:
// const array = [3, 1, 5, 2, 4];
// console.log("Original array:", array);
// console.log("Sorted array in ascending order:", bubbleSort(array));

// Write a function to sort an array in descending order.

function bubbleSort(arr) {
        const length = arr.length;
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (arr[j] < arr[j + 1]) {
                    // Swap elements if they are in the wrong order
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

//     const array = [3, 1, 5, 2, 4];
// console.log("Original array:", array);
// console.log("Sorted array in ascending order:", bubbleSort(array));

// Write a function to find the index of a specific element in an array.

function findIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i; // Return index if element is found
        }
    }
    return -1; // Return -1 if element is not found
}

// Example usage:
// const array = [3, 1, 5, 2, 4];
// const elementToFind = 5;
// console.log("Array:", array);
// console.log("Element to find:", elementToFind);
// console.log("Index of element:", findIndex(array, elementToFind));

// Write a function to find the frequency of a specific element in an array.

function findFrequency(arr, element) {
    let frequency = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            frequency++; // Increment frequency if element is found
        }
    }
    return frequency;
}

// Example usage:
// const array = [3, 1, 5, 2, 4, 3, 5, 5];
// const elementToFind = 5;
// console.log("Array:", array);
// console.log("Element to find:", elementToFind);
// console.log("Frequency of element:", findFrequency(array, elementToFind));



// Write a function to remove a specific element from an array.

// function removeElement(arr, element) {
//     return arr.filter(item => item !== element);
// }

// // Example usage:
// const array = [3, 1, 5, 2, 4];
// const elementToRemove = 5;
// console.log("Original array:", array);
// console.log("Element to remove:", elementToRemove);
// console.log("Array after removal:", removeElement(array, elementToRemove));

function removeElement(arr, element) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== element) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Example usage:
// const array = [3, 1, 5, 2, 4];
// const elementToRemove = 5;
// console.log("Original array:", array);
// console.log("Element to remove:", elementToRemove);
// console.log("Array after removal:", removeElement(array, elementToRemove));

// Write a function to merge two arrays.

function mergeArrays(arr1, arr2) {
    // Concatenate both arrays
    return arr1.concat(arr2);
}

// Example usage:
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// console.log("Array 1:", array1);
// console.log("Array 2:", array2);
// console.log("Merged array:", mergeArrays(array1, array2));


function mergeArrays(arr1, arr2) {
    let mergedArray = [];
    // Push elements of arr1 into mergedArray
    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }
    // Push elements of arr2 into mergedArray
    for (let i = 0; i < arr2.length; i++) {
        mergedArray.push(arr2[i]);
    }
    return mergedArray;
}

// Example usage:
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// console.log("Array 1:", array1);
// console.log("Array 2:", array2);
// console.log("Merged array:", mergeArrays(array1, array2));

// Write a function to split an array into chunks of a specific size.

function chunkArray(arr, chunkSize) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
}

// Example usage:
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const chunkSize = 3;
// console.log("Original array:", array);
// console.log("Chunks of size", chunkSize, ":", chunkArray(array, chunkSize));


// Write a function to find the difference between two arrays.

function arrayDifference(arr1, arr2) {
    const difference = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            difference.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            difference.push(arr2[i]);
        }
    }
    return difference;
}

// Example usage:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log("Array 1:", array1);
// console.log("Array 2:", array2);
// console.log("Difference:", arrayDifference(array1, array2));



// Write a function to find the intersection of two arrays.

function arrayIntersection(arr1, arr2) {
    const intersection = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
            intersection.push(arr1[i]);
        }
    }
    return intersection;
}

// Example usage:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log("Array 1:", array1);
// console.log("Array 2:", array2);
// console.log("Intersection:", arrayIntersection(array1, array2));


// Write a function to find the union of two arrays.

function arrayUnion(arr1, arr2) {
    const union = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!union.includes(arr1[i])) {
            union.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!union.includes(arr2[i])) {
            union.push(arr2[i]);
        }
    }
    return union;
}

// Example usage:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log("Array 1:", array1);
// console.log("Array 2:", array2);
// console.log("Union:", arrayUnion(array1, array2));


// Write a function to rotate an array to the right by a given number of steps.

function rotateRight(arr, steps) {
    const length = arr.length;
    const rotationSteps = steps % length; // Calculate effective rotation steps
    const rotatedArray = [];
    for (let i = 0; i < length; i++) {
        const newIndex = (i + length - rotationSteps) % length; // Calculate new index after rotation
        rotatedArray[newIndex] = arr[i];
    }
    return rotatedArray;
}

// Example usage:
// const array = [1, 2, 3, 4, 5];
// const steps = 2;
// console.log("Original array:", array);
// console.log("Rotated array:", rotateRight(array, steps));


// Write a function to rotate an array to the left by a given number of steps.

function rotateLeft(arr, steps) {
    const length = arr.length;
    const rotationSteps = steps % length; // Calculate effective rotation steps
    const rotatedArray = [];
    for (let i = 0; i < length; i++) {
        const newIndex = (i + rotationSteps) % length; // Calculate new index after rotation
        rotatedArray[newIndex] = arr[i];
    }
    return rotatedArray;
}

// Example usage:
// const array = [1, 2, 3, 4, 5];
// const steps = 2;
// console.log("Original array:", array);
// console.log("Rotated array:", rotateLeft(array, steps));

// Write a function to find the second largest element in an array.

function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two elements";
    }
    
    let largest = arr[0];
    let secondLargest = -Infinity;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    
    if (secondLargest === -Infinity) {
        return "There is no second largest element";
    }
    
    return secondLargest;
}

// Example usage:
// const array = [3, 1, 5, 9, 2, 7, 6];
// console.log("Array:", array);
// console.log("Second largest element:", findSecondLargest(array));

// Write a function to find the second smallest element in an array.

function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two elements";
    }
    
    let smallest = arr[0];
    let secondSmallest = Infinity;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }
    
    if (secondSmallest === Infinity) {
        return "There is no second smallest element";
    }
    
    return secondSmallest;
}

// Example usage:
const array = [3, 1, 5, 2, 9, 4, 7];
console.log("Array:", array);
console.log("Second smallest element:", findSecondSmallest(array));







