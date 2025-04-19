// Определяем Union-тип
type Protocol = "http" | "https";

// Тип для конфигурации. Использует `Protocol` и литеральный Union-тип для портыа
type Config = {
    protocol: Protocol;
    port: 3000 | 3001;
};

// Простой тип для роли
type Role = {
    role: string;
};

// Создаем новый тип, комбинируя `Config` и `Role` с помощью Intersection-типа (`&`)
// Объект содержит все свойства из `Config` И `Role`
type ConfigWithRole = Config & Role;

// Создаем объект, соответствующий объединенному типу `ConfigWithRole`
const serverConfig: ConfigWithRole = {
    protocol: "https",
    port: 3001,
    role: "admin",
};

// Функция для запуска сервера
const startServer = (
    protocol: "http" | "https",
    port: 3000 | 3001
    // Функция *всегда* возвращает строковый литерал 'Server started'. Это тоже тип!
): "Server started" => {
    // Выводим сообщение о запуске в консоль.
    console.log(`Server started on ${protocol}://server:${port}`);

    // Возвращаем строго определенное значение
    return "Server started";
};

// Вызываем функцию
startServer(serverConfig.protocol, serverConfig.port);
