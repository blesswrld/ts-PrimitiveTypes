let msg: "Hello" = "Hello"; // Фиксируем значение (Литерал)

msg = "Hello"; // Передаём фиксированное значение

// Объекты со свойствами литерального типа
// type Config = { protocol: "http" | "https"; port: 3000 | 3001 };
// Создаем интерфейс --- Префикс I - это Венгерская нотация (соглашение об именовании переменных, констант и прочих идентификаторов в коде программ.) ---

interface IConfig {
    protocol: "http" | "https";
    port: 3000 | 3001;
    log: (msg: string) => void;
}

// type Role = {
//     role: string;
// };

// // Оператор пересечения & отвечает за объеденение двух литеральных типов в одном объекте
// type ConfigWithRole = Config & Role;

interface IRole {
    role: string;
}

interface IConfig {
    date: Date;
}

// Создаем новый интерфейс ConfigWithRole который наследует свойства из Config, Role
interface IConfigWithRole extends IConfig, IRole {}

// Объект с конфигом сервера
// Фиксируем Литералы для ключей
const serverIConfig: IConfigWithRole = {
    protocol: "https",
    port: 3001,
    role: "admin",
    log: (msg: string): void => console.log(msg),
    date: new Date(),
};

// const backupConfig: ConfigWithRole = {
//     protocol: "http",
//     port: 3000,
//     role: "admin",
// };

// Аннотация функции с литералами
type StartIFunction = (
    protocol: "http" | "https",
    port: 3000 | 3001,
    log: (msg: string) => void // Говорим что свойство log не возвращает ничего
) => string;

// Функция принимает аннотацию типов для ключей protocol, port
const startIServer: StartIFunction = (
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
startIServer(serverIConfig.protocol, serverIConfig.port, serverIConfig.log);

// Индексные свойства

interface IStyles {
    // Описываем свойства
    [key: string]: string; // Фиксируем тип данных string
}

// Переменная со стиля (для примера)
// Передаем интерфейс Styles (для передачи свойств)
const styles: IStyles = {
    position: "absolute",
    top: "20px",
    left: "50px",
};

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
