Jorcustom config files

/******************************************************************************************/


/*=======================================================================================*/

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

Для того, чтобы typescript понимал тип картинок можно создать папку с типами для картинок.

/*
typings/gif.d.ts
        
  declare module '*.gif';

typings/jpg.d.ts

  declare module '*.jpg';
.................
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

