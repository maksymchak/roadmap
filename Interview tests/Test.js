1. Отличие var, let, const?

- Область видимости переменной let – блок {...}. Как мы помним, переменная, объявленная 
  через var, видна везде в функции.
- Переменная let видна только после объявления.
- Все объявления переменных var «всплывают» в самый верх. Это поведение называется «hoisting»
 (всплытие, поднятие).
- Объявление const задаёт константу, то есть переменную, которую нельзя переопределить.
  В случае c массивом или обьектом то от изменения защищена сама константа, но не свойства 
  внутри них.

/****************************************************************************************//

2. При инициализации переменной без значения, какое значение установится автоматически ?

undefined

/****************************************************************************************/

3. Разница между обычной и стрелочной функцией ?

- Функции стрелки сохраняют лексическое значение this. Внутри функций-стрелок – тот же this,
 что и снаружи, тоесть сылается на внешний контекст.
- Cтрелочные функции не получают псевдомассив arguments. arguments - доступ к лишним аргументам.

/****************************************************************************************//

4. Как можно копировать объект так, чтобы он не ссылался на свой экземпляр ?

var obj1 = { b: 1 };
var obj2 = { a: 2 };
let obj = Object.assign({},obj1,obj2);

console.log(obj);

//---------------------------//

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

let newArr = array1.concat(array2);

console.log(newArr);

/****************************************************************************************/

5. что такое массив ?

Массив – разновидность объекта, которая предназначена для хранения пронумерованных значений 
  и предлагает дополнительные методы для удобного манипулирования такой коллекцией.

Разновидность объектов, где индексы есть ключами к элементам, typeof === object // true

/****************************************************************************************/

6. что такое hoisting ?

Поднятие или hoisting — это механизм в JavaScript, в котором переменные и объявления функций, 
  передвигаются вверх своей области видимости перед тем, как код будет выполнен.

Хотя в действительности этого не происходит. На самом же деле, объявления переменных и функций
 попадают в память в процессе фазы компиляции, но остаются в коде на том месте, где вы их объявили.

/****************************************************************************************//

7. что такое event loop ?

js - однопоточная среда выполнения, runtime. Это значит, что стек вызовов у него один и он
     может выполнить одно действие в единицу времени.

event loop - смотрит на стек и на очередь задач, если стек пуст он берет первую задачу в очереди 
             и заталкивает его в этот стек (что заставляет код выполниться).

/****************************************************************************************//

8. что такое контекст функции(this) ?

Значение this это объект, в контексте которого выполняется Функции.

то, какое объект вызвал функцию, то и попадет в this

/****************************************************************************************/

9. как можно перебить контекст функции ?

call,apply,bind
Эти методы помогают присвоить нужный контекст исполнения для функции.

Существует несколько способов сохранения нужного контекста:
  • сохранение this в переменную;
  • использование специальных методов;
  • использование стрелочной функции.

/****************************************************************************************//

10. два способа создания объекта ?

new, функции-конструкторы, классы


/****************************************************************************************/

11. написать функцию которая реализует замыкание ?

Замыкание – это функция вместе со всеми внешними переменными, которые ей доступны.

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
  alert( counter() ); // 3  [[Scope]] -> {currentCount: 3}
 
  // создать другой счётчик, он будет независим от первого
  var counter2 = makeCounter();
  alert( counter2() ); // 1

/****************************************************************************************/

12. написать функцию: sum(1)(2)(3)

const a = b => c => d => b + c + d;


/****************************************************************************************/

13. для чего “use strict” ?

Волшебная строчка "use strict" в коде программы на JavaScript включает строгий режим.
Это спасает в случае опечаток и случайных ошибок.

/****************************************************************************************//

14. что выведет typeof typeof 1

string

/****************************************************************************************/

15. выполнится ли условие if([]) { console.log(“log”) }?

да, массив === объект, объект при переводе в логический тип === true

/****************************************************************************************/

16. 1 == ‘1’ 1 === ‘1’ Почему такое поведение?

true false второе условие сравнивает сначала по типу, потому по значению


/****************************************************************************************/

17. что используется в джс для запросов на сервер ?

fetch axios

/****************************************************************************************/

18. для чего реакт(если ответили не правильно - ничего страшного) ?

Для того, чтобы перенести рендеринг на клиенсткую сторону - так на серверной это затратно.
CSR 

/****************************************************************************************/

18. setState функция синхронная или ассинхронная ?
ассинхронная

/****************************************************************************************/

18. жизненный цикл ?

Жизненный цикл
 - Компонентам нужно выполнять код в определенные моменты своей жизни
 - К примеру, перед тем, как компонент будет удален, необходимо очистить ресурсы
 - В React для этого есть механизм - методы жизненного цикла (lifecycle hooks)

  MOUNTING
  -------
  constructor() => render() => componentDidMount()

  UPDATES
  ------
  New Props
                => render() => componentDidUpdate()
  setState

  UNMOUNTING
  -------
  componentWiilUnmount()

  ERROR
  -------
  componentDidCatch()

