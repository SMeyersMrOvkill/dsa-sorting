const sort = require('./sort');

let arr1 = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

console.log('Bubble Sort: ', sort.bubbleSort(arr1));
console.log('Merge Sort: ', sort.mergeSort(arr1));
console.log('Quick Sort: ', sort.quickSort(arr1));