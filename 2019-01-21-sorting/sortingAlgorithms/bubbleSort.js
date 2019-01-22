function bubbleSort(arr) {
    var result = arr;
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < result.length - 1; i++) {
            if (result[i] > result[i + 1]) {
                var temp = result[i];
                result[i] = result[i + 1];
                result[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return result;
}
module.exports = bubbleSort;