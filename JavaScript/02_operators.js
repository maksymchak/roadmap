2. Основные операторы и конструкции языка
	- if, For, While, Break, continue
	- Switch..case, For...of, For...in, try...catch

/**************************************** Test *********************************************/
1. Блок (if, For, While, Break, continue)
- Опишите как работает оператор if.
- Использовать if с несколькими условиями.
- Использовать оператор вопросительный знак.
- Как работает цикл for ?
- Зачем нужны циклы ?
- Опишите как работает цикл while.
- Использовать Break.
- Использовать continue.
- Используйте метку для break/continue /

2. Блок (Switch..case, For...of, For...in, try...catch
- Используйте конструкцию switch.
- Чем отличаеться For...of от For...in ?
- Используйте цикл For...of.
- Используйте цикл For...in
- Зачем нужна конструкция try..catch ?
- Опишите как работает try..catch.
- Используйте try..catch.
- Используйте throw и finally.

/******************************************************************************************/


/*================================= if ===================================================*/

Иногда, в зависимости от условия, нужно выполнить различные действия. Для этого используется оператор if.
Оператор if (...) вычисляет и преобразует выражение в скобках к логическому типу.

Оператор if («если») получает условие, в примере это year != 2011. Он вычисляет его, и если 
  результат – true, то выполняет команду.
	var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');
	if (year != 2011) alert( 'А вот и неправильно!' );

В логическом контексте:
  Число 0, пустая строка "", null и undefined, а также NaN являются false,
  Остальные значения – true.

Необязательный блок else («иначе») выполняется, если условие неверно.
Бывает нужно проверить несколько вариантов условия. Для этого используется блок else if .... Например:
	var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');
	if (year < 2011) {
	  alert( 'Это слишком рано..' );
	} else if (year > 2011) {
	  alert( 'Это поздновато..' );
	} else {
	  alert( 'Да, точно в этом году!' );
	}

Оператор вопросительный знак (тернарный оператор) '?' позволяет делать это короче и проще.
Проверяется условие, затем если оно верно – возвращается значение1, если неверно – значение2, например:
// условие ? значение1 : значение2
	access = (age > 14) ? true : false;
	access = age > 14 ? true : false;


/*================================= For ===================================================*/

Чаще всего применяется цикл for.
	for (начало; условие; шаг) {
	  // ... тело цикла ...
	}

Цикл выполняется так:
- Начало: i=0 выполняется один-единственный раз, при заходе в цикл.
- Условие: i<3 проверяется перед каждой итерацией и при входе в цикл, если оно нарушено, то происходит выход.
- Тело: alert(i).
- Шаг: i++ выполняется после тела на каждой итерации, но перед проверкой условия.
- Идти на шаг 2.
	var i;

	for (i = 0; i < 3; i++) {
	  alert( i );
	}

//Иными словами, поток выполнения: начало → (если условие → тело → шаг) → (если условие → тело → шаг) → … и 
// так далее, пока верно условие.

/*================================= While ===================================================*/

При написании скриптов зачастую встает задача сделать однотипное действие много раз.
Например, вывести товары из списка один за другим.

Пока условие верно – выполняется код из тела цикла. Цикл while имеет вид:
	while (условие) {
	  // код, тело цикла
	}

Проверку условия можно поставить под телом цикла, используя специальный синтаксис do..while:
	do {
	  // тело цикла
	} while (условие);

Цикл, описанный, таким образом, сначала выполняет тело, а затем проверяет условие.


/*================================= Break ===================================================*/

Выйти из цикла можно не только при проверке условия но и, вообще, в любой момент. Эту возможность 
  обеспечивает директива break.
	var sum = 0;

	while (true) {

	  var value = +prompt("Введите число", '');

	  if (!value) break; // (*)

	  sum += value;

	}
	alert( 'Сумма: ' + sum );

/*================================= continue ===================================================*/

Директива continue прекращает выполнение текущей итерации цикла.
Она – в некотором роде «младшая сестра» директивы break: прерывает не весь цикл, а только текущее 
  выполнение его тела, как будто оно закончилось.

Её используют, если понятно, что на текущем повторе цикла делать больше нечего.
Например, цикл ниже использует continue, чтобы не выводить чётные значения:
	for (var i = 0; i < 10; i++) {
	  if (i % 2 == 0) continue;
	  alert(i);
	}


/*============================== Метки для break/continue ===========================================*/

Бывает нужно выйти одновременно из нескольких уровней цикла.
Например, внутри цикла по i находится цикл по j, и при выполнении некоторого условия мы бы хотели выйти 
  из обоих циклов сразу:
	outer: for (var i = 0; i < 3; i++) {
	  for (var j = 0; j < 3; j++) {
	    var input = prompt('Значение в координатах '+i+','+j, '');
	    // если отмена ввода или пустая строка -
	    // завершить оба цикла
	    if (!input) break outer; // (*)
	  }
	}
	alert('Готово!');

В коде выше для этого использована метка. Метка имеет вид "имя:", имя должно быть уникальным. Она ставится 
  перед циклом, вот так:
	outer: for (var i = 0; i < 3; i++) { ... }
//Вызов break outer ищет ближайший внешний цикл с такой меткой и переходит в его конец.
//В примере выше это означает, что будет разорван самый внешний цикл и управление перейдёт на alert.
//Директива continue также может быть использована с меткой, в этом случае управление перепрыгнет на 
//  следующую итерацию цикла с меткой.


/*================================= switch ===================================================*/

Конструкция switch заменяет собой сразу несколько if.
	switch(x) {
	  case 'value1':  // if (x === 'value1')
	    ...
	    [break]

	  case 'value2':  // if (x === 'value2')
	    ...
	    [break]

	  default:
	    ...
	    [break]
	}

// Переменная x проверяется на строгое равенство первому значению value1, затем второму value2 и так далее.
// Если соответствие установлено – switch начинает выполняться от соответствующей директивы case и далее, 
//   до ближайшего break (или до конца switch).
// Если ни один case не совпал – выполняется (если есть) вариант default. При этом case называют вариантами switch.

	var a = 2 + 2;
	switch (a) {
	  case 3:
	    alert( 'Маловато' );
	    break;
	  case 4:
	    alert( 'В точку!' );
	    break;
	  case 5:
	    alert( 'Перебор' );
	    break;
	  default:
	    alert( 'Я таких значений не знаю' );
	}

Если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются.
Несколько значений case можно группировать.


/*================================= For...of ===================================================*/

Новый цикл for .. of предназначен для итерации по элементам коллекций, но в отличие 
от цикла for .. in при итерациях используется значение, а не ключ.

Чтобы понять, как он работает достаточно сравнить результаты выполнения циклов for .. in и for .. of для массивов:
	var arr = ['a', 'b', 'c', 'd', 'e', 'f'];

	for (var key in arr) {
	  console.log(key); // 0 1 2 3 4 5
	}

	for (let value of arr) {
	  console.log(value); // 'a' 'b' 'c' 'd' 'e' 'f'
	}

Цикл for .. of для массивов работает схожим образом с forEach, но имеет свои плюсы: 
	как и в любом другом цикле можно использовать continue и break для контроля итераций, 
	что при использовании forEach невозможно. Таким образом, основное преимущество цикла 
	for .. of над методом массивов forEach заключается в широких возможностях его оптимизации.

	arr.forEach(item => {
	  // нельзя прервать — выполнится для всех элементов массива в независимости от условий
		console.log(item); // 'a' 'b' 'c' 'd' 'e' 'f'
	});

	for (let value of arr) {
	  if (value === 'c') { continue; }
	  if (value === 'e') { break; }
	  console.log(value); // 'a' 'b' 'd'
	}


/*================================= For...in ===================================================*/

Для перебора всех свойств из объекта используется цикл по свойствам for..in. Эта синтаксическая 
  конструкция отличается от рассмотренного ранее цикла for(;;).
	for (key in obj) {
	  /* ... делать что-то с obj[key] ... */
	}

При этом for..in последовательно переберёт свойства объекта obj, имя каждого свойства будет записано 
  в key и вызвано тело цикла.
	var menu = {
	  width: 300,
	  height: 200,
	  title: "Menu"
	};

	for (var key in menu) {
	  // этот код будет вызван для каждого свойства объекта
	  // ..и выведет имя свойства и его значение

	  alert( "Ключ: " + key + " значение: " + menu[key] );
	}

/*================================= try...catch ===================================================*/

Как бы мы хорошо ни программировали, в коде бывают ошибки. Или, как их иначе называют, «исключительные ситуации» 
  (исключения). Но бывают случаи, когда нам хотелось бы как-то контролировать ситуацию, чтобы скрипт не просто 
   «упал», а сделал что-то разумное.

Конструкция try..catch состоит из двух основных блоков: try, и затем catch:
	try {
	  // код ...
	} catch (err) {
	  // обработка ошибки
	}

Работает она так:
-Выполняется код внутри блока try.
-Если в нём ошибок нет, то блок catch(err) игнорируется, то есть выполнение доходит до конца try и потом 
 прыгает через catch.
-Если в нём возникнет ошибка, то выполнение try на ней прерывается, и управление прыгает в начало блока catch(err).
-При этом переменная err (можно выбрать и другое название) будет содержать объект ошибки с подробной информацией 
 о произошедшем.

Таким образом, при ошибке в try скрипт не «падает», и мы получаем возможность обработать ошибку внутри catch.

Объект ошибки:
//name - Тип ошибки. Например, при обращении к несуществующей переменной: "ReferenceError".
//message - Текстовое сообщение о деталях ошибки.
//stack - содержит строку с информацией о последовательности вызовов, которая привела к ошибке.

Оператор throw генерирует ошибку. Синтаксис: throw <объект ошибки>.
Секция finally не обязательна, но если она есть, то она выполняется всегда:
	try {
	   .. пробуем выполнить код ..
	} catch(e) {
	   .. перехватываем исключение ..
	} finally {
	   .. выполняем всегда ..
	}


