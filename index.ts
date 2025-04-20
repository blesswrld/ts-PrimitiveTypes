// Переменная Union-Типа
type ValidAmount = "empty" | number;

// структура данных склада с одеждой

// Создаем интерфейс --- Префикс I - это Венгерская нотация (соглашение об именовании переменных, констант и прочих идентификаторов в коде программ.) ---
interface ClothesIWarehouse {
    jackets: ValidAmount;
    hats: ValidAmount;
    socks: ValidAmount;
    pants: ValidAmount;
}

// структура данных склада с канцтоварами

interface StationeryIWarehouse {
    scissors: ValidAmount;
    paper: "empty" | boolean;
}

// структура данных склада с бытовой техникой

interface AppliancesIWarehouse {
    dishwashers: ValidAmount;
    cookers: ValidAmount;
    mixers: ValidAmount;
}

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

interface TotalIWarehouse
    extends ClothesIWarehouse,
        StationeryIWarehouse,
        AppliancesIWarehouse {
    deficit: boolean;
    date: Date;
}

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

// Принимаем TotalWareHouse в виде аннотации
const totalData: TotalIWarehouse = {
    jackets: 5,
    hats: "empty",
    socks: "empty",
    pants: 15,
    scissors: 15,
    paper: true,
    dishwashers: 3,
    cookers: "empty",
    mixers: 14,
    deficit: true,
    date: new Date(),
};

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

function printReport(data: TotalIWarehouse): string {
    // 1. Получаем пары [ключ, значение] из ПЕРЕДАННОГО объекта 'data'
    const entries = Object.entries(data);

    // 2. Фильтруем, оставляя только те, где значение === "empty"
    const emptyEntries = entries.filter(([key, value]) => value === "empty");

    // Пример [ "hats: empty", "socks: empty" и тд ]

    // 3. Извлекаем только ключи (названия товаров)
    const emptyItemNames = emptyEntries.map(([key, value]) => key); // Пример emptyItemNames: [ 'hats', 'socks', 'cookers' ]

    // 4. Проверяем, есть ли такие товары
    if (emptyItemNames.length === 0) {
        // Если массив пуст - все хорошо
        return "Everything fine";
    } else {
        // Если массив не пуст - формируем строку
        const itemString = emptyItemNames.join(", ");
        return `We need this items: ${itemString}`;
    }
}

// Вывод в консоль
console.log(printReport(totalData));
// Пример: We need this items: hats, socks, cookers

// --- ЗАДАЧА ВЫПОЛНЕНА ---

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
