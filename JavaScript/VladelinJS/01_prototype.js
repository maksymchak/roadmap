1. JavaScript Prototype
	- Что такое prototype?

/**************************************** Test *********************************************/

/*================================= Что такое prototype? ===================================================*/

У любого созданного объекта всегда присутствует ссылка на другой объект (родитель), который называется прототипом.
  Прототипом всех объектов является глобальный объект Object . 


	const person = {
		name: 'Maxim',
		age: 25,
		greet: function() {
			console.log('Greet!')
		}
	}

	console.log(person)

	/*{
		age: 25,
		greet: f(),
		name: 'Maxim',
		__proto__: Object
	}*/

Прототипы - это обьекты присутствующие у родительских елементах.

const person = new Object({
	name: 'Maxim',
	age: 25,
	greet: function() {
		console.log('Greet!')
	}
})

Object.prototype.sayHello = function() {
	console.log('Hello!');
}
// Мы задали прототипу глобального класса Object метод sayHello, который будет доступен в обьекте person

У глобального класса Object есть метод для создания обьектов create()

Зададим для обьекта lena прототип обьекта person

const lena = Object.create(person)
lena.name = 'Elena'


Cама по себе история о прототипах это история о наследованиях