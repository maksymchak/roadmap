8. Объектно-ориентированное программирование (ооп)
  - Работа с this
  - Модуль, конструктор и потеря контекста
  - ООП

/**************************************** Test *********************************************/
1. Блок (Работа с this)
- Что можно сказать про this в функциях ?
- Что можно сказать про this в объектах ?
- Что такое потеря контекста, пример ?
- Что можно сказать про this в стрелочных функциях ?
- Что можно сказать про this в событиях ?

2. Блок (Модуль, конструктор и потеря контекста)
- Что такое модуль ?
- Что такое предоставление объектного интерфейса ?
- Что такое Функция-конструктор ?
- Создать Функцию-конструктор.
- Решить проблему потери контекста при помощи методов call, apply и bind

3. Блок (ООП)
- Что такое ООП, класс и объект ?
- Что такое __proto__ и прототип ?
- Использовать __proto__ для задания прототипа.
- Что такое prototype, пример.
- Показать реализацию классов в ES5.
- Использовать Object.create
- Использовать метод hasOwnProperty


/******************************************************************************************/

/*================================= Работа с this ===================================================*/

this в функциях
Когда вы вызываете функцию и внутри нее используете this – это глобальный объект window .
Если же функция вызывается с использованием директивы use strict (вызывается в строгом режиме), 
то this буде равен undefined .
  function checkThis() {
      console.log(this === window);
  }

  checkThis(); // true

'use strict'; - это спецыальный режим введенный в ES5 


this в объектах
Если ф-ция являеться полем обьекта, то такая ф-ция называется методом.
В методах, this ссылается на объект, в контексте которого вызван метод.
  let user = {
      checkThis: function() {
          console.log(this === user);
      }
  }

  user.checkThis(); // true
Полезность this, полностью раскрывается при разборе тем по ООП. Но рассмотрим небольшой пример сейчас.
  let user1 = {
      firstName: 'Dave',
      lastName: 'Dowson',
  }

  let user2 = {
      firstName: 'Bob',
      lastName: 'Gordon',
  }

  function fullName() {
      console.log(`${this.firstName} ${this.lastName}`)
  }

  user1.getFullName = fullName;
  user2.getFullName = fullName;
  user1.getFullName(); // Dave Dowson
  user2.getFullName(); // Bob Gordon


Потеря контекста
Потеря контекста – неявное изменение значения this.
  let user = {
      getFullName: function() {
          console.log(this === user);
          function innerFunction() {
              console.log(this === user);
          }
          innerFunction();
      }
  }

  user.getFullName();
  // true
  // false -  this, во вложенной функции, равен window


this в стрелочных функциях
Проблема потери контекста не возникает при использовании стрелочной функции, как вложенной 
  функции. Это связано с тем, что this стрелочной функции заимствует this из внешней функции, 
  в которой она определена.
  let user = {
      getFullName: function() {
          console.log(this === user);

          const innerFunction = () => {
              console.log(this === user);
          }

          innerFunction();
      }
  }

  user.getFullName();
  // true
  // true
При вызове стрелочной функции в глобальной области видимости, у нее, как у обычной функции, 
  this равен либо window, либо undefined.
  const globalFunction = () => {
      console.log(this === window);
  }

  globalFunction(); // true



this в событиях
В обработчиках событий this равен элементу на котором он сработал.
  <div>Div<div>
  <span>Span<span>

  <script>
      const div = document.querySelector('div');
      const span = document.querySelector('span');

      function handler(event) {
          console.log(this);
      }

      div.addEventListener('click', handler); // <div>Div</div>
      span.addEventListener('click', handler); // <span>Span</span>
  <script>
Через this мы получаем тот же элемент, что и с помощью event.currentTarget.


/*=========================== Модуль, конструктор и потеря контекста ===============================*/

Паттерн «Модуль» помогает изолировать разные части логики приложения от глобального контекста 
  для избегания конфликтов и ошибок. Модуль создается с помощью обычной функции. 

Первый способ создания такого Модуля, использование самовызывающейся функции.
  (function() {
      const numbers = [423, 32, 343, 42, 22, 12];
      
      function filterNumber() {
          let newNumber = numbers.filter(number => number < 100);

          console.log(newNumber);
      }

      filterNumber();
  }());  // можно передавать параметры  }([423, 32, 343, 42, 22, 12]));


Следующий и более полезный способ создания Модуля – предоставление объектного интерфейса.
  const calculate = (function() {
      const numbers = [31, 42, 5, 34, 8];
      return {
          multiply: function() {
              let result = numbers.reduce((accumulator, number) => {
                  return accumulator * number;
              }, 1);
              console.log(result);
          },

          add: function() {
              let result = numbers.reduce((accumulator, number) => {
                  return accumulator + number;
              }, 0);
              console.log(result);
          }
      }
  })();

  calculate.add(); // 120
