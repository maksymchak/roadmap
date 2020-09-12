3. Функции
	- Объявление
	- Рекурсия, Стек
	- Псевдомассив аргументов "arguments"
	- Function declaration, Function expression,
		Анонимные функции

/**************************************** Test *********************************************/
1. Блок (Объявление)
- Для чего нужны функции ?
- Используйте встроенные функции.
- Объявите функцию.
- Объявите локальную переменную.
- Обратитесь к внешней переменной из функции.
- Что такое глобальная переменная ?
- Передайте аргументы функции.
- Укажите значение по умолчанию в функции.
- Что такое директива return ?
- Назовите 3 функции

2. Блок (Рекурсия, Стек)
- Что такое рекурсия ?
- Написать рекурсию.
- Что такое базис и глубина рекурсии ?
- Что такое контекст выполнения ?
- Что такое Стек ?

3. Блок (Псевдомассив аргументов "arguments")
- Что такое arguments ?
- Есть ли у arguments методы как у обычного массива ?

4. Блок (Function declaration, Function expression,
		Анонимные функции)
- Что такое Function declaration?
- Что такое Function expression?
- Отличия между declaration и expression ?
- Что такое анонимные ф-ци ?

5. Блок (Взаимодействие: alert, prompt, confirm)
- Что делает alert?
- Что делает prompt?
- Что делает confirm?

/******************************************************************************************/


/*================================= Объявление ===================================================*/

Зачастую нам надо повторять одно и то же действие во многих частях программы.
Чтобы не повторять один и тот же код во многих местах, придуманы функции (избавление от дублирования кода.). 
  Функции являются основными «строительными блоками» программы.

Примеры встроенных функций вы уже видели – это alert(message), prompt(message, default) и confirm(question).


Вначале идет ключевое слово function, после него имя функции, затем список параметров в скобках и тело 
  функции – код, который выполняется при её вызове.
	function showMessage() {
	  alert( 'Привет всем присутствующим!' );
	}

	showMessage();
	showMessage();

Функция может содержать локальные переменные, объявленные через var. Такие переменные видны только 
  внутри функции:
	function showMessage() {
	  var message = 'Привет, я - Вася!'; // локальная переменная

	  alert( message );
	}
	showMessage(); // 'Привет, я - Вася!'
	alert( message ); 

Блоки if/else, switch, for, while, do..while не влияют на область видимости переменных.
При объявлении переменной в таких блоках, она всё равно будет видна во всей функции.

Функция может обратиться ко внешней переменной, например:
	var userName = 'Вася';
	function showMessage() {
	  var message = 'Привет, я ' + userName;
	  alert(message);
	}
	showMessage(); // Привет, я Вася

Переменные, объявленные на уровне всего скрипта, называют «глобальными переменными».
В примере выше переменная userName – глобальная.

При вызове функции ей можно передать данные, которые та использует по своему усмотрению.
	function showMessage(from, text) { // параметры from, text
	  alert(from + ': ' + text);
	}
	showMessage('Маша', 'Привет!');
	showMessage('Маша', 'Как дела?');

Параметры копируются в локальные переменные функции.
Например, в коде ниже есть внешняя переменная from, значение которой при запуске функции 
	копируется в параметр функции с тем же именем. Далее функция работает уже с параметром:
	function showMessage(from, text) {
	  from = '**' + from + '**'; // меняем локальную переменную from
	  alert( from + ': ' + text );
	}

	var from = "Маша";
	showMessage(from, "Привет");
	alert( from ); // старое значение from без изменений, в функции была изменена копия


Для указания значения «по умолчанию», то есть, такого, которое используется, если аргумент 
  не указан, используется два способа:
- Можно проверить, равен ли аргумент undefined, и если да – то записать в него значение по 
  умолчанию. Этот способ продемонстрирован в примере выше.
- Использовать оператор ||:
	function showMessage(from, text) {
	  text = text || 'текст не передан';

	  ...
	}

Для возврата значения используется директива return.
Она может находиться в любом месте функции. Как только до неё доходит управление – функция 
  завершается и значение передается обратно.
	function calcD(a, b, c) {
	   return b*b - 4*a*c;
	}
	var test = calcD(-4, 2, 1);
	alert(test); // 20

