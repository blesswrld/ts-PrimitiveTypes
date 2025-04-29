// Переменная со значениями стоимости воды и электр
const dataFromControl = {
    water: 200,
    el: 350,
};

// Функция для обработки значений из переменной
// Запрашиваем типы из dataFromControl
function checkReadings(data: typeof dataFromControl): boolean {
    const dataFromUser = {
        water: 200,
        el: 350,
    };

    // Условие для проверки электр и воды
    if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
        return true;
    } else return false;
}

// Переменная со значением числа ПИ
const PI = 3.14;
let PIClone: typeof PI; // Запрашиваем типы из PI
