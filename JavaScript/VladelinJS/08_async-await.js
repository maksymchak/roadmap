8. Async, Await
	- Что такое Async, Await?

    
/******************************************************************************************/
// https://www.youtube.com/watch?v=SHiUyM_fFME&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

/*================================= Что такое Async, Await? ===================================================*/

fetch - нативная ф-ция в браузере для выполнения асинхронного запроса, который возвращает promise
json() - метод fetch

	// Example1
	const delay = ms => {
		return new Promise(r => setTimeout(() => r(), ms)
	}

	const url = 'https://jsonplaceholder.typicode.com/todos'

	function fetchTodos() {
		console.log('Fetch todo started...')
		return delay(2000)
		.then(() => fetch(url))
		.then(response => response.json())
	}

	fetchTodos()
	.then(data => {
		console.log('Data:', Data)
	})
	.catch(e => console.error(e))


Благодаря новым операторам Async, Await пример выше можно сделать намного проще.

Ф-ции которые применяют внутри оператор await должны быть асинхронными (перед ним должен быть async)

оператор await - выполняет ф-цию resolve

// Example2
	async function fetchAsyncTodos() {
		console.log('Fetch todo started...')
		await delay(2000)
		const response = await fetch(url)
		const data = await response.joson()
		console.log('Data:', data)
	}

// Example3
	async function fetchAsyncTodos() {
		console.log('Fetch todo started...')
		try {
			await delay(2000)
			const response = await fetch(url)
			const data = await response.joson()
			console.log('Data:', data)
		} catch (e) {
			console.error(e)
		} finally {

		}

	}


Async, Await - cинтаксический сахар для работы с промисами