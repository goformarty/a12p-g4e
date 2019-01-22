const {
    performance
} = require('perf_hooks');

const bubbleSort = require('./sortingAlgorithms/bubbleSort');
const selectionSort = require('./sortingAlgorithms/selectionSort');
const insertionSort = require('./sortingAlgorithms/insertionSort');
const mergeSort = require('./sortingAlgorithms/mergeSort');


const stringify = require('csv-stringify');
const fs = require ('fs');
let data = createRandomArray(100, 300);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function createRandomArray(length, max) {
    randomArray = [];
    for (var i = 0; i < length; i++) {
        randomArray.push(getRandomInt(max))
    }
    return randomArray;
}

function doSort(sortFunction) {
    var t0 = performance.now();
    sortFunction;
    var t1 = performance.now();
    var t = t1 - t0;

    console.log('time: ' + t + 'ms');
}

console.log('bubble sort')
doSort(bubbleSort(data));

console.log('selection sort')
doSort(selectionSort(data));

console.log('insertion sort')
doSort(insertionSort(data));

console.log('merge sort')
doSort(mergeSort(data));

