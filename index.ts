let msg: "Hello" = "Hello"; // Фиксируем значение (Литерал)

msg = "Hello"; // Передаём фиксированное значение

// Объекты со свойствами литерального типа
type Config = { protocol: "http" | "https"; port: 3000 | 3001 };
type Role = {
    role: string;
};

// Оператор пересечения & отвечает за объеденение двух литеральных типов в одном объекте
type ConfigWithRole = Config & Role;

// Объект с конфигом сервера
// Фиксируем Литералы для ключей
const serverConfig: ConfigWithRole = {
    protocol: "https",
    port: 3001,
    role: "admin",
};

const backupConfig: ConfigWithRole = {
    protocol: "http",
    port: 3000,
    role: "admin",
};

// Функция принимает аннотацию типов для ключей protocol, port
const startServer: (protocol: "http" | "https", port: 3000 | 3001) => string = (
    // => Фиксируем тип данных string
    protocol: "http" | "https",
    port: 3000 | 3001
): "Server started" => {
    // Выше фиксируем Литерал (строку для возврата)
    console.log(`Server started on ${protocol}://server:${port}`); // Выводим в консоль сообщения об успешном запуске сервера

    return "Server started"; // Возвращаем указанную строку
};

// Вызов функции
startServer(serverConfig.protocol, serverConfig.port);

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
