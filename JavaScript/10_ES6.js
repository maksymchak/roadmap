16. ES6
  - JS, ECMA-262, Babel
  - let и const
	- arrow-функции (this, default param, rest)
	- destructuring, spread operator
  - template strings
  - Objects
  - Prototypes ES6
  - Class
  - Модули
  - Symbol, iterators, generators

/**************************************** Test *********************************************/
1. Блок (JS, ECMA-262, Babel)
- Что такое js и его возможности ?
- Что такое ECMA-262 ?
- Что такое Babel ?

2. Блок (let и const)
- Переменная let, отличие от var ?
- Что такое const ?

3. Блок (arrow-функции (this, default param, rest))
- Написать arrow-функцию.
- Использовать arrow-функцию в качестве callback.
- Что можно сказать про arrow-функцию и this ?
- Что такое параметр по умолчанию ?
- Что такое Rest параметр ?

4. Блок (destructuring, spread operator )
- Что такое spread operator для массива ?
- Что такое spread operator для обьекта ?
- Что такое деструктуризация ?
- Показать деструктуризацию объекта.
- Использовать деструктуризацию объекта 
	с переиминованием свойств.
- Использовать деструктуризацию в параметрах.
- Использовать деструктуризацию и rest-параметр.
- Использовать деструктуризацию и массив?

5. Блок (template strings)
- Произвести операции с template strings ?

6. Блок (Objects)
- Использовать упрощенную запись присвоения свойств обьекту ?
- Использовать метод перезаписи обьектов

7. Блок (Prototypes ES6)
- Использовать метод setPrototypeOf 

8. Блок (Class)
- Что такое class ?
- Создать цепочку наследования при помощи class.
- Создать цепочку наследования с использованием super.
- Что такое Class properties ?

9. Блок (Модули)
- Использовать экспорт нескольких значений.
- Использовать экспорт c переиминованием.
- Использовать импорт всего что внутри.
- Использовать экспорт default, использовать импорт микс.
- Использовать импорт файла, использовать импорт библиотеки

10. Блок (Symbol, iterators, generators)
- Что такое Symbol ?
- Пример ииспользования Symbol.
- Что такое iterator ?
- Что такое generators ?

/******************************************************************************************/


/*================================= js, ECMA-262 ===================================================*/
 
JavaScript – это язык программирования общего назначения.

JavaScript изначально создавался для того, чтобы сделать web-странички «живыми». 
	Программы на этом языке называются скриптами.

Возможности:
- Создавать новые HTML-теги, удалять существующие, менять стили элементов, прятать, 
	показывать элементы и т.п.
- Реагировать на действия посетителя, обрабатывать клики мыши, перемещения курсора, 
  нажатия на клавиатуру и т.п.
- Посылать запросы на сервер и загружать данные без перезагрузки страницы (эта технология 
	называется "AJAX").
- Получать и устанавливать cookie, запрашивать данные, выводить сообщения…
- …и многое, многое другое.

Сама структура языка, правила по которым он интерпретирует програмы - все это описано
	в стандарте ECMA-262. (Последня версия ECMA-2018)

Babel - это так называемый транспилятор, он автоматически переобразовует код, который написан
	на современном стандарте js в тот код, который будет совместим со старыми браузерами.


/*================================= let и const ===================================================*/

В ES-2015 предусмотрены новые способы объявления переменных: через let и const вместо var.

У объявлений переменной через let есть три основных отличия от var:
  - Область видимости переменной let – блок {...}. Как мы помним, переменная, объявленная 
      через var, видна везде в функции.
  - Переменная let видна только после объявления.
  - При использовании в цикле, для каждой итерации создаётся своя переменная

  //неверно
	for (var i = 0; i < 3; i++) {
		setTimeout(function () {
			console.log(i) // 3 3 3 - так как i храниться в том же адресе памяти
		}, i*100);
	}

  alert(i); //3

  //верно
	for (let i = 0; i < 3; i++) {
		setTimeout(function () {
			console.log(i) // 0 1 2 - создаеться новый адрес памяти на каждой итерации
		}, i*100);
	}

	alert(i); // ошибка, нет такой переменной

С переменными let всё проще. До объявления их вообще нет.
  alert(a); // ошибка, нет такой переменной
  let a = 5;

Объявление const задаёт константу, то есть переменную, которую нельзя менять:
	
	const apple = 5;
	apple = 10; // ошибка

В случае с массивом то от изменения защищена сама константа, но не свойства 
	внутри неё, с обьектом также.

	const user = {
	  name: "Вася"
	};

	user.name = "Петя"; // допустимо
	user = 5; // нельзя, будет ошибка


/*=========== arrow-функции (this, default param, rest) ==============*/

Появился новый синтаксис для задания функций через «стрелку» =>. 
  let inc = (x) => x+1;
  // аналогично с
  // let inc = function(x) { return x + 1; };

  console.log( inc(1) ); // 2

Очень удобно использовать в качестве callback.

	let a = [ 1, 2, 3, 4 ];
	let a2 = a.map( el => el * 2 ); // [2, 4, 6, 8]
	// аналогично с
	// let a2 = a.map(function(el) { return el * 2; });