Имя функции следует тем же правилам, что и имя переменной. Основное отличие – оно должно быть 
  глаголом, т.к. функция – это действие. Как правило, используются глагольные префиксы, обозначающие 
  общий характер действия, после которых следует уточнение.
	getAge(..)          // get, "получает" возраст
	calcD(..)           // calc, "вычисляет" дискриминант
	createForm(..)      // create, "создает" форму
	checkPermission(..) // check, "проверяет" разрешение, возвращает true/false


/*================================= Рекурсия, Стек ===================================================*/
В теле функции могут быть вызваны другие функции для выполнения подзадач. Частный случай подвызова – 
  когда функция вызывает сама себя. Это называется рекурсией.

В качестве первого примера использования рекурсивных вызовов – рассмотрим задачу возведения числа 
  x в натуральную степень n.
	pow(x, n) = x * pow(x, n - 1)

	То есть, xn = x * xn-1.
	pow(2, 4) = 2 * pow(2, 3)
	pow(2, 3) = 2 * pow(2, 2)
	pow(2, 2) = 2 * pow(2, 1)
	pow(2, 1) = 2

Этот алгоритм на JavaScript:
	function pow(x, n) {
	  if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
	    return x * pow(x, n - 1);
	  } else {
	    return x;
	  }
	}
	alert( pow(2, 3) ); // 8
Говорят, что «функция pow рекурсивно вызывает сама себя» до n == 1.
//Значение, на котором рекурсия заканчивается, называют базисом рекурсии. В примере выше базисом является 1.
//Общее количество вложенных вызовов называют глубиной рекурсии. В случае со степенью, всего будет n вызовов.

Контекст выполнения (execution context) — это, если говорить упрощённо, концепция, описывающая окружение, в 
  котором производится выполнение кода на JavaScript. Код всегда выполняется внутри некоего контекста.

В JavaScript существует три типа контекстов выполнения:
-Глобальный контекст выполнения. //Это базовый, используемый по умолчанию контекст выполнения. 
-Контекст выполнения функции. //Каждая функция имеет собственный контекст выполнения. 
-Контекст выполнения функции eval. //Код, выполняемый внутри функции eval

Стек выполнения (execution stack), который ещё называют стеком вызовов (call stack), это LIFO-стек, 
  который используется для хранения контекстов выполнения, создаваемых в ходе работы кода.

Когда JS-движок начинает обрабатывать скрипт, движок создаёт глобальный контекст выполнения и помещает 
его в текущий стек. При обнаружении команды вызова функции движок создаёт новый контекст выполнения для 
этой функции и помещает его в верхнюю часть стека.

Движок выполняет функцию, контекст выполнения которой находится в верхней части стека. Когда работа 
функции завершается, её контекст извлекается из стека и управление передаётся тому контексту, который 
находится в предыдущем элементе стека.


/*================================= Псевдомассив аргументов "arguments" ===================================================*/

В JavaScript любая функция может быть вызвана с произвольным количеством аргументов.

	function go(a,b) {
	  alert("a="+a+", b="+b);
	}
	go(1,2,3); // a=1, b=2, третий аргумент не вызовет ошибку

Доступ к лишним осуществляется через «псевдо-массив» arguments.
Он содержит список аргументов по номерам: arguments[0], arguments[1]…, а также свойство length.

	function sayHi() {
	  for (var i = 0; i < arguments.length; i++) {
	    alert( "Привет, " + arguments[i] );
	  }
	}

	sayHi("Винни", "Пятачок"); // 'Привет, Винни', 'Привет, Пятачок'
	//Все параметры находятся в arguments, даже если они есть в списке.
arguments – это не массив Array.
В действительности, это обычный объект, просто ключи числовые и есть length. На этом сходство 
	заканчивается. Никаких особых методов у него нет, и методы массивов он тоже не поддерживает.


/*================== Function declaration, Function expression, Анонимные функции ===============*/

