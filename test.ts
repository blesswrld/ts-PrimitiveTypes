// Объект с конфигом сервера
// Фиксируем Литералы для ключей
// Делаем аннотацию типа для строгой передачи данных
const serverNewConfig: BasicConfig = {
    protocol: "http",
    port: 3001,
};

// Делаем аннотацию типа для строгой передачи данных
const backupConfig: BasicConfig = {
    protocol: "http",
    port: 3000,
};

// Интерфейс для описания свойств
interface BasicConfig {
    protocol: string;
    port: number;
}

// Передаем объект интерфейса со свойствами в виде аргумента
const startNewServer = (config: BasicConfig): "Server started" => {
    // Выше фиксируем Литерал (строку для возврата)
    console.log(`Server started on ${config.protocol}://server:${config.port}`); // Выводим в консоль сообщения об успешном запуске сервера

    return "Server started"; // Возвращаем указанную строку
};

// Вызов функции
startNewServer(serverNewConfig);
startNewServer(backupConfig);