Этот подход, так же использует самовызывающуюся функцию, но если в первом подходе, просто 
  выполняется какой-то код внутри Модуля, то тут, с помощью return указываем к каким методам 
  можно получить доступ извне.


Функция-конструктор
В JavaScript все, кроме примитивов, объекты. Функции так же являются объектами.
Любую функцию можно использовать как функцию-конструктор, то есть функцию, с помощью которой 
  можно создать новый объект с определенными заданными свойствами и методами. Для этого необходимо 
  перед вызовом функции поставить оператор new .

Функция-конструктор может содержать свойства, которые при инициализации экземпляра объекта 
  (нового объекта, созданного с помощью функции-конструктора) будут принадлежать этому объекту. 
  Для этого используется ключевое слово this. о есть this, при вызове функции в качестве конструктора, 
  ссылается на созданный объект.

function Room (name, area, number) {
    const quantity = 3;
    this.area = area;
    this.name = name;
    this.number = number;
    //showInfo - приватный метод
    showInfo = () => {
        return `Type of room: ${this.name}, area: ${this.area}`;
    }

    this.getFullDescription = () => {
        const info = showInfo();

        console.log(`${info}. It's ${this.number} of ${quantity} room.`);
    }
}

const room1 = new Room('Guest', 15, '1st');
room1.getFullDescription(); // Type of room: Guest, area: 15. It's 1st of 3 room.

//Стрелочные функции не могут быть использованы как функции-конструкторы.


Решения проблемы потери контекста
Часто встречаются случаи, когда функция теряет нужный нам контекст выполнения.
  Такое происходит в случаях использования внутренних функций или функций обратного вызова.

Существует несколько способов сохранения нужного контекста:
  • сохранение this в переменную;
  • использование специальных методов;
  • использование стрелочной функции.

Сохранение this в переменную .
Контекст исполнения функции можно сохранить в переменной и далее использовать эту переменную 
  как контекст исполнения.
  let user = {
      firstName: 'John',
      secondName: 'Jarvis',
      getFullName: function() {
          const self = this;

          setTimeout(function() {
              console.log(`Full name: ${self.firstName} ${self.secondName}`);
          }, 2000);
      }
  }

  user.getFullName(); // Full name: John Jarvis


Использование специальных методов.
Эти методы помогают присвоить нужный контекст исполнения для функции. Они принимают два параметра. 
  Первый параметр – контекст, с которым необходимо вызвать функцию. Второй (необязательный) 
  параметр – параметры, которые функция будет принимать в момент ее вызова.
  functionName.call(context, params);

Call – вызывает функцию и позволяет передать в нее параметры один за другим через запятую.
Apply – вызывает функцию и позволяет передать в нее параметры в виде массива.
Bind – возвращает новую функцию, позволяет передать в нее параметры один за другим или в виде массива.

  function say(greeting) {
      console.log(`${greeting} ${this.firstName} ${this.lastName}`);
  }

  const person1 = { firstName: 'John', lastName: 'Jarvis' };
  const person2 = { firstName: 'Paul', lastName: 'Johnson' };

  say.call(person1, 'Hello'); // Hello John Jarvis
  say.call(person2, 'Hello'); // Hello Paul Johnson

Принцип работы метода apply такой же, как и у метода call. Единственным отличием является то, 
  что метод apply принимает параметры в виде массива, а в метод call передаются перечисляемые 
  через запятую параметры.
  //say.apply(person1, ['Hello']); // Hello John Jarvis

В отличии от методов call и apply, bind не выполняет функцию, как только он был применен. Этот 
  метод создает новую функцию с привязанным контекстом, которую можно вызвать в любом месте или 
  в определенный момент, при этом, привязанный ранее контекст будет сохранен. 
  const person1 = { firstName: 'John', lastName: 'Jarvis' };
  const person2 = { firstName: 'Paul', lastName: 'Johnson' };

  function say(greeting) {
      console.log(`${greeting} ${this.firstName} ${this.lastName}`);
  }

  const sayHello1 = say.bind(person1, 'Hello');
  const sayHello2 = say.bind(person2, ['Hi']);

  sayHello1(); // Hello John Jarvis
  sayHello2(); // Hi Paul Johnson


/*================================= ООП ===================================================*/

Объектно-ориентированное программирование (ООП) – это методология, которая позволяет представить 
  приложение, в виде совокупности объектов , взаимодействующих друг с другом. В большинстве 
  объектно-ориентированных языках программирования такие объекты создаются с помощью специальных 
  конструкций, называемых Классами (Classes).

Класс – это программный код, который представляет из себя шаблон или заготовку, на основе которой в 
  последствии и будет создан объект. Класс не имеет состояния и не предполагает вызов методов, описанных
  в классе.

Объект – структура, которая была создана из класса. Объект часто называют экземпляром класса. Работа 
  программы происходит именно с объектами.

