function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index where the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}

// Example usage:
const array = [10, 23, 45, 70, 11, 15];
const target = 45;
const index = linearSearch(array, target);

console.log(index !== -1 ? `Element found at index: ${index}` : 'Element not found');