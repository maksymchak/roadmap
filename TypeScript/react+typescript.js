


/******************************************************************************************/

/*========================== Установка, начало  =============================*/

Create React App TypeScript
// https://create-react-app.dev/docs/adding-typescript/
Здесь можно найти инструкцию как можно добавить к нашему React проэкту TypeScript

Installation

To start a new Create React App project with TypeScript, you can run:
// npx create-react-app my-app --template typescript
// # or
// yarn create react-app my-app --template typescript

//*Заметка* Если хотим развернуть проэкт в текущий папке: npx create-react-app . --typescript

Для добавления typescript к существующему проэкту - нужно сделать следующее:
To add TypeScript to a Create React App project, first install it:
// npm install --save typescript @types/node @types/react @types/react-dom @types/jest
// # or
// yarn add typescript @types/node @types/react @types/react-dom @types/jest

Next, rename any file to be a TypeScript file (e.g. src/index.js to src/index.tsx) 
  and restart your development server!

tsconfig.json - файл для конфигурации typescript
//"target": "es5", - куда будет компилировать код (в es5)
//"lib": - тут подключены библиотеки, которые используються в typescript
//"allowJs": true, - можем писать на js
//"jsx": "react" - уведомление,что мы будем использовать react
//"include": - тут мы указываем где храниться весь исходный код

// .tsx - обозначает формат файл с typescript

/*==================================== Типы  =======================================*/

const App: React.FC
//Так мы обозначаем явный тип для функционального компонента. Данный тип нам говорит о том, 
//  что данная ф-ция должна обьязательно вернуть jsx.

const App: React.ClassicComponent
//Аналогично для классового компонента.