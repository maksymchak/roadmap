1.Типы данных
	- Числа
	- строки
	- булевые значения
	- объекты
	- массивы
	- Массив: перебирающие методы
	- null, undefined, преобразование типов, typeof


/**************************************** Test *********************************************/
1. Блок (Числа)
- Какой тип имеют числа ?
- В каком формате храняться числа ?
- В каких системах исчесления можно записывать числа в js ?
- Что такое Infinity ?
- Показать на практике бесконечность.
- Что будет выведено на экран ?
	alert( Infinity + 5 == Infinity );
- Что такое NaN ?
- Пример на практике значения NaN.
- Чему может быть равен NaN ?
- Как сделать проверку на значение NaN ?
- Произвести операцию с NaN
- Как отличить обычные числа от спецыальных значений (показать на практике) ? 
- Переобразуйте значение в число явным способом.
- Переобразуйте из строки в целое число.
- Переобразуйте из строки в дробное число.
- Округлите число
- Что такое BigInt ?
- Зачем нужны BigInt ?

2. Блок (Cтроки)
- Используйте спец. символ перевод строки.
- Используйте екран для кавычек.
- Получить длину строки.
- Получить символ из строки 2-мя способами.
- Изменить регистр строки.
- Найти подстроку.
- Получить подстроку

3. Блок (Булевые значения)
- Используйте операторы сравнения.
- Используйте логические значения.
- Используйте сравнение разных типов.
- Используйте строгое равенство.
- Используйте сравнение с null и undefined.
- Используйте логические операторы

4. Блок (Объекты)
- Что такое ассоциативный массив.
- Используйте 2 способа создания обьекта.
- Создайте, получите и удалите свойство обьекта.
- Сделать проверку есть ли в объекте свойство 2-мя способами.
- Использовать доступ к свойству через скобки

5. Блок (массивы)
- Что такое массив ?
- Создать массив двумя способами.
- Получить нужный элемент из массива, изменить, добавить.
- Получить число элементов, хранимых в массиве.
- Удалить последний элемент из массива.
- Добавить элемент в конец массива.
- Анологично удалить и добавить первый элемент из массива.
- Передать массив по ссылке.
- Создать многомерный массив.
- Превратить строку в массив.
- Склеить массив в строку.
- Удалить элемент из массива через delete.
- Удалить, вставить, заменить элементы при помощи splice.
- Использовать метод slice.
- Отсортировать массив.
- Поменять порядок элементов в массиве на обратный.
- Использовать поиск элемента в массиве.
- Обьеденить массивы

6. Блок (Массив: перебирающие методы)
- Использовать метод forEach.
- Использовать метод filter.
- Использовать метод map.
- Использовать метод every/some.
- Использовать метод reduce

7. Блок (null, undefined, преобразование типов, typeof)
- Что такое null ?
- Что такое undefined ?
- Используйте null и undefined.
- Используйте строковое преобразование.
- Используйте Численное преобразование.
- Используйте логическое преобразование.
- Узнать тип аргумента.
- Почему тип null - обьект?

/******************************************************************************************/


/*================================= Числа ===================================================*/

Переменная в JavaScript может содержать любые тип данных - такие языки называются «динамически типизированными».

В JavaScript есть 8 основных типов.
 * number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
 * bigint для целых чисел произвольной длины.
 * string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
 * boolean для true/false.
 * null для неизвестных значений – отдельный тип, имеющий одно значение null.
 * undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
 * object для более сложных структур данных.
 * symbol для уникальных идентификаторов.


Все числа в JavaScript, как целые так и дробные, имеют тип Number и хранятся в 64-битном формате.
	Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые относятся 
	к этому типу данных: Infinity, -Infinity и NaN. 

В JavaScript можно записывать числа не только в десятичной, но и в шестнадцатеричной 
 (начинается с 0x) системе счисления:

	alert( 0xFF ); // 255 в шестнадцатиричной системе

