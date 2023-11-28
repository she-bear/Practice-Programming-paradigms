const array = [25, 7, -1, 114, 38, 14, 0];

// Императивный стиль (воспользуемся готовым алгоритмом быстрой сортировки: https://habr.com/ru/articles/490304/)
console.log(`Imperative style:`);

function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (pivot < arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(array));

// Декларативный стиль
console.log(`Declarative style:`);

function sort(arr) {
    arr.sort((a, b) => b - a);
}

sort(array);
console.log(array);
