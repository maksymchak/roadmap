2. Context this
	- Что такое контекст this?
	- this в стрелочных функциях
    - Что такое метод bind?
    
/******************************************************************************************/

/*================================= Что такое контекст this? ===================================================*/

this - указывает на текущий контекст

window — это глобальный объект предоставляемый браузером, внутри которого содержатся все встроенные в браузерный 
	JavaScript функции и свойства.

// Example 1
	function hello() {
		console.log('Hello', this)
	}

	const person = {
		name: 'Anton',
		age: 25,
		sayHello: hello
	}

	console.log(person)
	// {name: "Anton", age: 25, sayHello: ƒ}

	console.log(person.sayHello())
	// Hello 
	// {name: "Anton", age: 25, sayHello: ƒ}


	window.hello();
	// Hello 
	// Window {window: Window, self: Window, document: document, name: "result", location: Location, …}


this указывает на тот обьект в контексте которого он был вызван

this в функциях
Когда вы вызываете функцию и внутри нее используете this – это глобальный объект window .
Если же функция вызывается с использованием директивы use strict (вызывается в строгом режиме), 
то this буде равен undefined .
  function checkThis() {
      console.log(this === window);
  }

  checkThis(); // true

'use strict'; - это спецыальный режим введенный в ES5 


/*================================= this в стрелочных функциях ===================================================*/

this в стрелочных функциях
Проблема потери контекста не возникает при использовании стрелочной функции, как вложенной 
  функции. Это связано с тем, что this стрелочной функции заимствует this из внешней функции, 
  в которой она определена.
  let user = {
      getFullName: function() {
          console.log(this === user);

          const innerFunction = () => {
              console.log(this === user);
          }

          innerFunction();
      }
  }

  user.getFullName();
  // true
  // true
При вызове стрелочной функции в глобальной области видимости, у нее, как у обычной функции, 
  this равен либо window, либо undefined.
  const globalFunction = () => {
      console.log(this === window);
  }

  globalFunction(); // true


/*================================= Что такое метод bind? ===================================================*/

Для того чтобы присвоить нужный контекст исполнения для функции - можно ипользовать специальные методы:
	* Call – вызывает функцию и позволяет передать в нее параметры один за другим через запятую.
	* Apply – вызывает функцию и позволяет передать в нее параметры в виде массива.
	* Bind – возвращает новую функцию, позволяет передать в нее параметры один за другим или в виде массива.

// Example 2
	function hello() {
		console.log('Hello', this)
	}

	const person = {
		name: 'Anton',
		age: 25,
		sayHello: hello,
		sayHelloWindow: hello.bind(window)
	}
	// В bind мы передаем тот контекст, который будет привязан к данной функции

  	person.sayHelloWindow();
	// Hello 
	// Window {window: Window, self: Window, document: document, name: "result", location: Location, …}


В отличии от методов call и apply, bind не выполняет функцию, как только он был применен. Этот 
  метод создает новую функцию с привязанным контекстом, которую можно вызвать в любом месте или 
  в определенный момент, при этом, привязанный ранее контекст будет сохранен. 

// Example 3
	const person = {
		name: 'Anton',
		age: 25,
		logInfo: function() {
			console.log(`Name is ${this.name}`)
			console.log(`Age is ${this.name}`)
		}
	}

	const lena = {
		name: 'Elena',
		age: 23
	}

	person.logInfo.bind(lena)()
	// Name is Elena
	// Age is Elena


// Example 4
  const person1 = { firstName: 'John', lastName: 'Jarvis' };

  function say(greeting) {
      console.log(`${greeting} ${this.firstName} ${this.lastName}`);
  }

  const sayHello1 = say.bind(person1, 'Hello');
  sayHello1(); 
  // Hello John Jarvis

/*================================= Что такое метод call & apply? ===================================================*/

Методо call - вызывает функцию сразу
// Example 5
  function say(greeting) {
      console.log(`${greeting} ${this.firstName} ${this.lastName}`);
  }

  const person1 = { firstName: 'John', lastName: 'Jarvis' };

  say.call(person1, 'Hello'); 
  // Hello John Jarvis

Принцип работы метода apply такой же, как и у метода call. Единственным отличием является то, 
  что метод apply принимает параметры в виде массива, а в метод call передаются перечисляемые 
  через запятую параметры.
  //say.apply(person1, ['Hello']); // Hello John Jarvis