При использовании ООП, следует придерживаться следующих принципов:
• инкапсуляция (encapsulation) – каждый объект отвечает за конкретную функциональность;
• наследование (inheritance) – объекты могут наследовать функциональность других объектов;
• полиморфизм (polymorphism) – объекты могут предоставлять одинаковый интерфейс и его использование, 
                               но внутренняя реализация этого интерфейса будет разной.


Прототип готового объекта __proto__
У любого созданного объекта всегда присутствует ссылка на другой объект, который называется прототипом.
  Прототипом всех объектов является глобальный объект Object . 

В "JavaScript" объекты наследуют поведение от других объектов, этот механизм называется наследованием 
  через прототипы. Объект, от которого наследуется поведение, называется прототипом.

  const newObject = {};
  console.log(newObject);
  //В консоли увидим пустой объект, со свойством, которое явно в нем не определялось – proto .

Объект, на который указывает ссылка __proto__, называется «прототипом».
__proto__ – является ссылкой на прототип объекта.


Если один объект имеет специальную ссылку __proto__ на другой объект, то при чтении свойства из него, 
  если свойство отсутствует в самом объекте, оно ищется в объекте по ссылке __proto__ (в прототипе).

  let functionality = {
      open: function() {
          console.log(`${this.room} is open.`);
      }
  }

  let bathRoom = {
      room: 'Bath room'
  }

  let kitchen = {
      room: 'Kitchen'
  }

  bathRoom.__proto__ = functionality;
  kitchen.__proto__ = functionality;
  bathRoom.open(); // Bath room is open.
  kitchen.open(); // Kitchen is open.

Объект-прототип так же может иметь свой прототип и наследовать его свойства и методы и так далее,
  это часто называется цепочкой прототипов.


Установка прототипа для функции-конструктора
На практике при программировании в ООП стиле, в JavaScript, для создания объектов используются 
  функции-конструкторы. Для установки прототипа в данном случае так же можно использовать ссылку 
  proto, но у функции-конструктора (и у любой другой функции) есть специальное свойство prototype, 
  с помощью которого можно установить прототип объекту.

Итак, каждая функция в JavaScript имеет свойство prototype, в которое присваиваются свойства и методы, 
  которые необходимо сделать доступными для наследования.

  let room = {
      area : 12
  };

  function BusinessRoom() {
      this.isMeetingAvailable = true;
  };

  BusinessRoom.prototype = room;
      
  const businessRoom = new BusinessRoom();
  console.log(businessRoom.area); // 12
//Чтобы новым объектам автоматически ставить прототип, конструктору ставится свойство prototype. 
//  businessRoom.__proto__ == room


Реализация «класса» с помощью прототипа (ES5)
У каждой обычной ф-ции (кроме стрелочной) есть свойство prototype. prototype - это просто пустой обьект, 
  который будет использоваться как прототип для новых обьектов, которые мы создаем с этой ф-цыей. 

  function Printer(doc) {
      this.document = doc;
  }

  //Printer.prototype - изначально пустой обьект без свойств
  //добавили метод print в обьект Printer.prototype
  Printer.prototype.print = function () {
      console.log(this.document);
  }

  const newPrinter = new Printer('Some text.');
  const somePrinter = new Printer('Another text.');

  newPrinter.print(); // Some text.
  somePrinter.print(); // Another text.


Вывод три ключевых момента:
• При вызове метода у объекта происходит его поиск с начала у самого объекта, затем у прототипа 
  этого объекта.
• Прототип уже созданного объекта доступен по ссылке __proto__. И вы можете при необходимости его задать, 
  установив значение в это поле.
• Если вы планируете создавать объект с помощью функции конструктора, то вы устанавливаете необходимый 
  вам прототип в свойство prototype функции-конструктора. Затем, при создании объекта значение в __proto__ 
  подставляется из свойства prototype функции-конструктора.


Object.create() - создает пустой обьект с заданым прототипом. Object.create() принимает на вход объект, 
  который будет прототипом того обьекта который мы создаем.

  function Machine(product) {
      this.product = product;
  }

  Machine.prototype = {
      on: function() {
          console.log(`${this.product} is ON!`);
      },
      off: function() {
          console.log(`${this.product} is OFF!`);
      }
  }

  function TapeRecorder(product) {
      this.product = product;
  }

  TapeRecorder.prototype = Object.create(Machine.prototype);

  const tapeRecorder = new TapeRecorder('Tape Recorder');
  tapeRecorder.on(); // Tape Recorder is ON!



Метод obj.hasOwnProperty(prop) возвращает true, если свойство prop 
  принадлежит самому объекту obj, иначе false.

  var animal = {
    eats: true
  };

  var rabbit = {
    jumps: true,
    __proto__: animal
  };

  alert( rabbit.hasOwnProperty('jumps') ); // true: jumps принадлежит rabbit
  alert( rabbit.hasOwnProperty('eats') ); // false: eats не принадлежит





