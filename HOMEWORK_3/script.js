const cell = document.querySelectorAll(".cell");
const message = document.querySelector(".message");
const button = document.querySelector('.button');
let turn = 0;

button.addEventListener('click', reload);

function reload() {
    location.reload();
}

// индексируем ячейки
cell.forEach((item, index) => {
    item.textContent = index;
});

// ход игрока
function setTurn(e) {
    const cell = e.target;
    // отслеживаем последовательность хода
    if (turn % 2 == 0) {
        cell.textContent = "X";
        cell.style.color = "black";
        turn++;
        checkVictory();
    } else {
        cell.textContent = "O";
        cell.style.color = "black";
        turn++;
        checkVictory();
    }
}

cell.forEach((element) => {
    element.addEventListener("click", setTurn, { once: true });
});

// выявление победителя или ничьей
function checkVictory() {
    const field = Array.from(cell);
    if (
        (field[0].textContent == field[1].textContent &&
            field[1].textContent == field[2].textContent) ||
        (field[3].textContent == field[4].textContent &&
            field[4].textContent == field[5].textContent) ||
        (field[6].textContent == field[7].textContent &&
            field[7].textContent == field[8].textContent) ||
        (field[0].textContent == field[3].textContent &&
            field[3].textContent == field[6].textContent) ||
        (field[1].textContent == field[4].textContent &&
            field[4].textContent == field[7].textContent) ||
        (field[2].textContent == field[5].textContent &&
            field[5].textContent == field[8].textContent) ||
        (field[0].textContent == field[4].textContent &&
            field[4].textContent == field[8].textContent) ||
        (field[2].textContent == field[4].textContent &&
            field[4].textContent == field[6].textContent)
    ) {
        (turn % 2 == 0)
            ? message.textContent = "O win!"
            : message.textContent = "X win!";

        cell.forEach((element) => {
            element.removeEventListener("click", setTurn);
        });
        // ничья, ходы закончены
    } else if (turn === 9) {
        message.textContent = "Standoff!";
    }
}
