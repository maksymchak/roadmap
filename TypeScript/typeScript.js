TypeScript

1. Установка, начало
2. Basic types

/******************************************************************************************/

/*========================== Установка, начало  =============================*/

TypeScript - Java Script, который масштабируеться. В основном служит для создания сложных и 
 массивных приложений. Нужен только на этапе разработки.

В Java Script изначально была заложения динамическая типизацыя. Это означает, что любой переменной 
  любого типа можно присвоить другой тип.

Когда язык програмирования поддержывает статическую типизацыю - это означает, что качество кода 
  увиличиваеться и на этапе разработки можно отлавливать большое количество ошибок. Это очень упрощает
  работу в команде и разработку больших проэктов.

Установка TypeScript:
// https://www.npmjs.com/package/typescript

Чтобы скомпилировать файл:
// tsc fileName

/*========================== Basic types =============================*/

Boolean
// const isFetching: boolean = true;
// const isLoading: boolean = false;


Number
// const int: number = 42;
// const float: number = 4.2;
// const num: number = 3e10;


String
// const message: string = 'Hello Typescript'


Array
Массив из чисел
// const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];

Еще один способ указания типа для массива - так называемый generic types
//const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

Массив из строк
// const words: string[] = ['Hello', 'Typescript']

Tuple - для разных типов данных в массиве
const contact: [string, number] = ['Vladilen', 1234567]


Any
// В данном случае можно переопределять тип
// let variable: any = 42
// variable = 'New String'
// variable = []


Function
// Для функций, которые ничего не возвращают - можно указывать явный тип данных

// function sayName(name: string): void {
//   console.log(name);
// }
// sayName("Hello!");

Never - для ф-ций, которые возвращают ошибку или постоянно что-нибудь делают.
// function throwError(message: string): never {
//   throw new Error(message);
// }

// function infinite(): never {
//   while (true) {}
// }


Type
// Конструкция для создания своих сообственных типов (Елиосы).

// type Login = string
// const login: Login = 'admin'

// Или
// type ID = string | number
// const id1: ID = 1234
// const id2: ID = '1234'