//MOUNTING - то, когда компонент создаеться и он первый раз отображаеться на странице  
//UPDATES - когда компонент отобразился и готов получать обновления. Происходит когда пришли
  //новые свойства или вызван setstate.
//UNMOUNTING - компанет не нужен и готов к удалению
//ERROR - этап ошибки, когда компонент получает ошибку, которая не была поймана раньше

На каждом этапе жизнененного цыкла есть методы:
  //componentDidMount() - компонент "подключен" (DOM элементы уже на странице)
  //componentDidUpdate() - компонент обновился, для обновленных свойств
  //componentWiilUnmount() - компонент будет удален (но DOM элементы еще на странице)
  //componentDidCatch() - когда в компоненте(или в его child-компонентах) ошибка

  //componentWillMount() - метод будет вызван перед тем как будет вызван render 1 раз
  //shouldComponentUpdate(nextProps, nextState) - вызывается каждый раз при обновлении объекта props или state
  //componentWillUpdate(nextProps, nextState) - вызывается перед обновлением компонента

/****************************************************************************************/

19. для чего редукс и что это такое ?

для того чтобы получить доступ к данным на всех страницах

/****************************************************************************************/

20. для чего redux-thunk ?

Фактически, мидлвейр — это просто функция, которая принимает текущий стор, следующий 
  в цепочке мидлвейр и текущий экшен и что-то делает с ним.

redux-thunk - писать асинхронные екшены в redux.

/****************************************************************************************//

21. что такое actionType, actionCreator, reducer в редукс ?

  actionType - тип экшина
  actionCreator - функция которая возвращает action
  reducer - чистая функция которая реагирует на экшины

/****************************************************************************************/

22. зачем делается bind метода в конструкторе ?

чтобы не терялась ссылка на объект
Но удобней всего исползовать стрелочные ф-ции

/****************************************************************************************/

23. Для чего reselect ?
Для повышения производительности
для того чтобы кешировать данные и лишний раз не вызывать ре-рендер компонента


/****************************************************************************************/

24. чем отличается Component от PureComponent, чем отличается PureComponent от memo ?

PureComponent делает не глубокую проверку пропсов, если пропсы одного уровня вложенности, 
  то ре-рендера компонента не будет 
PureComponent предполагает неглубокую проверку, изменения его props и state могут остаться проигнорированными.
PureComponent для классов, memo для функций(тоже делает проверку)

/****************************************************************************************/

25. зачем propTypes ?

для валидации пропсов


/****************************************************************************************/

26. как оптимизировать react приложение ?

использовать PureComponent/memo/shoudComponentUpdate(class method)

/****************************************************************************************/

27. разница между js OOP и обычным OOp ?

обычное ООП - расширяем класс наследуя другой класс имеем один главный класс(в джаве это main) 
  внутри которого другие Джс ооп - все объект которые ссылаются на свой свой класс, в котором 
  есть методы

/****************************************************************************************/

28. ?

  первый случай:
  obj.method = function(){ 
    function two() { 
      console.log(this) 
    } 
    two(); 
  } 

  Второй случай:
  obj.method = function(){ 
    const two = () => 
    console.log(this); 
    two(); 
  }
  Чем равен this второй функции в обоих случаях и почему 

//--------------///
при "use strict"
undefined
без "use strict"
window

this === obj
ну на этот вопрос ответит не то чтобы задрот, 
но тот человек который хорошо знает как и что такое this 
в джаваскрипте в целом

/****************************************************************************************/

29. какие типы данных в джс иммутабельные ?

все кроме объектов и массивов


/****************************************************************************************/

30.  ?

переписать код на async/await:
const fakeRequest = () => Promise.resolve(1);

const getData = () => {
  let a = null;
  fakeRequest().then(n => {
    a = n;
    console.log(a)
  })
}
getData();


const getData = async () => {
  let a = await fakeRequest();
  console.log(a)
}

/****************************************************************************************/

31. Рекурсия ?

Когда функция вызывает сама себя. Это называется рекурсией
В качестве первого примера использования рекурсивных вызовов – рассмотрим задачу возведения числа 
  x в натуральную степень n.
  pow(x, n) = x * pow(x, n - 1)


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

/****************************************************************************************/
32. 10-ричная и 16-ричная система исчесления цветов  ?

10-ричная
Представляем каналы ввиде фанариков:
rgb(0, 0, 0) - черный, фанарики отключены
rgb(255, 255, 255) - белый цвет, все светит ярко
rgb(255, 0, 0) - красный
rgb(0, 255, 0) - зеленый
rgb(0, 0, 255) - синий

