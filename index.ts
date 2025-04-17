// let msg: "Hello" = "Hello"; // Фиксируем значение (Литерал)

// msg = "Hello World"; // Будет ошибка тк значение переменной фиксированное

// Переменные со значениями портов
const port3000: number = 3000; // Фиксируем тип данных number
const port3001: number = 3001;

// Функция которая принимает аргументы protocol, port, со значениями "http" | "https" и 3000 | 3001 (Union-Типы)
function startServer(
    protocol: "http" | "https",
    port: 3000 | 3001
    // Ниже фиксируем строку которая должна вернуться
): "Server started" {
    // Условие для проверки портов
    if (port === port3000 || port === port3001) {
        console.log(`Server started on ${protocol}://server:${port}`); // Если хотя бы один порт существует, выводим в консоль сообщения об успешном запуске сервера
    } else {
        console.error("Invalid port"); // Выводим ошибку
    }

    return "Server started"; // Возвращаем указанную строку
}

startServer("https", 3001);

// type aliases (Псевдонимы типов)
type AnimationTimingFunc = "ease" | "ease-out" | "ease-in"; // Литералы (значения для нашей CSS3 анимации)
type AnimationID = string | number; // Union-Типы

// Функция которая принимает аргумент id типа string | number (Union-Типы)
function createAnimation(
    id: AnimationID, // Перебираем id анимации из типа псевдонимов
    animName: string, // Фиксируем тип данных string

    timingFunc: AnimationTimingFunc = "ease", // Union-Типы
    // Перебираем все анимации из типа псевдонимов, и в конечном итоге выводим фиксированное значение (Литерал) как дефолтное значение
    duration: number,
    iterCount: "infinite" | number // Union-Типы
) {
    // const elem = document.getElementById(`#${id}`) as HTMLElement; // Инициализируем переменную elem как ХТМЛ элемент
    // Условие для проверки elem
    // if (elem) {
    console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`); // Выводим анимацию в консоль
    // Если элемент существует, применяем на нем анимации CSS3
    // // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
    // }
}

// Вызов функции со значениями анимации
createAnimation("id", "fade", "ease", 3, "infinite");

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
