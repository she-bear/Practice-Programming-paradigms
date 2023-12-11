function binarySearch(array, number) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let current = Math.floor((start + end) / 2);

        if (array[current] === number) {
            return current;
        } else if (array[current] < number) {
            start = current + 1;
        } else {
            end = current - 1;
        }
    }

    return -1;
}

inArray = [-1, 0, 5, 10, 15, 20, 105];

number = 105;
console.log(`index = ${binarySearch(inArray, number)}`);

number = 35;
console.log(`index = ${binarySearch(inArray, number)}`);
