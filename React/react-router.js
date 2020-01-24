React Router
- Подключить React Router
- Использовать Link
- Использовать Route
- Создать динамические пути
- Создать относительные пути
- Использовать опциональные параметры
- Создать авторизацию

/******************************************************************************************/


/*================================ React Router ==============================================*/

Routing
- Роутинг - переключение между виртуальными "страницами" UI приложения
- Роутинг нужен, чтобы упростить структуру приложения и организовать навигацию
- В Single Page Application страница, на самом деле, одна и она не перезагружаеться

Первое что нужно сделать - это установить библиотеку react-router-dom
  npm install react-router-dom

import { BrowserRouter as Router, Route } from 'react-router-dom';

Пример роутинга для приложения:

  <Router>
    <Route path="/blog" component={Blog} />
    <Route path="/about" component={About} />
    <Route path="/shop" component={Shop} />
  <Router>

React Router это не часть React. Есть и другие библиотеки для роутинга


Link
Чтобы переключать страницы, используйте компонент Link из react-router
// <Link to="/people">People</Link>

Link работает почти как тег <a>, но он не перезагружает страницу 
(и при этом обновляет url в адресной строке)

import { Link } from 'react-router-dom';

  <ul className="d-flex">
    <li>
      <Link to="/people">People<Link>
    <li>
    <li>
      <Link to="/planets">Planets<Link>
    <li>
    <li>
      <Link to="/starships">Starships<Link>
    <li>
  <ul>


Как работает Route
//exact - если путь в точности соответствует заданному, то тогда он срабатывает
  <Route path="/"
         render={() => <h2>Welcome to StarDB</h2>}
         exact >
  <Route path="/people"
         render={() => <h2>People</h2>}
         exact >
  <Route path="/people" component={PeoplePage} >
  <Route path="/planets" component={PlanetsPage} >
  <Route path="/starships" component={StarshipsPage} >

Route
- В Route можно передать rnder ф-цию
<Route path="/hi" render={() => <p>Hi<p>}>
- Route работает как фильтр - сравнивая path с текущим адресом он
  решает, отрисовать содержимое или нет
- Параметр exact говорит, что нужно использовать точнее совпадение
  (а не path является частью адреса)



Динамические пути
В React Router есть спецыальный механизм, который помогает описать параметры для пути.
Тоесть в path можно добавлять блоки, которые будут динамические.
path="/starships/:id" - такой путь сработает для любого id(для любого значения), который 
                        будет идти после слеша.

В render ф-цыю react router передаст обьект с 3-мя параметрами, 3-мя обьектами которые
  используються для роутинга.

match - содержиться как именно path совпал со строкой браузера
location - текущее состояние роутера
history - используеться чобы програмно перейти на другую страничку
/* Из match.params мы достали наш id и передадим его в StarshipDetails
<Route path="/starships/:id"
       render={({ match }) => {
         const { id } = match.params;
         return <StarshipDetails itemId={id} />
       }}/>
*/
- В Route можно передать параметры:
  <Route path="/starships/:id"  
         render={({match} => <p>{match.params.id}</p>} />

- :id может быть любой строкой, которая идет после /people/
- если не установить exact, то путь /people будет срабатывать всегда, когда
  срабатывает /people/:id



withRouter
- withRouter это компонент высшего порядка, он передает компоненту обьекты react router:
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ history }) => {
  return (
    <StarshipList
      onItemSelected={(id) => history.push(id)} />
  );
};

export default withRouter(StarshipsPage);


Относительные пути
/*
/starships/ + 5 = /starships/5
/starships + 5 = /5
*/

- В react-router можно использовать относительные пути
history.push('/person'); // абсолютный путь
history.push('person'); // относительный путь

- Закрывающий слеш - очень важен 
history.push('person');
// текущий адрес - /site/catalog/
// результат - /site/catalog/person

// текущий адрес - /site/catalog (без слеша)
// результат - /site/person


Опциональные параметры
- В path параметры могут быть опциональными:
<Route path="/people/:id" ...>
- Приложение должно позволять перезагружать страницы, или передавать 
  url другим пользователям
- Адрес должен содержать ID открытого элемента (тогда открыв URL пользователь
  попадает на тот-же "экран")


Авторизация 
- можно использовать компонент Redirect, чтобы переслать пользователя на логин-страницу:
<Redirect to="/login" />
- система авторизации, которую мы рассмотрели, не обеспечивает безопасность в приложении
(проверка прав должна проводиться на сервере)


Switch
- компонент Switch оборачивает другие компоненты (Route и Redirect)
<Switch>
  <Route path="/books" .../>
  <Route path="/blog" .../>
<Switch>
- Switch отрисует только первый элемент, который соответствует адресу
- Route без свойства path срабатывает всегда
