React + TypeScript
1. Установка, начало 

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

const [title, setTitle] = useState<string>('');
//Явное указание, что state строка

const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) = {}
//Задали тип для event onChange

const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) = {}
//Задали тип для event onKeyPress

const ref = useRef<HTMLInputElement>(null); 
//Говорим useRef, что мы работаем с HTMLInputElement

console.log(ref.current!.value)
// ! - так мы указываем typescript, что мы уверенны что все будет ок

export const TodoForm: React.FC<{ onAdd(title: string): void }> = props => {
//Явно указываем, что наш функциональный компонент получает. 
//void - функция, которая ничего не возвращает

interface TodoFormProps {
  onAdd(title: string): void
}
//interface - тут описываються все входящие свойства и типы
//И теперь будет выглядеть так: export const TodoForm: React.FC<TodoFormProps> = props => {

type TodoListProps = {
  todos: any[];
};
export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
//Аналогично interface - описали входящие типы

export interface ITodo {
  title: string
  id: number
  completed: boolean
}
//Так можно експортировать типы в интерфейсы в отдельном файле

setTodos(prev => [newTodo, ...prev])
//Такая запись изменения более коректная, так как отталкиваеться от предедущего состояния
//Все потому что state и porops обновляються асинхронно

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void
  onRemove: (id: number) => void
};
//Добавили типы для ф-ций

onRemove?: (id: number): void
// Когда мы ставим ? - делаем параметр не обьязательным

declare var confirm: (question: string) => boolean;
//Так мы говорим, что такая переменная точно будет.

useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
  setTodos(saved);
}, []);
//Мы достаем из localStorage наш список и парсим либо его либо пустой массив.
//Также мы указываем явный тип as ITodo[]

useEffect(() => {
}, [todos]);
//В таком формате useEffect отработает только когда увиди, что изменился todos

npm i @types/react-router-dom                                                                                    /
//При работе с роутер нужно установить дополнительную зависимусть выше