Axios + React
- Install
- GET
- POST
- Global configuration

/******************************************************************************************/

/*==================================Install=====================================================*/

Почти любому веб-проекту нужно работать с REST API. Axios это легковесный HTTP клиент 
  который базируется на $http сервисе Angular.js и очень похож на Fetch API. Axios базируется 
  на Promise и поэтому можно воспользоваться преимуществами async и await для написания 
  читаемого асинхронного кода.

Установка
// # установка с помощью yarn
//  yarn add axios
// # установка с помощью npm
//  npm install axios --save

/*==================================GET=====================================================*/

GET запросы
Для начала создадим компонент PersonList и в методе жизненного цикла componentDidMount 
  сделаем GET с помощью axios.
/*  
  import React from 'react';
  import axios from 'axios';
   
  export default class PersonList extends React.Component {
    state = {
      people: []
    }
    componentDidMount() {
      axios.get(`${axios.defaults.baseURL}/people`)
        .then(res => {
          const people= res.data;
          this.setState({ people});
        })
    }
   
    render() {
      return (
        <ol>
          { this.state.people.map(person => <li>{person.name}</li>)}
        </ol>
      )
    }
  }

*/

В коде выше используется метод axios.get(url) который возвращает promise, который в результате 
  в вернёт объект response. Необходимые нам данные хранятся в поле data. Если необходимо можно 
  получить некоторые метаданные о запросе, например статус код (res.status) или более детально 
  в объекте res.request.


/*==================================POST=====================================================*/

Кроме GET запросов библиотека axios умеет работать и с другими HTTP методами, такими как POST 
  или PUT. Давайте создадим форму которая позволяет отправить введенные пользователем 
  данные на сервер.

При POST запросе объект респонса такое же как в GET запросе.
/*
  import React from 'react';
  import axios from 'axios';
   
  export default class PeopleList extends React.Component {
    state = {
      name: '',
    }
    handleChange = event => {
      this.setState({ name: event.target.value });
    }
   
    handleSubmit = event => {
      event.preventDefault();
   
      const user= {
        name: this.state.name
      };
   
      axios.post(`${axios.defaults.baseURL}/people`, { user })
        .then(res => {
          console.log(res);
        })
    }
   
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              User Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <button type="submit">Add user</button>
          </form>
        </div>
      )
    }
  }
*/

/*==================================Global configuration=====================================================*/

axios позволяет задать параметры которые будут подставляется в все запросы автоматически. Например можно задать 
  базовой URL API или токен авторизации

  axios.defaults.baseURL = config.baseURL;
  axios.defaults.headers.common['Authorization'] = 'JWT_TOKEN_HERE';
  axios.defaults.headers.post['Content-Type'] = 'application/json';

Также можно создать несколько инстансов конфигурации
// Передаем параметры по умолчанию при создании инстанса
  const instance = axios.create({
  baseURL: config.BASE_URL
  });
 
// Alter defaults after instance has been created
  instance.defaults.headers.common['Authorization'] = 'JWT_TOKEN_HERE';
