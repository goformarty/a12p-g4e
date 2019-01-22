//  binary search function that returns min, mid and max occurance of searched value

function binarySearch(array, value) {
    var mid,
        low = 0,
        high = array.length - 1;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        if (array[mid] === value) {
            let min = mid;
            let max = mid;

            // find the min occurance
            while (array[min - 1] === value) {
                min = min - 1;
            }

            // find the max occurance
            while ((arr[max + 1]) === value) {
                max = max + 1;
            }

            return {
                min: min,
                mid: mid,
                max: max
            };

        } else if (array[mid] < value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

const arr = [2, 5, 8, 9, 9, 9, 9, 13, 45, 67, 99];

console.log(binarySearch(arr, 9));