16-ричная ( используеться по два символа на канал цвета) 0-9 A,B,C,D,E,F
// #000000 - черный
// #FFFFFF - белый
// #FF0000 - красный
// #00FF00 - зеленый
// #00FF00 - синий

/****************************************************************************************/

33. Функция translate() ?

Еще одна функция свойства transform — это translate(), с помощью которой можно переместить 
  элемент с его начальной точки. Функция принимает два параметра — один для перемещения по оси X, 
  второй — по оси Y

transform: translate(20 px, 50 px);


/****************************************************************************************/

34. position, relative ?

position: relative
Относительное позиционирование сдвигает элемент относительно его обычного положения.
Для того, чтобы применить относительное позиционирование, необходимо указать элементу 
  CSS-свойство position: relative и координаты left/right/top/bottom.
Этот стиль сдвинет элемент на 10 пикселей относительно обычной позиции по вертикали:

  position: relative;
  top: 10 px;

position: absolute
Синтаксис:

position: absolute;
Абсолютное позиционирование делает две вещи:
Элемент исчезает с того места, где он должен быть и позиционируется заново. Остальные элементы,
 располагаются так, как будто этого элемента никогда не было. Координаты top/bottom/left/right для
 нового местоположения отсчитываются от ближайшего позиционированного родителя, т.е. родителя с
 позиционированием, отличным от static. Если такого родителя нет – то относительно документа


position: fixed
Позиционирует объект точно так же, как absolute, но относительно window.
Когда страницу прокручивают, фиксированный элемент остаётся на своём месте и не прокручивается вместе
 со страницей


/****************************************************************************************/
35. Hooks ?

По своей природе хуки это обычные ф-ции, тоесть они могут принимать аргументы и в случае
  необходимости могут возвращать результат своей работы

Правила:
- выполнять хуки следует в самом верху иирархии ф-ции, нельзя вызывать в условиях или 
  цыклах
- вызывать хуки можно только в функцыях или пользовательских компонентах

useContext - предназначен для того, чтобы добавлять контекст в функцыональные компоненты,
  без превращения их в классы и дополнительных оберток

useState - создает состояние внутри функцыонального компонента

useEffect - его цель проста добавить методы жызненого цыкла в функцыональный 
  компонент, точнее будет сказать заменить их работу своей функцыональностью

useRef - позволяет добавить функцыональность создания ссылки


/****************************************************************************************/
36. proto, prototype ?


Прототип готового объекта __proto__
У любого созданного объекта всегда присутствует ссылка на другой объект, который называется прототипом.
  Прототипом всех объектов является глобальный объект Object 

Если один объект имеет специальную ссылку __proto__ на другой объект, то при чтении свойства из него, 
  если свойство отсутствует в самом объекте, оно ищется в объекте по ссылке __proto__ (в прототипе)

Итак, каждая функция в JavaScript имеет свойство prototype, в которое присваиваются свойства и методы, 
  которые необходимо сделать доступными для наследования
  
/****************************************************************************************/

37. Флексбокс ?

Флексбокс это CSS-механизм, предназначенный для построения сеток и создания сложных
 раскладок блоков.

Элемент с display: flex; превращается во «флекс-контейнер» и внутри него начинает происходить
 вся магия гибкой раскладки. Елементы после этого растянуться на всю высоту.

Свойство flex-direction, главная ось
  Поток флекс-элементов «течёт» вдоль главной оси от её начала к её концу.
  По умолчанию главная ось направлена слева направо, но её можно разворачивать во всех направлениях 
    с помощью свойства flex-direction

  row — значение по умолчанию, главная ось направлена слева направо.
  column — главная ось направлена сверху вниз.
  row-reverse — главная ось направлена справа налево.
  column-reverse — главная ось направлена снизу вверх. 

Поперечная ось flexbox
  Вдоль этой оси работают «вертикальные» выравнивания.
  Получается, что поперечная ось никогда не смотрит вверх или влево. 

Свойство justify-content, выравнивание вдоль главной оси. 
  Это свойство задаётся для флекс-контейнера.

А пока небольшой итог. Свойство justify-content управляет распределением элементов вдоль главной 
  оси и имеет пять значений:
  -значение по умолчанию flex-start,
  -flex-end,
  -center,
  -space-between,
  -space-around.

Мини-итог. Свойство align-items управляет выравниванием элементов вдоль поперечной оси и имеет пять значений:
  - значение по умолчанию stretch,
  - flex-start,
  - flex-end,
  - center,
  - baseline.

Свойство align-self, эгоистичное выравнивание

Свойство flex-wrap, перенос flex-элементов

Свойство flex-wrap: wrap-reverse, обратный перенос

Свойство align-content, выравнивание строк flex-контейнера

Есть очень похожее свойство align-content, которое управляет выравниванием рядов флекс-элементов 
  вдоль поперечной оси. У этих свойств почти одинаковые значения:

Свойство order, порядковый номер flex-элемента

/****************************************************************************************/