В JavaScript функция является значением, таким же как строка или число.
Их можно присваивать, передавать, создавать в любом месте кода.
Как и любое значение, объявленную функцию можно вывести, вот так:

	function sayHi() {
	  alert( "Привет" );
	}

	alert( sayHi ); // выведет код функции

Функцию можно скопировать в другую переменную:
	var func = sayHi;    // (2)
	func(); // Привет    // (3)


Function Expression (функциональное выражение)
Существует альтернативный синтаксис для объявления функции, который ещё более наглядно 
	показывает, что функция – это всего лишь разновидность значения переменной.

Function Expression – объявление функции в контексте какого-либо выражения, например присваивания.

	var f = function(параметры) {
	  // тело функции
	};

	var sayHi = function(person) {
	  alert( "Привет, " + person );
	};

	sayHi('Вася');//Привет, Вася


Function Declaration
«Классическое» объявление функции, о котором мы говорили до этого, вида 
	function имя(параметры) {...}, называется в спецификации языка «Function Declaration».

Function Declaration – функция, объявленная в основном потоке кода.
Основное отличие между ними: функции, объявленные как Function Declaration, создаются 
	интерпретатором до выполнения кода.
Поэтому их можно вызвать до объявления, например:
	sayHi("Вася"); // Привет, Вася

	function sayHi(name) {
	  alert( "Привет, " + name );
	}

А если бы это было объявление Function Expression, то такой вызов бы не сработал:
	sayHi("Вася"); // ошибка! sayHi is not a function

	var sayHi = function(name) {
	  alert( "Привет, " + name );
	}

Это из-за того, что JavaScript перед запуском кода ищет в нём Function Declaration 
	(их легко найти: они не являются частью выражений и начинаются со слова function) и обрабатывает их.
А Function Expression создаются в процессе выполнения выражения, в котором созданы, 
	в данном случае – функция будет создана при операции присваивания sayHi = function...


                             Function Declaration	             	  	Function Expression
Время создания	             До выполнения первой строчки кода.		  Когда управление достигает строки 
																																	  с функцией.
Можно вызвать до объявления	 Да (т.к. создаётся заранее)	          Нет
Условное объявление в if	   Не работает	                          Работает

// Function Expression
var f = function() { ... }

// Function Declaration
function f() { ... }

Анонимные функции
Функциональное выражение, которое не записывается в переменную, называют анонимной функцией.
	function ask(question, yes, no) {
	  if (confirm(question)) yes()
	  else no();
	}

	ask(
	  "Вы согласны?",
	  function() { alert("Вы согласились."); },
	  function() { alert("Вы отменили выполнение."); }
	);

/*================================= Взаимодействие: alert, prompt, confirm  ===================================================*/

Встроенные функции alert, prompt и confirm.

alert - показывает сообщение.
// Это небольшое окно с сообщением называется модальным окном. Понятие модальное означает, что пользователь не может взаимодействовать 
//	с интерфейсом остальной части страницы, нажимать на другие кнопки и т.д. до тех пор, пока взаимодействует с окном. В данном 
//	случае – пока не будет нажата кнопка «OK».

prompt - показывает сообщение и запрашивает ввод текста от пользователя. Возвращает напечатанный в поле ввода текст или null, если 
	была нажата кнопка «Отмена» или Esc с клавиатуры.

Функция prompt принимает два аргумента:

result = prompt(title, [default]);
 // title - текст для отображения в окне.
 // default - устанавливает начальное значение в поле для текста в окне.

Пользователь также может отменить ввод нажатием на кнопку «Отмена» или нажав на клавишу Esc. В этом случае значением result станет null.

confirm - показывает сообщение и ждёт, пока пользователь нажмёт OK или Отмена. Возвращает true, если нажата OK, и false, если 
	нажата кнопка «Отмена» или Esc с клавиатуры.

	let isBoss = confirm("Ты здесь главный?");
	alert( isBoss ); // true, если нажата OK

Все эти методы являются модальными: останавливают выполнение скриптов и не позволяют пользователю взаимодействовать с остальной частью 
	страницы до тех пор, пока окно не будет закрыто.