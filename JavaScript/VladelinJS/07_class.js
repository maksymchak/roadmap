7. Class
	- Что такое ES6 class?

    
/******************************************************************************************/
// https://www.youtube.com/watch?v=uLY9GXGMXaA&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

/*================================= Что такое ES6 class? ===================================================*/

Cинтаксис классов позволяет более удобно создавать обьекты.

Есть прототип обьекта и прототип Класса

Для инициализации изначальных значений обьектов класса - нужно использовать ф-цию конструктор.

// Example1
	class Animal {

		constructor(options) {
			this.name = options.name
			this.age = option.age
			this.hasTail = options.hasTail
		}

		voice() {
			console.log('I am Animal!')
		}
		// voice будет находиться в прототипе обьекта

	}

	// Создаем обьект animal при помощи класса
	const animal = new Animal({
		name: 'Animal',
		age: 5,
		hasTail: true
	})

	animal.voice()
	// I am Animal (ф-ция вызываеться в прототипе)


static - так в классах можно прописать статические методы или переменные. Такие переменные и
	методы доступны только в его классе.

// Example2
	class Animal {

		static type = 'Animal'

		constructor(options) {
			this.name = options.name
			this.age = option.age
			this.hasTail = options.hasTail
		}

		voice() {
			console.log('I am Animal!')
		}
		// voice будет находиться в прототипе обьекта

	}

	const animal = new Animal({
		name: 'Animal',
		age: 5,
		hasTail: true
	})

	Animal.type
	// 'Animal'


При помощи классов мы можем устраивать полноценное наследование
extends - наследование от класса


// Example3
	class Cat extends Animal {
		static type = 'CAT'

		// Когда мы создаем метод конструктор в дочернем классе - нам обьязательно нужно вызвать родитель класс через метод super
		constructor(options) {
			super(options)
			this.color = options.color
		}


		voice() {
			super.voice()
			// так будут вызваны два метода - дочерний и родительский
			console.log('I am Cat!')
		}
		// так мы переписываем родительский метод
	}

	const cat = new Cat({
		name: 'Cat',
		age: 7,
		hasTail: true
	})

	cat.voice()
	// I am Animal
	// I am Cat


// Example4
	class Cat extends Animal {
		static type = 'CAT'

		constructor(options) {
			super(options)
			this.color = options.color
		}


		voice() {
			super.voice()
			console.log('I am Cat!')
		}

		// Геттер - это поле
		get ageInfo() {
			return this.age * 7
		}

		// Cеттер - меняем поле в самом обьекте
		set ageInfo(newAge) {
			return this.age = newAge
		}
	}

	const cat = new Cat({
		name: 'Cat',
		age: 7,
		hasTail: true
	})

	cat.ageInfo = 8
	// 56


/*================================= Practise ===================================================*/

$ - приватное поле, обычно нода

// Example5
	class Component {
		constructor(selector) {
			this.$el = document.querySelector(selector)
		}

		hide() {
			this.$el.style.display = 'none'
		}

		show() {
			this.$el.style.display = 'block'
		}
	}

	class Box extends Component {
		constructor(options) {
			super(options.selector)

			this.$el.style.width = this.$el.style.height = options.size +'px'
			this.$el.style.background = options.color
		}
	}

	const box1 = new Box({
		selector: '#box1',
		size: 100,
		color: 'red'
	})

	const box2 = new Box({
		selector: '#box2',
		size: 120,
		color: 'blue'
	})

	class Circle extends Box {
		constructor(options) {
			super(options)

			this.$el.style.borderRadius = '50%'
		}
	}

	const c = new Circle({
		selector: '#circle',
		size: 90,
		color: 'green'
	})


Классы - удобный синтаксис для создавания обектов