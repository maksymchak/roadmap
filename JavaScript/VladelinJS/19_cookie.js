cookie
	- cookie

/******************************************************************************************/

// https://developer.mozilla.org/ru/docs/Web/HTTP/Cookies

/*================================= cookie ===================================================*/

HTTP cookie (web cookie, cookie браузера) - это небольшой фрагмент данных, отправляемый сервером на 
	браузер пользователя, который тот может сохранить и отсылать обратно с новым запросом к данному серверу.

Cookie используются, главным образом, для:
	* Управления сеансом (логины, корзины для виртуальных покупок)
	* Персонализации (пользовательские предпочтения)
	* Мониторинга (отслеживания поведения пользователя)

 Из-за того, что cookie пересылаются с каждым запросом, они могут слишком сильно снижать производительность 
 	(особенно в мобильных устройствах).

В качестве хранилищ данных на стороне пользователя вместо них можно использовать Web storage API 
	(localStorage and sessionStorage) и IndexedDB.

Куки HTTPonly не доступны из JavaScript через свойства Document.cookie API. Устанавливайте этот флаг для 
	тех cookie, к которым не требуется обращаться через JavaScript. 

	document.cookie = "yummy_cookie=choco";
	document.cookie = "tasty_cookie=strawberry";
	console.log(document.cookie);
	// logs "yummy_cookie=choco; tasty_cookie=strawberry"


	// Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
