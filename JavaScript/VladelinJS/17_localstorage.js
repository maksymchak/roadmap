17. LocalStorage
	- Что такое LocalStorage?

    
/******************************************************************************************/
// https://www.youtube.com/watch?v=3-bZ7gLVSzo&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=17&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

/*================================= Что такое LocalStorage? ===================================================*/

LocalStorage - локальное хранилище или база данных в браузере, в котором можно хранить данные, которые будут доступны после перезагрузки
	страницы.

LocalStorage - глобальный обьект в window. LocalStorage умеет работать только со строками. Работает он только с текущим доменом.

Методы LocalStorage:
* LocalStorage.setItem(key, value) - записать
* LocalStorage.getItem(key, value) - получить
* LocalStorage.removeItem(key) - удалить ключ
* LocalStorage.clear() - очистить весь LocalStorage


// Example1
	const myNumber = 42;

	LocalStorage.setItem('number', myNumber.toString())
	console.log(LocalStorage.getItem('number'))
	// 42

	LocalStorage.removeItem(key) 
	console.log(LocalStorage.getItem('number'))
	// null


Так как LocalStorage умеет работать только со строками - значит записывать обьекты нужно также ввиде строки

// Example2
	const object = {
		name: 'Max',
		age: 20
	}

	LocalStorage.setItem('person', JSON.stringify(object) )

	const raw = LocalStorage.getItem(person);
	const person = JSON.parse(raw);
	person.name = 'Anton'

	console.log(person)
	// {name: 'Anton', age: 20}

// Example3
	window.addEventListener('storage', event => {
		console.log(event)
	})

	LocalStorage.setItem('temp', Date.now().toString())
	// Но сработает только в новой вкладке


Чем отличаеться LocalStorage от Cookie
* LocalStorage на много больше по обьему
* Cookie улитают с запросами на сервер (не безопасно)