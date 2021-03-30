4. Async
	- Что такое асинхронность?

    
/******************************************************************************************/
// https://www.youtube.com/watch?v=vIZs5tH-HGQ&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

/*================================= Что такое асинхронность? ===================================================*/

setTimeout() - это то что нам предоставляеться браузером, это webAPI. Этого нет в движке js.
window.setTimeout()

Синхронное программирование - означает, что весь код выполняется построчно и до тех пор, пока 
  предыдущая операция не будет закончена, следующая не будет запущенна. Сам по себе JavaScript 
  однопоточный, то есть в один момент времени может выполнятся только одна операция.

Асинхронный подход - означает, что выполнение части кода можно переместить из основного потока 
  выполнения в так называемую очередь выполнения, после того как код в основном потоке выполнится, 
  отложенная часть кода, из очереди, может быть возвращена в основной поток и продолжит выполнение.  

task queue - очередь задач.

Когда какой-то webAPI заканчивает работу - запланированный callback помещаеться в очередь.

event loop - смотрит на стек и на очередь задач, если стек пуст он берет первую задачу в очереди 
             и заталкивает его в этот стек (что заставляет код выполниться).

setTimeout с задержкой 0 - создаеться для того, чтобы что-то выполнить сразу после того как стек
                           очиститься.

В асинхронном варианте все callback отправляються в очередь.

render страницы не происходит пока, какая-то ф-ция выполняеться в call-stack