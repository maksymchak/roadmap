GraphQL
- Introduction
- GraphQL Schema & Root Query
- The Resolve Function & Testing Query
- Different Type & Type Relations
- GraphQL Lists

/******************************************************************************************/


/*================================ Introduction ==============================================*/

GraphQL - это язык запросов к API и среда выполнения этих запросов с имеющимися данными.

GraphQL обеспечивает полное и понятное описание данных в вашем API, дает клиентам возможность 
  запрашивать именно то, что им нужно и не более того, упрощает обновление API-интерфейсов с течением 
  времени и предоставляет мощные инструменты для разработчиков.

GraphQL помогает полностью конфигурировать данные, которые мы хотим получить. Тоесть ничего лишнего
  тянуться не будет. Это значительно снижает нагрузку на сервер.

GraphQL имеет три основные характеристики:
 - Он позволяет клиенту точно указать, какие данные ему нужны.
 - Облегчает агрегацию данных из нескольких источников.
 - Использует систему типов для описания данных.



express - фреймворк для nodeJs
nodemon - пакет служит для того, чтобы мы не перезапускали сервер, когда меняем настройки
graphQL - библиотека запросов
express-graphQL - обертка для упрощения работы с graphQL
mongoose - библиотека js, которая служит для связки приложения с базой данных
cors - запросы между разлычными источниками
graphqlHTTP - пакет для того чтобы спокойно можно использовать graphQL Api


/*=========================== GraphQL Schema & Root Query ========================================*/

//import graphql
const graphql = require('graphql');

//Вытягиваем сущности GraphQLObjectType и GraphQLString
//GraphQLObjectType - можем описать схему храняющуюся в базе
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;


//Фактически это ф-цыя принимающая обьект, в которой указано имя, и fields которому присваиваеться ф-ция,
//	возвращающая обьект данных. В данном обьекте мы описываем поля данных. Каждому полю мы указываем тип.
const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

//Мы должны указать, что наше приложение при загрузке страницы должно обратиться к graphql, который в свою
// очередь должен запросить все необходимые данные. Поэтому мы создаем так называемый корневой запрос.
//Тут мы описываем новый обьект Query. Внутри корневого запроса мы описываем все возможные подзапросы.
// movie - подзапрос одного фильма.
// args - какие аргументы принимает запрос. (Мы запрашываем 1 фильм по одному id)
// resolve - в этом методе мы описуем данные, которые должны возвращаться
const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {

      },
    },
  }
});

//Экспортируем наш корневой запрос
module.exports = new GraphQLSchema({
  query: Query,
});

// app.js - добавляем его в файл сервера
	const schema = require('../schema/schema');

	app.use('/graphql', graphqlHTTP({
	  schema,
	  graphiql: true,
	}));


// http://localhost:3005/graphql
Теперь тут находиться наш graphql ui, на вкладке Docs мы увидим всю документацию нашего приложения - все 
 записанные запросы и мутации.
Далле по структуре будет находиться наш запрос Query и потом подзапрос movie, который принимает строку id и
 возвращает фильм. Далее при нажатии на Movie мы увидим структуру нашего обьекта.


/*=========================== The Resolve Function & Testing Query ========================================*/

// Пример запроса
  {
    movie(id: "2") {
      id
      name
      genre
    }
  }

В запросе не обьязательно указывать все поля, вернуться только те поля которые мы укажем.
// Пример ответа
  {
    "data": {
      "movie": {
        "id": "2",
        "name": "1984",
        "genre": "Sci-Fi"
      }
    }
  }


//Еще один вид запросов, определяя переменную:
query($id: String) {
  movie(id: $id) {
    id
    name
  }
}
Здесь мы дергаем запрос и говорим, что запрос должен принимать аргумент id, тип которого строка. Далее мы
  обращаемся к нашему подзапросу movie и передаем эту переменную. Далее описали обьект резултата, как и в 
  первом примере.
В Query Variables дабавляем переменную: 
  {
    "id": 3
  }


/*=========================== Different Type & Type Relations ========================================*/

Описуем новый тип даннных:

//Колекция
const directors = [
  { id: '1', name: 'Quentin Tarantino', age: 55 },
  { id: '2', name: 'Michael Radford', age: 72 },
  { id: '3', name: 'James McTeigue', age: 51 },
  { id: '4', name: 'Guy Ritchie', age: 50 },
];

//Тип
const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});


Связь колекций:

const movies = [
  { id: '1', name: 'Pulp Fiction', genre: 'Crime', directorId: '1', },
  { id: '2', name: '1984', genre: 'Sci-Fi', directorId: '2', },
  { id: '3', name: 'V for vendetta', genre: 'Sci-Fi-Triller', directorId: '3', },
  { id: '4', name: 'Snatch', genre: 'Crime-Comedy', directorId: '4', },
];

const directors = [
  { id: "1", name: "Quentin Tarantino", age: 55 },
  { id: "2", name: "Michael Radford", age: 72 },
  { id: "3", name: "James McTeigue", age: 51 },
  { id: "4", name: "Guy Ritchie", age: 50 },
];

//Мы берем массив режисеров и пробегаемся по его елементам ища нужный id, который мы получаем
// из радительского запроса. Так мы устанавливаем связь между двумя колекцыями.

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    director: {
      type: DirectorType,
      resolve(parent, args) {
        return directors.find(director => director.id === parent.id);
      }
    }
  }),
});


/*=========================== GraphQL Lists ========================================*/

const movies = [
  { id: "1", name: "Pulp Fiction", genre: "Crime", directorId: "1" },
  { id: "2", name: "1984", genre: "Sci-Fi", directorId: "2" },
  { id: "3", name: "V for vendetta", genre: "Sci-Fi-Triller", directorId: "3" },
  { id: "4", name: "Snatch", genre: "Crime-Comedy", directorId: "4" },
  { id: "5", name: "Reservoir Dogs", genre: "Crime", directorId: "1" },
  { id: "6", name: "The Hateful Eight", genre: "Crime", directorId: "1" },
  { id: "7", name: "Inglourious Basterds", genre: "Crime", directorId: "1" },
  {
    id: "7",
    name: "Lock, Stock and Two Smoking Barrels",
    genre: "Crime-Comedy",
    directorId: "4",
  },
];

const directors = [
  { id: "1", name: "Quentin Tarantino", age: 55 },
  { id: "2", name: "Michael Radford", age: 72 },
  { id: "3", name: "James McTeigue", age: 51 },
  { id: "4", name: "Guy Ritchie", age: 50 },
];

// Для выведения списка елемнтов мы используем GraphQLList.
// При помощи метода filter отсеиваем все фильмы в зависимости от автора возвращаем
//  найденнный список елемента.
const DirectorType = new GraphQLObjectType({
  name: "Director",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return movies.filter((movie) => movie.directorId === parent.id);
      },
    },
  }),
});

/*=========================== Migration to mLab ========================================*/

В GraphQL, есть три основных понятия:
  1. запросы (queries) — получение данных с сервера
  2. мутации (mutations) — изменение данных на сервере и получение обновленных данных обратно
  3. подписки (subscriptions) — поддержание соединения с сервером в режиме реального времени

// https://cloud.mongodb.com/v2/5f2dcb643fbf3678b9012369#clusters
