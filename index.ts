const testOne: null = null; // Фиксируем примитивный тип данных null и присваем ему ТОЛЬКО null
const testTwo: any = null; // null - частный случай any, поэтому может присваиваться к any
const testThree: string = null;
const testFour: number = null;

const testFive: undefined = undefined; // // Фиксируем примитивный тип данных undefined и присваем ему undefined
const testSix: any = undefined; // undefined может присваиваться типу any
const testSeven: string = undefined; // типу string нельзя присвоить значение undefined

let smth; // any (любое значение)

function getRndData() {
    if (Math.random() < 0.5) {
        return null; // Возвращаем null если условие true
    } else {
        return "   Some data   "; // Иначе возвращаем строку ---   Some data   ---
    }
}

const data = getRndData(); // Результат функции помещаем в переменную data
const trimmedData = data ? data.trim() : null; // Делаем проверку data ? если такая переменная существует, используем метод .trim() : или возвращаем null

// --- Тип Null является подтипом всех типов, за исключением типа Undefined, поэтому его единственное значение null совместимо со всеми остальными типами данных.

// class TypeSystem {
//   static any: any = null; // Ok
//   static number: number = null; // Ok
//   static string: string = null; // Ok
//   static boolean: boolean = null; // Ok
//   static undefined: undefined = null; // Ok
//   static null: null = null; // Ok
// } ---
