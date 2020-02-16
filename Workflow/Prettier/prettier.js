Prettier
- Установка

/******************************************************************************************/


/*==================================Установка=======================================================*/

Prettier - инструмент, который автоматически форматирует  JavaScript код и при этом гарантирует,
 что код соотвествует заданной максимальной длине строки.

// https://prettier.io/

Install
// npm install --save-dev --save-exact prettier
# or globally
// npm install --global prettier

Далее устанавливаем Prettier extension в VScode

Далее создаем файл .eslintrc для настроек ESLint
  {
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "all"
  }

Для того, чтобы добавить исключения для Prettier - создаем файл .prettierignore и прописываем
  для него исключения.
/*
  **/build
  **/node_modules

  serverBuild.js
  README.md
*///

Далее можно устанавливать плагины для обьеденения с ESLint
// https://github.com/prettier/eslint-config-prettier

// eslint-config-prettier
// eslint-plugin-prettier