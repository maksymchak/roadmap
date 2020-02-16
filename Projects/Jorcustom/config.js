Jorcustom config files
- settings.json
- typescript image
- ESLint
- Prettier
- Appollo
- .txt
- server.webpack
- ts.config.json
- fragments
- mutations
- App.tsx

/******************************************************************************************/


/*=======================================settings.json================================================*/

Для создания индивидуальных настроек VScode под определенный проэкт - можно использовать
  settings.json. Следует создать папку .vscode в корне проэкта и поместить туда файл 
  settings.json с параметрами для VScode.
/*
.vscode/settings.json

  {
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "eslint.autoFixOnSave": true,
    "eslint.enable": true,
    "eslint.alwaysShowStatus": true,
    ............
  }
*/

/*=======================================typescript image================================================*/

Для того, чтобы typescript понимал тип картинок можно создать папку с типами для картинок.

/*
typings/gif.d.ts
        
  declare module '*.gif';

typings/jpg.d.ts

  declare module '*.jpg';
.................
*/

/*=======================================ESLint================================================*/

ESLint - это линтер для языка программирования JavaScript, написанный на Node.js.
Вся информация по установке и настройке ESLint:
// https://frontend-stuff.com/blog/eslint/

/*
  Установка ESLint локально
  npm install eslint --save-dev

  # создает конфигурацционный файл `.eslintrc`
  ./node_modules/.bin/eslint --init

  # запускает ESLint проверку указанного файла
  ./node_modules/.bin/eslint yourfile.js
*/

Для того, чтобы добавить исключения для Eslint - создаем файл .eslintignore и прописываем
  для него исключения.

/*
.eslintignore
  
  **/node_modules/
  **/build/

  serverBuild.js
  /src/serviceWorker.js
*//

/*=======================================Prettier================================================*/

Для того, чтобы добавить исключения для Prettier - создаем файл .prettierignore и прописываем
  для него исключения.

  **/build
  **/node_modules

  serverBuild.js
  README.md

Вся информация по установке и настройке prettier:
// https://prettier.io/

/*=======================================Appollo================================================*/

Все настройки по apollo 

// apollo.config.js

/*======================================= .txt ================================================*/

Шаблоны для сборки и переменные 

// .txt

/*======================================= server.webpack ================================================*/

Настройки webpack для nodeJs

// server.webpack 

/*======================================= ts.config.json ================================================*/

Typescript настройка

// ts.config.json

/*======================================= fragments ================================================*/

fragments/
// Частини схеми які часто повторюються в query і мутаціях. Як шаблони, щоб уникнути повторення.

fragments/types 
// Автоматично

local 
// Локальний стейт appollo

/*======================================= mutations ================================================*/

mutations
// post запрос на сервер (тут ми передаєм дані на сервер)

/*======================================= App.tsx ================================================*/

App.tsx  Helmet - динамічні title