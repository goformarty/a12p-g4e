function insertionSort(arr) {
    var result = arr;
    for (var i = 0; i < result.length; i++) {
        for (var j = i; j > 0; j--) {
            if (result[j] < result[j - 1]) {
                swap(result, j, j - 1);
            } else {
                break;
            }
        }
    }
    return result;
}

module.exports = insertionSort;