Функции стрелки сохраняют лексическое значение this.
	Внутри функций-стрелок – тот же this, что и снаружи.

	let group = {
	  title: "Наш курс",
	  students: ["Вася", "Петя", "Даша"],

	  showList: function() {
	    this.students.forEach(
	      student => alert(this.title + ': ' + student)
	    )
	  }
	}

	group.showList();
	// Наш курс: Вася
	// Наш курс: Петя
	// Наш курс: Даша

Параметр по умолчанию используется при отсутствующем аргументе 
	или равном undefined.

	function fetchOrders(count = 10) {
		console.log('Getting ' + count );
	}
	fetchOrders(); // Getting 10

Rest параметр ... - это особый параметр ф-ции, который групирует все
	аргументы, которые не были присвоены обычным параметрам в массив.

	//rest параметр обязан идти последним в ф-ции, максимум один
	function max(a, ...rest) {
		console.log(rest); // [3, 4]
	}
	max(1, 3, 4);


/*======================== destructuring, spread operator ==============================*/

Spread operator ... - разворачивает массив, превращая его в список аргументов.

	const arr1 = [1, 2, 3];
	const arr2 = [4, 7, 1];

	const shallowCopy = [...arr1, ...arr2, 41];
	console.log(shallowCopy); //[1, 2, 3, 4, 7, 1, 41];

	//object spread operator
	const defaults = {
	  host: 'localhost',
	  dbName: 'blog',
	  user: 'admin'
	};

	const opts = {
	  user: 'join',
	  password: 'utopia'
	};

	  //создаем новый обьект в который добавляем все свойства из defaults и opts
	const res = { ...defaults, ...opts };
	console.log(res); //{ host: 'localhost', dbName: 'blog', user: 'join', password: 'utopia' };

Деструктуризация – это особый синтаксис присваивания, при котором можно присвоить 
	массив или объект сразу нескольким переменным, разбив его на части.

Деструктуризация обьектов:
	//Example1
	const options = {
	  title: "Меню",
	  width: 100,
	  height: 200
	};
	//названия констант и полей должны совпадать
	const {title, width, height} = options;
	console.log(title, width, height); // Меню 100 200


	//Example2
	const options = {
		name: {
			first: 'Peter',
			last: 'Smith'
		},
		age: 27
	};
	//названия констант и полей должны совпадать
	//name здесь просто как путь
	const { name: { first, last }} = options;
	const { role = 'user' } = options;

	console.log(first, last); // Peter Smith
	console.log(role); // user


	//Example3 с переиминованием
	const options = {
		name: {
			first: 'Peter',
			last: 'Smith'
		},
		age: 27
	};
	//названия констант и полей должны совпадать
	//name здесь просто как путь
	const { name: { first: firstName, last: lastName } } = options;
	console.log(firstName, lastName); // Peter Smith

Деструктуризация в параметрах:

	let options = {
	  title: "Меню"
	};

	function showMenu({title, width = 100}) {
	  alert(title + ' ' + width ); // Меню 100
	}

	showMenu(options);


Деструктуризация и rest-параметр:

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak'
};

const { duck, ...otherAnimals } = dict;
console.log(otherAnimals);//{dog: 'wuff', mouse: 'squeak'}


Деструктуризация и массив:

  let array = [1, 2, 3, 4, 5];
  let [x, ...rest] = array;

  console.log(x); // 1
  console.log(rest); // [2, 3, 4, 5]



/*========================== template strings =======================================*/

Строки-шаблоны – для удобного задания строк (многострочных, с переменными).

  console.log(`This
      is
      multiline
      string`);

	//а с помощью ${} можно использовать переменные внутри них
  let name = 'Katya';
  console.log(`Hello, ${name}!`); // Hello, Katya!

  //арифметические операции
  let a = 2;
  let b = 5;
  console.log(`${a} + ${b} = ${a + b}!`); // 2 + 5 = 7!

  // Вызов ф-ции
	const s = `My name is ${getName()}`


/*========================== Objects =======================================*/

Упрощенная запись присвоения свойств обьекту

	const x = 10;
	const y = 30;

	//старая запись
	const point = {
	  x: x,
	  y: y
	};
	//новая
	const p = { x, y };

	console.log(p); //{x: 10, y: 30}

Функция Object.assign получает список объектов и копирует в первый 
	target свойства из остальных. При этом последующие свойства перезаписывают 
	предыдущие.

	let user = { name: "Вася" };
	let visitor = { isAdmin: false, visits: true };
	let admin = { isAdmin: true };

	Object.assign(user, visitor, admin);
	// user <- visitor <- admin
	alert( JSON.stringify(user) ); // name: Вася, visits: true, isAdmin: true


/*================================= Prototypes ES6 ===================================================*/

Модель прототипов - модель объектов, способных наследовать и расширять 
  поведение других объектов. 

