function selectionSort(arr) {
    var result = arr;

    function swap(result, i, min) {
        var temp = result[i];
        result[i] = result[min];
        result[min] = temp;
    }

    for (var i = 0; i < result.length - 1; i++) {
        var min = i;

        for (var j = i + 1; j < result.length; j++) {
            if (result[j] < result[min]) {
                min = j;
            }
        }

        if (min !== i) {
            swap(result, i, min);
        }
    }
    return result;
}

module.exports = selectionSort;