Деление на ноль, Infinity. Infinity – особенное численное значение, которое ведет себя в точности 
 как математическая бесконечность ∞. Бесконечность можно присвоить и в явном виде: var x = Infinity.
	alert( 1 / 0 ); // Infinity
	alert( 12345 / 0 ); // Infinity
	alert( Infinity > 1234567890 ); // true
	alert( Infinity + 5 == Infinity ); // true - Добавление к бесконечности не меняет её.

NaN - если математическая операция не может быть совершена, то возвращается специальное значение 
 NaN (Not-A-Number). Например, деление 0/0 в математическом смысле неопределено, поэтому его результат NaN.
 NaN – единственное в своем роде, которое не равно ничему, включая себя.
 	alert( 0 / 0 ); // NaN - обозначения математической ошибки
 	if (NaN == NaN) alert( "==" ); // Ни один вызов

Значение NaN можно проверить специальной функцией isNaN(n), которая преобразует аргумент к числу и 
 возвращает true, если получилось NaN, и false – для любого другого значения.
	var n = 0 / 0;
	alert( isNaN(n) ); // true
	
	alert( isNaN("12") ); // false, строка преобразовалась к обычному числу 12

Значение NaN «прилипчиво». Любая операция с NaN возвращает NaN.

Для того чтобы отличить «обычные» числа от таких специальных значений, существует функция isFinite.
	alert( isFinite(1) ); // true
	alert( isFinite(Infinity) ); // false
	alert( isFinite(NaN) ); // false

Большинство арифметических операций и математических функций преобразуют значение в число автоматически.
Для того чтобы сделать это явно, обычно перед значением ставят унарный плюс '+':
	var s = "12.34";
	alert( +s ); // 12.34
При этом, если строка не является в точности числом, то результат будет NaN:
	alert( +"12test" ); // NaN
	
Исключения:
	alert( +"  -12" ); // -12
	alert( +" \n34  \n" ); // 34, перевод строки \n является пробельным символом
	alert( +"" ); // 0, пустая строка становится нулем
	alert( +"1 2" ); // NaN, пробел посередине числа - ошибка

Функция parseInt и ее аналог parseFloat преобразуют строку символ за символом, пока это возможно.
  При возникновении ошибки возвращается число, которое получилось. Функция parseInt читает из 
  строки целое число, а parseFloat – дробное.
 	alert( parseInt('12px') ) // 12, ошибка на символе 'p'
	alert( parseFloat('12.3.4') ) // 12.3, ошибка на второй точке

Math.floor - Округляет вниз
Math.ceil - Округляет вверх
Math.round - Округляет до ближайшего целого
	alert( Math.floor(3.1) );  // 3
	alert( Math.ceil(3.1) );   // 4
	alert( Math.round(3.1) );  // 3


/*================================= BigInt ===================================================*/

В JavaScript тип «number» не может содержать числа больше, чем (2*53-1). Для большинства случаев этого 
	достаточно. Но иногда нам нужны действительно гигантские числа. Тип BigInt был добавлен в JavaScript, 
	чтобы дать возможность работать с целыми числами произвольной длины.

Чтобы создать значение типа BigInt, необходимо добавить n в конец числового литерала:

// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;

/*================================= symbol ===================================================*/

symbol (символ) используется для создания уникальных идентификаторов в объектах.

/*================================= Строки ===================================================*/

В JavaScript любые текстовые данные являются строками.

Строка (string) в JavaScript должна быть заключена в кавычки.

В JavaScript существует три типа кавычек:
* Двойные кавычки: "Привет".
* Одинарные кавычки: 'Привет'.
* Обратные кавычки: `Привет`.

Все строки имеют внутреннюю кодировку Юникод.

Строки могут содержать специальные символы. Самый часто используемый из таких символов – это «перевод строки».
  Он обозначается как \n, например:
  alert( 'Привет\nМир' ); // выведет "Мир" на новой строке

Если строка в двойных кавычках, то внутренние двойные кавычки внутри должны быть экранированы, то 
есть снабжены обратным слешем \.
	var str = "I'm a JavaScript \"programmer\" ";
	alert( str ); // I'm a JavaScript "programmer"

Методы и свойства:
  Одно из самых частых действий со строкой – это получение ее длины:
	var str = "My\n"; // 3 символа. Третий - перевод строки
	alert( str.length ); // 3

  Чтобы получить символ, используйте вызов charAt(позиция). Первый символ имеет позицию 0:
	var str = "jQuery";
	alert( str.charAt(0) ); // "j"
  Также для доступа к символу можно использовать квадратные скобки:
	var str = "Я - современный браузер!";
	alert( str[0] ); // "Я"

Обратите внимание, str.length – это свойство строки, а str.charAt(pos) – метод, т.е. функция.
Содержимое строки в JavaScript нельзя изменять. Нельзя взять символ посередине и заменить его. 
  Как только строка создана – она такая навсегда.

Методы toLowerCase() и toUpperCase() меняют регистр строки на нижний/верхний:
	alert( "Интерфейс".toUpperCase() ); // ИНТЕРФЕЙС
	alert( "Интерфейс" [0].toLowerCase() ); // 'и'

Для поиска подстроки есть метод indexOf(подстрока[, начальная_позиция]). Он возвращает позицию, 
  на которой находится подстрока или -1, если ничего не найдено. Например:
	var str = "Widget with id";
	alert( str.indexOf("Widget") ); // 0, т.к. "Widget" найден прямо в начале str
	alert( str.indexOf("id") ); // 1, т.к. "id" найден, начиная с позиции 1
	alert( str.indexOf("widget") ); // -1, не найдено, так как поиск учитывает регистр

Взятие подстроки: substring, substr, slice.
  substring(start [, end])
	var str = "stringify";
	alert(str.substring(0,1)); // "s", символы с позиции 0 по 1 не включая 1.

  substr(start [, length])
	var str = "stringify";
	str = str.substr(2,4); // ring, со 2-й позиции 4 символа
	alert(str) // ring

  slice(start [, end])
  	// возвращает часть строки от позиции start до end, но не включая, позиции end.


Метод repeat() конструирует и возвращает новую строку, содержащую указанное количество соединённых 
	вместе копий строки, на которой он был вызван.
	// str.repeat(count)

	'абв'.repeat(-1);   // RangeError
	'абв'.repeat(0);    // ''
	'абв'.repeat(1);    // 'абв'
	'абв'.repeat(2);    // 'абвабв'


/*================================= Булевые значения ===================================================*/

Операторы сравнения:
- Больше/меньше: a > b, a < b.
- Больше/меньше или равно: a >= b, a <= b.
- Равно a == b. Для сравнения используется два символа равенства '='. 
  Один символ a = b означал бы присваивание.
- «Не равно». В математике он пишется как ≠, в JavaScript – знак равенства 
  с восклицательным знаком перед ним !=.

Логические значения:
	true – имеет смысл «да», «верно», «истина».
	false – означает «нет», «неверно», «ложь».

	alert( 2 > 1 ); // true, верно
	alert( 2 == 1 ); // false, неверно
	alert( 2 != 1 ); // true

Строки сравниваются побуквенно:
	alert( 'Б' > 'А' ); // true

При сравнении значений разных типов, используется числовое преобразование.
Сравнение разных типов:
	alert( '2' > 1 ); // true, сравнивается как 2 > 1
	alert( '01' == 1 ); // true, сравнивается как 1 == 1
	alert( false == 0 ); // true, false становится числом 0
	alert( true == 1 ); // true, так как true становится числом 1.

Для проверки равенства без преобразования типов используются операторы строгого 
  равенства === (тройное равно) и !==.
	alert( 0 === false ); // false, т.к. типы различны

Сравнение с null и undefined:
- Значения null и undefined равны == друг другу и не равны чему бы то ни было ещё. 
  Это жёсткое правило буквально прописано в спецификации языка.
- При преобразовании в число null становится 0, а undefined становится NaN.

Логические операторы:
Для операций над логическими значениями в JavaScript есть || (ИЛИ), && (И) и ! (НЕ).
Другими словами, цепочка ИЛИ "||" возвращает первое истинное значение или последнее, 
	если такое значение не найдено.
- || (ИЛИ) // Если хотя бы один из аргументов true, то возвращает true, иначе – false.
		   // a || b || c || .... Если первый аргумент – true, то результат заведомо будет 
		   // true (хотя бы одно из значений – true), и остальные значения игнорируются.

- && (И) // В классическом программировании И возвращает true, если оба аргумента истинны, а иначе – false.
	alert( true && true ); // true
	alert( false && true ); // false

- ! (НЕ) // Сначала приводит аргумент к логическому типу true/false, затем возвращает противоположное значение.
	alert( !true ); // false
	alert( !0 ); // true
В частности, двойное НЕ используют для преобразования значений к логическому типу:
	alert( !!"non-empty string" ); // true
	alert( !!null ); // false
То есть первое НЕ преобразует значение в логическое значение и возвращает обратное, а второе НЕ 
	снова инвертирует его. В конце мы имеем простое преобразование значения в логическое.

Итого
 * Операторы сравнения возвращают значения логического типа.
 * Строки сравниваются посимвольно в лексикографическом порядке.
 * Значения разных типов при сравнении приводятся к числу. Исключением является 
 	сравнение с помощью операторов строгого равенства/неравенства.
 * Значения null и undefined равны == друг другу и не равны любому другому значению.
 * Будьте осторожны при использовании операторов сравнений > и < с переменными, которые 
 	могут принимать значения null/undefined. Хорошей идеей будет сделать отдельную проверку на null/undefined.


/*================================= Объекты ===================================================*/

Объекты в JavaScript сочетают в себе два важных функционала.
  Первый – это ассоциативный массив: структура, пригодная для хранения любых данных.
  Второй – языковые возможности для объектно-ориентированного программирования.

Ассоциативный массив – структура данных, в которой можно хранить любые данные в формате ключ-значение.
  Её можно легко представить как шкаф с подписанными ящиками. Все данные хранятся в ящичках. По имени 
  можно легко найти ящик и взять то значение, которое в нём лежит.

Создание объектов:
 obj = new Object();
 obj = {}; // пустые фигурные скобки

Объект может содержать в себе любые значения, которые называются свойствами объекта.
Основные операции с объектами – это создание, получение и удаление свойств.
	var person = {};
	person.age = 25;
	alert( person.age );
	delete person.age;

Иногда бывает нужно проверить, есть ли в объекте свойство с определенным ключом. Для этого есть особый 
  оператор: "in". Его синтаксис: "prop" in obj, причем имя свойства – в виде строки.
	if ("name" in person) {
	  alert( "Свойство name существует!" );
	}  

Впрочем, чаще используется другой способ – сравнение значения с undefined.
	var person = {
	  name: "Василий"
	};
	alert( person.lalala === undefined ); // true, свойства нет
	alert( person.name === undefined ); // false, свойство есть.

Существует альтернативный синтаксис работы со свойствами, использующий квадратные скобки объект['свойство'].
 Записи person['name'] и person.name идентичны, но квадратные скобки позволяют использовать в качестве имени 
 свойства любую строку:
	var person = {};
	person['любимый стиль музыки'] = 'Джаз';

Квадратные скобки также позволяют обратиться к свойству, имя которого хранится в переменной:
	var person = {};
	person.age = 25;
	var key = 'age';
	alert( person[key] ); // выведет person['age']


/*================================= Массивы ===================================================*/

Массив – разновидность объекта, которая предназначена для хранения пронумерованных значений 
  и предлагает дополнительные методы для удобного манипулирования такой коллекцией.
	var arr = [];

Существует еще один синтаксис для создания массива:
	var arr = new Array("Яблоко", "Груша", "и т.п.");

Чтобы получить нужный элемент из массива – указывается его номер в квадратных скобках:
	var fruits = ["Яблоко", "Апельсин", "Слива"];
	alert( fruits[0] ); // Яблоко
	alert( fruits[1] ); // Апельсин

Общее число элементов, хранимых в массиве, содержится в его свойстве length:
	alert( fruits.length ); // 3

pop - удаляет последний элемент из массива и возвращает его:
	var fruits = ["Яблоко", "Апельсин", "Груша"];
	alert( fruits.pop() ); // удалили "Груша"
	alert( fruits ); // Яблоко, Апельсин

push - добавляет элемент в конец массива:
	var fruits = ["Яблоко", "Апельсин"];
	fruits.push("Груша");
	alert( fruits ); // Яблоко, Апельсин, Груша

shift - удаляет из массива первый элемент и возвращает его.
unshift - добавляет элемент в начало массива:

Так как это объект, то в функцию он передаётся по ссылке:
	var arr = ["нам", "не", "страшен", "серый", "волк"]
	function eat(arr) {
	  arr.pop();
	}
	eat(arr);

Массивы в JavaScript могут содержать в качестве элементов другие массивы. Это можно использовать 
  для создания многомерных массивов, например матриц:
	var matrix = [
	  [1, 2, 3],
	  [4, 5, 6],
	  [7, 8, 9]
	];
	alert( matrix[1][1] ); // центральный элемент

Метод split(s) позволяет превратить строку в массив, разбив ее по разделителю s - str.split('s').
	var names = 'Маша, Петя, Марина, Василий';
	var arr = names.split(', ');

Метод join. Вызов arr.join(str) делает в точности противоположное split. Он 
  берет массив и склеивает его в строку, используя str как разделитель.
	var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
	var str = arr.join(';');
	alert( str ); // Маша;Петя;Марина;Василий

Так как массивы являются объектами, то для удаления ключа можно воспользоваться обычным delete:
	var arr = ["Я", "иду", "домой"];
	delete arr[1]; // значение с индексом 1 удалено
	// теперь arr = ["Я", undefined, "домой"];

Метод splice – это универсальный раскладной нож для работы с массивами. 
	arr.splice(index[, deleteCount, elem1, ..., elemN])
	//Удалить deleteCount элементов, начиная с номера index, а затем 
	// вставить elem1, ..., elemN на их место. Возвращает массив из 
	// удалённых элементов.

	var arr = ["Я", "изучаю", "JavaScript"];
	arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
	alert( arr ); //  осталось ["Я", "JavaScript"]

	var arr = ["Я", "сейчас", "изучаю", "JavaScript"];
	// удалить 3 первых элемента и добавить другие вместо них
	arr.splice(0, 3, "Мы", "изучаем")
	alert( arr ) // теперь ["Мы", "изучаем", "JavaScript"]

Метод slice(begin, end) копирует участок массива от begin до end, не включая end. 
  Исходный массив при этом не меняется.
	var arr = ["Почему", "надо", "учить", "JavaScript"];
	var arr2 = arr.slice(1, 3); // элементы 1, 2 (не включая 3)
	alert( arr2 ); // надо, учить

Метод sort() сортирует массив на месте. Для указания своего порядка сортировки в метод 
  arr.sort(fn) нужно передать функцию fn от двух элементов, которая умеет сравнивать их.
	function compareNumeric(a, b) {
	  if (a > b) return 1;
	  if (a < b) return -1;
	}
	var arr = [ 1, 2, 15 ];
	arr.sort(compareNumeric);
	alert(arr);  // 1, 2, 15
Функцию compareNumeric для сравнения элементов-чисел можно упростить до одной строчки.
	function compareNumeric(a, b) {
	  return a - b;
	}

Метод arr.reverse() меняет порядок элементов в массиве на обратный.
	var arr = [1, 2, 3];
	arr.reverse();
	alert( arr ); // 3,2,1

