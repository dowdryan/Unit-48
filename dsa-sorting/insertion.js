function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > value; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = value
    }
    return arr
}

module.exports = insertionSort;