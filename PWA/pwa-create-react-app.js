Progressive Web Apps in React with create-react-app
- About

/******************************************************************************************/

/*==================================  =====================================================*/



/*================================== Что такое PWA =====================================================*/

Это технология, которая добавляет на сайт функциональность приложения. В десктопном браузере progressive 
  web app остается обычным сайтом. А когда посетитель открывает его в мобильном браузере, PWA превращается 
  в гибрид сайта и приложения.

Service Worker
Сердце PWA — Service Worker. Это проксирующий слой между фронтэндом и бэкэндом, находящийся в браузере. 
  Все запросы браузера идут через него. Данное разделение на два независимых слоя позволило сделать 
  переход обычного веб сайта в PWA максимально простым.

С программистской точки зрения Service Worker представляет собой javascript файл, подключаемый в 
  html коде страницы. В нем разработчик определяет логику работы с приходящими из фронтэнда запросами 
  и другую функциональность.

HTTPS
PWA требует, чтобы все ресурсы сайта передавались по HTTPS протоколу. 

Web App manifest
JSON файл, декларативно определяющий для браузера название приложения, иконку, как будет выглядеть 
  PWA (fullscreen, standalone и др.) и некоторые другие параметры. Позволяет «установить» PWA как 
  отдельное приложение на домашний экран смартфона.

Протестировать PWA
Чтобы проверить, работает ли сайт как PWA, можно взять Lighthouse. Lighthouse — это расширение для 
  Chrome, которое покажет, насколько PWA годен и можно ли его улучшить.