Метод «arr.indexOf(searchElement[, fromIndex])» возвращает номер элемента searchElement 
  в массиве arr или -1, если его нет. Поиск начинается с номера fromIndex, если он указан. 
  Если нет – с начала массива.
	var arr = [1, 0, false];
	alert( arr.indexOf(0) ); // 1
	alert( arr.indexOf(false) ); // 2
	alert( arr.indexOf(null) ); // -1

concat – объединяет массивы. Метод arr.concat(value1, value2, … valueN) создаёт новый массив, 
  в который копируются элементы из arr, а также value1, value2, ... valueN.
	var arr = [1, 2];
	var newArr = arr.concat(3, 4);
	alert( newArr ); // 1,2,3,4


/*=========================== Массив: перебирающие методы ======================================*/

Метод «arr.forEach(callback[, thisArg])» для каждого элемента массива вызывает функцию callback.
  Этой функции он передаёт три параметра callback(item, i, arr). Метод forEach ничего не возвращает.
	// item – очередной элемент массива.
	// i – его номер.
	// arr – массив, который перебирается.

	var arr = ["Яблоко", "Апельсин", "Груша"];
	arr.forEach(function(item, i, arr) {
	  alert( i + ": " + item + " (массив:" + arr + ")" );
	});

Метод «arr.filter(callback[, thisArg])» используется для фильтрации массива через функцию. Он создаёт 
  новый массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) 
  возвратит true.
	var arr = [1, -1, 2, -2, 3];
	var positiveArr = arr.filter(function(number) {
	  return number > 0;
	});
	alert( positiveArr ); // 1,2,3

Метод «arr.map(callback[, thisArg])» используется для трансформации массива. Он создаёт новый массив, 
  который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента arr.
	var names = ['HTML', 'CSS', 'JavaScript'];
	var nameLengths = names.map(function(name) {
	  return name.length;
	});
	// получили массив с длинами
	alert( nameLengths ); // 4,3,10

Метод «arr.every(callback[, thisArg])» возвращает true, если вызов callback вернёт true для каждого 
  элемента arr.
Метод «arr.some(callback[, thisArg])» возвращает true, если вызов callback вернёт true для какого-нибудь 
  элемента arr.
	var arr = [1, -1, 2, -2, 3];
	function isPositive(number) {
	  return number > 0;
	}
	alert( arr.every(isPositive) ); // false, не все положительные
	alert( arr.some(isPositive) ); // true, есть хоть одно положительное

Метод «arr.reduce(callback[, initialValue])» используется для последовательной обработки каждого элемента 
  массива с сохранением промежуточного результата. Аргументы функции callback(previousValue, currentItem, index, arr):
	// previousValue – последний результат вызова функции, он же «промежуточный результат».
	// currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
	// index – номер текущего элемента.
	// arr – обрабатываемый массив.

Массив перебирающие методы – reduce и reduceRight
//Данные методы используються для свертки массива.
	var array = [1, 2, 3, 4, 5, 6, 7, 8];

	array = array.reduce(function(sum, elem) {
		return sum += elem;
	}, 0);
	console.log(array);
	//sum - промежуточный результат вычесления


//Данные методы используються также для розвертывания многомерного массива.
	var flattened = [[0, 1], [2, 3], [4, 5]];

	array = flattened.reduce(function(sum, elem) {
		return sum.concat(elem);
	});
	console.log(array); //[0, 1, 2, 3, 4, 5]


/*=========================== null, undefined, преобразование типов, typeof  =============================*/

Значение null не относится ни к одному из типов выше, а образует свой отдельный тип, состоящий из 
  единственного значения null:
	var age = null;

В JavaScript null не является «ссылкой на несуществующий объект» или «нулевым указателем», как в 
  некоторых других языках. Это просто специальное значение, которое имеет смысл «ничего» или 
  «значение неизвестно».

Значение undefined, как и null, образует свой собственный тип, состоящий из одного этого значения. 
  Оно имеет смысл «значение не присвоено».

