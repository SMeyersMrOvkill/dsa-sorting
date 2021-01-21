function sortBinary(arr) {
    const zeroes = [];
    const ones = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            zeroes.push(0);
        } else {
            ones.push(1);
        }
    }
    return [...zeroes, ...ones];
}

console.log(sortBinary([0, 1, 1, 0, 1, 0, 1, 1]));
console.log(sortBinary([]));
console.log(sortBinary([1]));
console.log(sortBinary([1, 1, 1, 0, 0, 0]));
console.log(sortBinary([1, 1, 1, 1]))