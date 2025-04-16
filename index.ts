let id: symbol = Symbol("id"); // Фиксируем тип данных symbol для глобальной переменной id

const data = {
    [id]: 1, // Присваиваем свойству id значение 1
};

console.log(data[id]); // Выводим в консоль значение переменной data

const numOne: bigint = 1n; // Фиксируем тип данных bigint и присваиваем ей значение в 1n
const numTwo: bigint = 2n;

console.log(numOne + numTwo); // Выводим в консоль результат сложения двух переменных
