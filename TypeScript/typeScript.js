TypeScript

1. Установка, начало
2. Basic types
3. Interfaces
4. Enum
5. Functions
6. Classes
7. Generics 

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

// Или |
// type ID = string | number
// const id1: ID = 
// const id2: ID = '1234'

// type SomeType = string | null | undefined

/*========================== Interfaces =============================*/

Интерфейс определяет свойства и методы, которые объект должен реализовать. 
  Другими словами, интерфейс - это определение кастомного типа данных, но без реализации.

  interface Rect {
      readonly id: string; //readonly - означает, что модификатор только для чтения
      color?: string; //? - означает, что параметр не обьязательный 
      size: {
        width: number
        height: number
      }
  }
/*
  const rect1: Rect = {
    id: '1234',
    size: {
      width: 20,
      height: 30
    },
    color: '#ccc'
  }

  const rect2: Rect = {
    id: '12345',
    size: {
      width: 10,
      height: 5
    }
  }

  rect2.color = 'black'
*/

const rect3 = {} as Rect
const rect4 = <Rect>{}
// =========================

Интерфейс, который наследует интерфейс

interface RectWidthArea extends Rect {
  getArea: () => number  //number - в данном случае тип, который должен будет быть возвращен
}

// const rect5: RectWidthArea = {
//   id: '123',
//   size: {
//     width: 20,
//     height: 20
//   },
//   getArea():number {
//     return this.size.width * this.size.height
//   }
// }

// ============

Класс который имплементируеться от интерфейса

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

// ============

Для CSS

/*
interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}
*/

/*========================== Enum =============================*/

Enum: перечисления
Тип enum предназначен для описания набора числовых данных с помощью 
  строковых констант. 

/*  
  enum Membership {
    Simple,
    Standart,
    Premium
  }

  const membership = Membership.Standart
  const membershipReverse = Membership[2]

  console.log(membership) //1
  console.log(membershipReverse) // Premium
*/

/*
  emum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
  }

  const social = SocialMedia.INSTAGRAM
  console.log(social) // INSTAGRAM
*/

/*========================== Functions =============================*/

Функция, которая в качестве параметров принимает два параметра типа number и
  возвращает тоже number.
  // function add(a: number, b: number): number {
  //   return a + b
  // }

Функция, которая в качестве параметра принимает параметр типа string и
  возвращает тоже string.
  // function toUpperCase(str: string): string {
  // return str.trim().toUpperCase()
  // }

// ================

  interface MyPosition {
    x: number | undefined
    y: number | undefined
  }

  interface MyPositionWithDefault extends MyPosition {
    default: string
  }

  function position(): MyPosition
  function position(a: number): MyPositionWithDefault
  function position(a: number, b: number): MyPosition

  function position(a?: number, b?: number){
    if (!a && !b) {
      return {x: undefined, y: undefined}
    }

    if (a && !b) {
      return {x: a, y: undefined, default: a.toString}
    }

    return {x: a, y: b}
  }

  console.log('Empty: ', position()) // Empty: {x: undefined, y: undefined}
  console.log('One param: ', position(a: 42)) // One param: {x: 42, y: undefined, default: '42'}
  console.log('Two params: ', position(a: 10, b: 15)) // Two params: {x: 10, y: 15}

/*========================== Classes =============================*/

// class Car {
//   readonly numberOfWheels: number = 4
//   constructor(readonly model: string) {}
// }

Модификаторы доступа
В TypeScript три модификатора: public, protected и private.
Если к свойствам и функциям классов не применяется модификатор, то 
  такие свойства и функции расцениваются как будто они определены с 
  модификатором public. 

public
/*  
class User {
       
      name: string;
      year: number;
  }

Будет эквивалентно:
  class User {
       
      public name: string;
      public year: number;
  }
*/

private
Если же к свойствам и методам применяется модификатор private, 
  то к ним нельзя будет обратиться извне при создании объекта 
  данного класса.

Например, создадим класс с приватными свойствами и методами:

/*
class User {
    private _name: string;
    private _year: number;
 
    constructor(name: string, age: number) {
 
        this._name = name;
        this._year = this.setYear(age);
    }
    public displayYear(): void {
        console.log("Год рождения: " + this._year);
    }
 
    public displayName(): void {
        console.log("name: " + this._name);
    }
 
    private setYear(age: number): number {
 
        return new Date().getFullYear() - age;
    }
}
 
let tom = new User("Tom", 24);
tom.displayName();
tom.displayYear();
console.log(tom._name); // нельзя обратиться, так как _name - private
tom.setYear(45); // нельзя обратиться, так как функция - private
*/

protected
Модификатор protected во многом аналогичен private - свойства и методы 
  с данным модификатором не видны из вне, но к ним можно обратиться из 
  классов-наследников:

/*
class User {
    private name: string;
    protected age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public displayInfo(): void {
 
        console.log("name: " + this.name + "; age: " + this.age);
    }
}
class Employee extends User {
 
    private company: string;
    constructor(name: string, age: number, company: string) {
        super(name, age);
        this.company = company;
    }
    public showData(): void {
        console.log("Age: " + this.age);
        //console.log("Name: " + this.name); // не работает, так как name - private
    }
}
*/

/*========================== Generics =============================*/

Generic - это аргумент для типа. Как у функции есть аргумент, так и 
  у типа может быть аргумент.

/*
  const numberArray: Array<number> = [1, 1, 2, 3, 5, 8, 13];
  const numberArray2: Array<string> = ['dsaf', 'asfd'];

  // <T> - может работать с разными типами данных
  function reverse<T>(array: T[]): T[] {
    return array.reverse()
  }

  reverse(numberArray)
  reverse(numberArray2)
*/

Тип который будет состоять из ключей интерфейса Person, используя оператор keyof
/*
  interface Person {
    name: string
    age: number
  }

  type PersonKeys = keyof Person

  let key: PersonKeys = 'name'
  key = 'age'
  key = 'job' // Будет ошибка
*/

Создадим новый тип невключая некоторые параметры
/*
  type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
  }

  type UserKevsNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'

  let u1: UserKeysNoMeta1 = 'name'
*/



