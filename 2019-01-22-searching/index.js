function binarySearch(array, value) {
    var mid, 
        low = 0,
        high = array.length - 1;

    while(low <= high) {
        mid = Math.floor((low + high) / 2);
        if(array[mid] === value) {
            return mid;
        } else if(array[mid] < value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

const arr = [2,5,8,9,13,45,67,99];

console.log(binarySearch(arr, 67));