21. OOP
	- Что такое OOP?
	- Что такое SOLID?
	- Что такое Микросервисы?
    - Что такое SDLC?

/******************************************************************************************/

// https://medium.com/webbdev/solid-4ffc018077da
// https://www.youtube.com/watch?v=A6wEkG4B38E&ab_channel=webDev

/*================================= Что такое OOP? ===================================================*/

Объектно-ориентированное программирование (ООП) – это методология, которая позволяет представить 
  приложение, в виде совокупности объектов , взаимодействующих друг с другом.

При использовании ООП, следует придерживаться следующих принципов:
	• инкапсуляция (encapsulation) – каждый объект отвечает за конкретную функциональность;
	• наследование (inheritance) – объекты могут наследовать функциональность других объектов;
	• полиморфизм (polymorphism) – объекты могут предоставлять одинаковый интерфейс и его использование, 
	                               но внутренняя реализация этого интерфейса будет разной.
 
/*================================= Что такое SOLID? ===================================================*/

Вот как расшифровывается акроним SOLID:
	S: Single Responsibility Principle (Принцип единственной ответственности).
	O: Open-Closed Principle (Принцип открытости-закрытости).
	L: Liskov Substitution Principle (Принцип подстановки Барбары Лисков).
	I: Interface Segregation Principle (Принцип разделения интерфейса).
	D: Dependency Inversion Principle (Принцип инверсии зависимостей).


// Принцип единственной ответственности
Класс должен быть ответственен лишь за что-то одно. Если класс отвечает за решение нескольких задач, его подсистемы, 
	реализующие решение этих задач, оказываются связанными друг с другом. Изменения в одной такой подсистеме ведут 
	к изменениям в другой.

// Принцип открытости-закрытости
Программные сущности (классы, модули, функции) должны быть открыты для расширения, но не для модификации.

// Принцип подстановки Барбары Лисков
Цель этого принципа заключаются в том, чтобы классы-наследники могли бы использоваться вместо родительских классов, 
	от которых они образованы, не нарушая работу программы.


// Принцип разделения интерфейса
Этот принцип направлен на устранение недостатков, связанных с реализацией больших интерфейсов.


// Принцип инверсии зависимостей
Объектом зависимости должна быть абстракция, а не что-то конкретное.
	* Модули верхних уровней не должны зависеть от модулей нижних уровней. 
		Оба типа модулей должны зависеть от абстракций.
	* Абстракции не должны зависеть от деталей. Детали должны зависеть от 
		абстракций.


/*================================= Что такое Экстремальное программирование? ===================================================*/

Экстремальное программирование (XP) – это упрощенная методология организации разработки программ для небольших и средних по размеру 
	команд разработчиков, занимающихся созданием программного продукта в условиях неясных или быстро меняющихся требований

1. Планирование процесса
2. Тесное взаимодействие с заказчиком
3. Общесистемные правила именования
4. Простая архитектура
5. Рефакторинг
6. Парное программирование
7. 40-часовая рабочая неделя
8. Коллективное владение кодом
9. Единые стандарты кодирования
10. Небольшие релизы
11. Непрерывная интеграция
12. Тестирование

/*================================= Что такое Микросервисы? ===================================================*/

Микросервисы — это подход, при котором единое приложение строится как набор небольших сервисов, каждый из которых 
	работает в собственном процессе и коммуницирует с остальными используя легковесные механизмы, как правило HTTP. 

Эти сервисы построены вокруг бизнес-потребностей и развертываются независимо с использованием полностью автоматизированной среды. 
	Сами по себе эти сервисы могут быть написаны на разных языках и использовать разные технологии хранения данных.


/*================================= Что такое SDLC? ===================================================*/

SDLC (Software development lifecycle) - это серия из шести основных фаз, через которые проходит любая программная система

1. Планирование системы
2. Анализ системы
3. Дизайн системы
4. Разработка, внедрение и развертывание
5. Опытная эксплуатация и интеграция
6. Поддержка системы

/*================================= Что такое паттерны? ===================================================*/

Паттерны - шаблоны проектирования.

Singleton - это порождающий паттерн проектирования, который гарантирует, что у класса есть только один экземпляр, 
	и предоставляет к нему глобальную точку доступа.

Composite (Компоновщик) -  это структурный паттерн проектирования, который позволяет сгруппировать множество объектов в древовидную 
	структуру, а затем работать с ней так, как будто это единичный объект.

Observer (Наблюдатель) -  это поведенческий паттерн проектирования, который создаёт механизм подписки, позволяющий одним 
	объектам следить и реагировать на события, происходящие в других объектах.

State (Состояние) — это поведенческий паттерн проектирования, который позволяет объектам менять поведение в зависимости от своего 
	состояния. Извне создаётся впечатление, что изменился класс объекта.