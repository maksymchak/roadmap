17. LocalStorage
	- Что такое LocalStorage?

    
/******************************************************************************************/
// https://www.youtube.com/watch?v=3-bZ7gLVSzo&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=17&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

/*================================= Что такое LocalStorage? ===================================================*/

localStorage - локальное хранилище или база данных в браузере, в котором можно хранить данные, которые будут доступны после перезагрузки
	страницы.

localStorage - глобальный обьект в window. localStorage умеет работать только со строками. Работает он только с текущим доменом.

Методы LocalStorage:
* localStorage.setItem(key, value) - записать
* localStorage.getItem(key, value) - получить
* localStorage.removeItem(key) - удалить ключ
* localStorage.clear() - очистить весь localStorage


// Example1
	const myNumber = 42;

	localStorage.setItem('number', myNumber.toString())
	console.log(localStorage.getItem('number'))
	// 42

	localStorage.removeItem(key) 
	console.log(localStorage.getItem('number'))
	// null


Так как LocalStorage умеет работать только со строками - значит записывать обьекты нужно также ввиде строки

// Example2
	const object = {
		name: 'Max',
		age: 20
	}

	localStorage.setItem('person', JSON.stringify(object) )

	const raw = localStorage.getItem(person);
	const person = JSON.parse(raw);
	person.name = 'Anton'

	console.log(person)
	// {name: 'Anton', age: 20}

// Example3
	window.addEventListener('storage', event => {
		console.log(event)
	})

	localStorage.setItem('temp', Date.now().toString())
	// Но сработает только в новой вкладке


Чем отличаеться localStorage от Cookie
* localStorage на много больше по обьему
* Cookie улитают с запросами на сервер (не безопасно)