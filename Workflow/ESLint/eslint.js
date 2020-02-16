ESLint 
- Установка

/******************************************************************************************/


/*==================================Установка=======================================================*/
ESLint - это линтер для языка программирования JavaScript, написанный на Node.js.

Установка ESLint глобально

Используя npm:
// npm install -g eslint
# создает конфигурацционный файл `.eslintrc`
// eslint --init
# запускает ESLint проверку указанного файла
// eslint yourfile.js

Установка ESLint локально

// npm install eslint --save-dev
# создает конфигурацционный файл `.eslintrc`
// ./node_modules/.bin/eslint --init
# запускает ESLint проверку указанного файла
// ./node_modules/.bin/eslint yourfile.js


Далее устанавливаем ESLint extension в VScode
Далее создаем файл .eslintrc для настроек ESLint
  {
    "extends": "react-app"
  }
// C этого момента ESLint интегрирован в проэкт.

Для того, чтобы добавить исключения для Eslint - создаем файл .eslintignore и прописываем
  для него исключения.

/*
.eslintignore
  
  **/node_modules/
  **/build/

  serverBuild.js
  /src/serviceWorker.js
*//

Далее можно устанавливать плагины для обьеденения с Prettier
// https://github.com/prettier/eslint-config-prettier

// eslint-config-prettier
// eslint-plugin-prettier

Настраиваем Husky и Lint staged.
Husky - позволяет привязаться к git, к примеру что-то сделать при
  коммите.
Lint staged - для проверки файлов в это время.
// npm i --save-dev husky lint-staged

Будем вызывать lint-staged перед комитом.
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }

lint-staged настройки:
// https://github.com/okonet/lint-staged

В нем мы прописываем все что мы хотич, чтобы он сделал перед комитом по
  очереди сверху вниз
  "lint-staged": {
    "*.{tsx,ts,js}": [
      "npm pretty",
      "npm typecheck",
      "npm lint",
      "git add"
    ]
  }