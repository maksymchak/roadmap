3. Closure
	- Что такое замыкания?

    
/******************************************************************************************/
// https://www.youtube.com/watch?v=pahO5XjnfLA&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

/*================================= Что такое замыкания? ===================================================*/

Замыкание – это функция вместе со всеми внешними переменными (замыкание функции), которые ей доступны.

По сути это просто функция внутри другой функции

// Example1
	function createCalcFunction(n) {
		return function() {
			console.log(1000 * n)
		}
	}

	const calc = createCalcFunction(42)
	calc()
	// 42000


Лексическое окружение
Каждая функция в JS имеет лексическое окружение - LexicalEnviroment (Лексическое окружение).
  Все переменные внутри функции – это свойства этого внутреннего объекта LexicalEnvironment.


// Example2
  function sayHi(name) {
    //До выполнения первой строчки её кода, на стадии инициализации:
    // LexicalEnvironment = { name: 'Вася', phrase: undefined }
    var phrase = "Привет, " + name;
    alert( phrase );
  }

  sayHi('Вася');

Каждая функция при создании получает ссылку [[Scope]] на объект с переменными, в контексте которого была создана


// Example3
Функция-счётчик

  function makeCounter() {
    var currentCount = 1;

    return function() { // (**)
      return currentCount++;
    };
  }

  var counter = makeCounter(); // (*)

  // каждый вызов увеличивает счётчик и возвращает результат
  alert( counter() ); // 1  [[Scope]] -> {currentCount: 1}
  alert( counter() ); // 2  [[Scope]] -> {currentCount: 2}
 
  // создать другой счётчик, он будет независим от первого
  var counter2 = makeCounter();
  alert( counter2() ); // 1

При каждом запуске makeCounter создаётся свой объект переменных LexicalEnvironment, 
  со своим свойством currentCount, на который новый счётчик получит ссылку [[Scope]].