Если переменная объявлена, но в неё ничего не записано, то её значение как раз и есть undefined:
	var x;
	alert( x ); // выведет "undefined"
Этот стандарт четко определяет, что значение undefined можно получить при доступе к неинициализированным 
  переменным, несуществующим свойствам объекта, несуществующим элементам массива и тому подобному.
	let number;  
	number;     // => undefined  
	let movie = { name: 'Interstellar' };  
	movie.year; // => undefined  
	let movies = ['Interstellar', 'Alexander'];  
	movies[3];  // => undefined

Всего есть три преобразования:
 -Строковое преобразование.
 -Численное преобразование.
 -Преобразование к логическому значению.

Строковое преобразование.
	var a = true;
	alert( a ); // "true"
Также для явного преобразования применяется оператор "+", у которого один из аргументов строка. 
  В этом случае он приводит к строке и другой аргумент, например:
	alert( true + "test" ); // "truetest"
	alert( "123" + undefined ); // "123undefined"

Численное преобразование.
Численное преобразование происходит в математических функциях и выражениях, а также при сравнении 
  данных различных типов (кроме сравнений ===, !==). Для преобразования к числу в явном виде можно 
  поставить перед выражением унарный плюс "+":
	var a = +"123"; // 123

	undefined  //NaN
	null	   //0
	true/false // 1/0
	Строка	// пробельные символы по краям обрезаются, далее, если остаётся пустая строка, то 0, 
	        // иначе из непустой строки "считывается" число, при ошибке результат NaN.

Логическое преобразование.
Преобразование к true/false происходит в логическом контексте, таком как if(value), и при применении 
  логических операторов. Все значения, которые интуитивно «пусты», становятся false. Их несколько: 0, 
  пустая строка, null, undefined и NaN. Остальное, в том числе и любые объекты – true.
	
	undefined, null	  //false
	Числа	          //все true, кроме 0, NaN -- false.
	Строки            //все true, кроме пустой строки "" -- false
	Объекты           //всегда true

Заметим, что строчка с нулём "0" это true

Оператор typeof возвращает тип аргумента. Результатом typeof является строка, содержащая тип:
Синтаксис оператора: typeof x.

	typeof undefined // "undefined"
	typeof 0 // "number"
	typeof 10n // "bigint"
	typeof true // "boolean"
	typeof "foo" // "string"
	typeof Symbol("id") // "symbol"
	typeof Math // "object"  (1)
	typeof null // "object"  (2)
	typeof alert // "function"  (3)

//(1)Math — это встроенный объект, который предоставляет математические операции и константы. 
//(2)Результат typeof null == "object" – это официально признанная ошибка в языке, которая 
//    сохраняется для совместимости. На самом деле null – это не объект, а отдельный тип данных.
//(3)Вызов typeof alert возвращает "function", потому что alert является функцией.



/*=========================== Итого =============================*/

Строгий режим
Чтобы по максимуму использовать возможности современного JavaScript, все скрипты рекомендуется 
	начинать с добавления директивы "use strict".
'use strict';


Имя переменной может включать:

- Буквы и цифры, однако цифра не может быть первым символом.
- Символы $ и _ используются наряду с буквами.
- Иероглифы и символы нелатинского алфавита также допустимы, но обычно не используются.


Всего существует 8 типов данных:

- number для целых и вещественных чисел,
- bigint для работы с целыми числами произвольной длины,
- string для строк,
- boolean для логических значений истинности или ложности: true/false,
- null – тип с единственным значением null, т.е. «пустое значение» или «значение не существует»,
- undefined – тип с единственным значением undefined, т.е. «значение не задано»,
- object и symbol – сложные структуры данных и уникальные идентификаторы; их мы ещё не изучили.
- Оператор typeof возвращает тип значения переменной, с двумя исключениями:

typeof null == "object" // ошибка в языке
typeof function(){} == "function" // именно для функций

// https://learn.javascript.ru/javascript-specials