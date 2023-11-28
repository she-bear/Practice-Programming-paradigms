const n = 11;

// Cтруктурная парадигма (исполняется последовательно, нет goto, исполняемый блок: цикл)
console.log(`Structural paradigm:`);

for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
        console.log(`${j} * ${i} = ${i * j}` + "\n");
    }
}

// Процедурная парадигма (код обернут в процедуру для последующего использования - более высокий уровень абстракции)
console.log(`Procedural paradigm:`);

function getMultiplicationTable(n) {
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= n; i++) {
            console.log(`${j} * ${i} = ${i * j}` + "\n");
        }
    }
}

getMultiplicationTable(n);
