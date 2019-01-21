function swap(result, i, min) {
    var temp = result[i];
    result[i] = result[min];
    result[min] = temp;
}

function mergeSort(arr) {
    var result = arr;
    if (result.length === 1) {
        return result;
    }

    var listA = mergeSort(result.slice(0, result.length / 2));
    var listB = mergeSort(result.slice(result.length / 2));

    var i = 0;
    var j = 0;

    var newList = [];

    while (i < listA.length || j < listB.length) {
        if (i !== listA.length && (listA[i] < listB[j] || j === listB.length)) {
            newList.push(listA[i]);
            i++;
        } else {
            newList.push(listB[j]);
            j++;
        }
    }
    return newList;
}

module.exports = mergeSort;