В "JavaScript" объекты наследуют поведение от других объектов, этот 
  механизм называется наследованием через прототипы. Объект, от которого наследуется поведение, 
  называется прототипом.

  //цепочка прототипов
  const animal = {
    say: function() {
      console.log(this.name, 'goes', this.voice);
    }
  }

  const dog = {
    name: 'dog',
    voice: 'woof',
    say: function() {
      console.log(this.name, 'goes', this.voice);
    }
  };
  //теперь animal прототип обьекта dog
  Objects.setPrototypeOf(dog, animal);

  const cat = {
    name: 'cat',
    voice: 'meow',
    say: function() {
      console.log(this.name, 'goes', this.voice);
    }
  };
  //теперь animal прототип обьекта cat
  Objects.setPrototypeOf(cat, animal);

  dog.say(); //dog goes woof
  cat.say(); //cat goes woof

//Objects.setPrototypeOf - желательно не использовать, тормозит движок


/*================================= Class ===================================================*/

Новая конструкция class – удобный «синтаксический сахар» для задания 
  конструктора вместе с прототипом.

  //создадим цепочку протатипов
  class Animal {

    //создаем ф-цию конструктор
    constructor(name, voice) {
      this.name = name;
      this.voice = voice;
    }

    say() {
      console.log(this.name, 'goes', this.voice);
    }
  }

  //Если не указать явно конструктор, то наш класс унаследует конструктор
  //super класса(Animal)
  class Bird extends Animal {

  }

  // duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
  const duck = new Bird('Duck', 'quack');


Создадим цепочку наследование с использованием super class.

  class Animal {
    constructor(name, voice) {
      this.name = name;
      this.voice = voice;
    }

    say() {
      console.log(this.name, 'goes', this.voice);
    }
  }

  //super - дает доступ к свойствам и методам родителя
  class Bird extends Animal {
    constructor(name, voice, canFly) {
      super(name, voice); //эти значения передаються выше конструкт. Animal
      //super.say() - обращение к методу
      this.canFly = canFly;
    }
  }

  // duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
  const duck = new Bird('Duck', 'quack', true);


Class properties - добавляет новый синтаксис
//stage3 proposal

  class Counter {
    //инициализация свойства прямо в теле класса
    //count не зависит от внешних параметров, поєтому создаем без конструктора
    count = 1;

    //ф-ции которые автоматически привязаны к обьекту, который создаеться
    inc = () => {
      this.count++;
      console.log(this.count);
    }
  }

  const cnt = new Counter();
  console.log(cnt.count); //1
  cnt.inc(); //2


/*================================= Модули ===================================================*/

Экспорт нескольких значений
  
  //math.js
  function sum(x, y) {
    return x + y;
  }

  function multiply(x, y) {
    return x * y;
  }

  export { sum, multiply };

  //index.js
  import { sum, multiply } from './math';

  console.log(sum(2, 2)); //4


Экспорт c переиминованием
  //со стороны импорта также можно переиминовать
  import { sum as res, multiply } from './math';
  console.log(res(2, 2)); //4


Импорт всего что внутри
  
   import * as calc from './math';
   console.log(calc.sum(2, 2)); //4


Экспорт default
  //Такой экспорт возможен только один
  //math.js
  Class Graph {
    addNode() {
      console.log('node');
    }
  }

  export default Graph;

  //index.js
  import Graph from './math';

  console.log(typeof Graph); //function


Импорт микс
  
  import Graph, { sum, multiply }, * as calc from './math';


Импорт файла
  
  import './sideeffect'; // import js файла 
  import './main.css'; // import css файла 
  import './main.png'; // import png файла 


Импорт библиотеки

  import joker from 'one-liner-joke'; // import js файла 



/*================================= Symbol, iterators, generators ===================================================*/

Symbol - это новый примитивный тип данных. Служит для создания 
  уникальных идентификаторов. Symbol - это уникальное значение, которое доступно только по ссылке на него.
  Символы с одинаковым именем не равны друг другу.

Символы можно использовать в качестве имён для свойств объекта следующим образом:

  let isAdmin = Symbol("isAdmin");

  let user = {
    name: "Вася",
    [isAdmin]: true
  };

  alert(user[isAdmin]); // true

Особенность символов в том, что если в объект записать свойство-символ, 
  то оно не участвует в итерации:

  // в цикле for..in также не будет символа
  alert( Object.keys(user) ); // name

Symbol.iterator – встроенный Symbol, идентификатор для свойства, задающего функцию итерации по объекту.

Итерируемые или, иными словами, «перебираемые» объекты – это те, содержимое которых можно перебрать в цикле.
  Итераторы дают возможность сделать «перебираемыми» любые объекты.

Итератор – объект, предназначенный для перебора другого объекта. Метод Symbol.iterator предназначен для 
  получения итератора из объекта. Цикл for..of делает это автоматически, но можно и вызвать его напрямую.

Генераторы – новый вид функций в современном JavaScript. Они отличаются от обычных тем, что могут 
  приостанавливать своё выполнение, возвращать промежуточный результат и далее возобновлять его позже, 
  в произвольный момент времени.

  function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }