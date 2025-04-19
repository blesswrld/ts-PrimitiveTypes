let msg: "Hello" = "Hello"; // Фиксируем значение (Литерал)

msg = "Hello"; // Передаём фиксированное значение

// Объекты со свойствами литерального типа
// type Config = { protocol: "http" | "https"; port: 3000 | 3001 };
// Создаем интерфейс
interface Config {
    protocol: "http" | "https";
    port: 3000 | 3001;
    log: (msg: string) => void;
}
// type Role = {
//     role: string;
// };

// // Оператор пересечения & отвечает за объеденение двух литеральных типов в одном объекте
// type ConfigWithRole = Config & Role;

interface Role {
    role: string;
}

// Создаем новый интерфейс ConfigWithRole который наследует свойства из Config, Role
interface ConfigWithRole extends Config, Role {}

// Объект с конфигом сервера
// Фиксируем Литералы для ключей
const serverConfig: ConfigWithRole = {
    protocol: "https",
    port: 3001,
    role: "admin",
    log: (msg: string): void => console.log(msg),
};

// const backupConfig: ConfigWithRole = {
//     protocol: "http",
//     port: 3000,
//     role: "admin",
// };

// Аннотация функции с литералами
type StartFunction = (
    protocol: "http" | "https",
    port: 3000 | 3001,
    log: (msg: string) => void // Говорим что свойство log не возвращает ничего
) => string;

// Функция принимает аннотацию типов для ключей protocol, port
const startServer: StartFunction = (
    // => Фиксируем тип данных string
    protocol: "http" | "https",
    port: 3000 | 3001,
    log: (msg: string) => void // Новый аргумент
): "Server started" => {
    // Выше фиксируем Литерал (строку для возврата)
    log(`Server started on ${protocol}://server:${port}`); // Выводим в консоль сообщения об успешном запуске сервера

    return "Server started"; // Возвращаем указанную строку
};

// Вызов функции
startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

// Индексные свойства

interface Styles {
    // Описываем свойства
    [key: string]: string; // Фиксируем тип данных string
}

// Переменная со стиля (для примера)
// Передаем интерфейс Styles (для передачи свойств)
const styles: Styles = {
    position: "absolute",
    top: "20px",
    left: "50px",
};

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
