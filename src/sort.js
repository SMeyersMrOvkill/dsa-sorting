function swap(arr, x, y) {
    const tmp = arr[x];
    arr[x] = arr[y];
    arr[y] = tmp;
}

function bubbleSort(arr) {
    let swaps = 0;
    for(let i = 0; i < arr.length-1; i++) {
        if(arr[i] > arr[i+1]) {
            swap(arr, i, i+1);
            swaps++;
        }
    }
    if(swaps > 0) {
        return bubbleSort(arr);
    }
    return arr;
}

function merge(left, right, arr) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            arr[outputIndex++] = left[leftIndex++];
        } else {
            arr[outputIndex++] = right[rightIndex++];
        }
    }
    for(let i = leftIndex; i < left.length; i++) {
        arr[outputIndex++] = left[i];
    }
    for(let i = rightIndex; i < right.length; i++) {
        arr[outputIndex++] = right[i];
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, arr);
}

function partition(arr, start, end) {
    const pivot = arr[end-1];
    let x = start;
    for(let i = start; i < end-1; i++) {
        if(arr[i] <= pivot) {
            swap(arr, i, x);
            x++;
        }
    }
    swap(arr, end-1, x);
    return x;
}

function quickSort(arr, start=0, end=arr.length) {
    if(start >= end) {
        return arr;
    }
    const middle = partition(arr, start, end);
    arr = quickSort(arr, start, middle);
    arr = quickSort(arr, middle+1, end);
    return arr;
}

module.exports = {
    bubbleSort,
    mergeSort,
    quickSort
}