// Глобальная переменная типа unknown
let smth: unknown;

smth = "str";

/* let data: string[] = smth;
data.find((e) => e); */ // будет ошибка тк тип переменной неопределен (unknown)

// const someValue: unknown = 10;
// someValue.method();

function fetchData(data: unknown): void {
    // Сужаем типы для примерного понимания с каким типом нужно работать
    // Условие для проверки типа
    if (typeof data === "string") {
        console.log(data.toLowerCase); // Если строка вызываем метод toLowerCase()
    }
}

// JSON объект
const userData =
    '{"isBirthdayData": true, "ageData:": 40, "userNameData": "John"}';

function safeParse(s: string): unknown {
    return JSON.parse(s);
}

const data = safeParse(userData);

// Функция для распарса JSON объекта userData
function transferData(d: unknown): void {
    // Проверяем тип данных строк
    if (typeof d === "string") {
        console.log(d.toLowerCase());
    } else if (typeof d === "object" && d) {
        console.log(data);
    } else {
        console.error("Some Error");
    }
}

// Вызов функции
transferData(data);

/* try {
    if (1) {
        // Выбрасываем ошибку
        throw new Error("error");
    }
} catch (e) {
    // Сужаем типы с помощью instanceof
    if (e instanceof Error) {
        console.log(e.message);
    } else if (typeof e === "string") {
        console.log(e);
    }
} */

// Union Типы |
type T0 = any | unknown; // any перекрывает unknown
type T1 = number | unknown; // unknown перекрывает number

// Типы пересечения &
type T2 = any & unknown; // any перекрывает unknown
type T3 = number & unknown; // number перекрывает unknown

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
