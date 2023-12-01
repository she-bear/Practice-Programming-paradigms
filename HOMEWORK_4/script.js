// результат проверялся на сайте: https://planetcalc.ru/527/
// изучение термина по ссылке: https://statpsy.ru/pearson/primer-pearson/

function pearson(x, y) {
    // вычисляем среднее арифметическое
    let average = (array) => { return array.reduce((s, a) => s + a, 0) / array.length };
    let n = x.length, prom_x = average(x), prom_y = average(y);
    return (x.map((e, i, r) => (r = { x: e, y: y[i] })).reduce((s, a) => s + a.x * a.y, 0) - n * prom_x * prom_y) /
        ((Math.sqrt(x.reduce((s, a) => (s + a * a), 0) - n * prom_x * prom_x)) *
            (Math.sqrt(y.reduce((s, a) => (s + a * a), 0) - n * prom_y * prom_y)));
}

const a1 = [1, 20, 3]
const a2 = [4, 5, 6]

console.log(pearson(a1, a2));

// использование готовой библиотеки: npm install calculate-correlation
// для запуска node .\script.js
/* 
const calculateCorrelation = require("calculate-correlation");
const correlation = calculateCorrelation(a1, a2);
console.log(correlation);
*/
