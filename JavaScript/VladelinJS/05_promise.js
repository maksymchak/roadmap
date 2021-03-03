4. Promise
	- Что такое promise?

    
/******************************************************************************************/
// https://www.youtube.com/watch?v=1idOY3C1gYU&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

/*================================= Что такое promise? ===================================================*/

new Promise - глобальный класс. Promise – объект, который используется для выполнения асинхронных операций

Promise может находится в одном из таких состояний (эти состояния - это функции):
  • pending – начальное состояние, ожидание;
  • resolve – операция завершена успешно;
  • reject – операция завершена с ошибкой;
  • settled – выполнено или отклонено, но не находится в состоянии ожидания.


// Example1
	const p = new Promise(function(resolve, reject){
		setTimeout(() => {
			console.log('Preparing data...')
			const backendData = {
				server: 'aws',
				port: 2000,
				status: 'working'
			}
			resolve()
			// уведомляем промис о успешном его выполнении
			// в resolve мы передаем backendData который потом получим в методе then - data
		}, 2000)
	})

	// p - являеться промисом, который мы получили из класса Promise

	Когда выполниться resolve - выполниться callback в методе промиса then

	p.then((data) => {
		console.log('Promise resolved', data)
	})

// Example2
	const p = new Promise(function(resolve, reject){
		setTimeout(() => {
			console.log('Preparing data...')
			const backendData = {
				server: 'aws',
				port: 2000,
				status: 'working'
			}
			resolve()
		}, 2000)
	})

	p.then((data) => {
		new Promise(function(resolve, reject){
			setTimeout(() => {
				data.modified = true
				resolve(data)
				resolve()
			}, 2000)
		})
	}).then(clientData => {
		console.log('modified', data)
	})
	// Здесь мы снова можем использовать then так мы возвращаем еще один Промис внутри then
	.catch(err => console.error('Error: ', err))
	// В методе catch мы отлавливаем ошибки
	.finally(() => console.log('Finally'))
	// Метод finally происходит в любом случае была ли ошибка или нет



Глобальный класс Promise имеет метод all который выполниться когда выполняться все методы
	в массиве. Используться когда нам нужно получить данные из разных енпойнтов одновременно 

// Example3
	const sleep = ms => {
		return new Promise(resolve => {
			setTimeout(() => resolve(), ms)
		})
	}
	Promise.all([sleep(2000), sleep(5000)]).then(() => {
		console.log('All promises')
	})

	Promise.race([sleep(2000), sleep(5000)]).then(() => {
		console.log('All promises')
	})
	// Метод race выполниться когда выполниться первый промис


Promise - обретка над асинхроностью
