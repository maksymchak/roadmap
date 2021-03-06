1. useState
	- useState

/******************************************************************************************/

// https://github.com/vladilenm/react-hooks-course/tree/master/src/examples
// https://www.youtube.com/watch?t=1403&v=9KJxaFHotqI&feature=youtu.be&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

/*================================= useState ===================================================*/

Хуки — нововведение в React 16.8, которое позволяет использовать состояние и другие 
  возможности React без написания классов.

Хуки — это функции, с помощью которых вы можете «подцепиться» к состоянию и методам жизненного 
цикла React из функциональных компонентов. 

// useState
import { useState } from 'react';

const Example = () => {
	
  const [count, setCount] = useState(0);
  // count - текущее значение состояния
  // setCount - функцию для его обновления

	return(
    <div>
      <p>You clicked {count} times<p>
      <button onClick={() = setCount(count + 1)}>
      Click me
      <button>
    <div>
	);
}


// Мы вызываем его, чтобы наделить наш функциональный компонент внутренним состоянием. 
// React будет хранить это состояние между рендерами.


  const [count, setCount] = useState(initialCount);

// Аргумент initialState — это состояние, используемое во время начального рендеринга.
// В последующих рендерах это не учитывается.

Если начальное состояние является результатом дорогостоящих вычислений, вы можете вместо 
  этого предоставить функцию, которая будет выполняться только при начальном рендеринге:

  const [counter, setCounter] = useState(() => {
    return calckSize()
  })


useState в формате обьекта:

  const [state, setState] = useState( {
    title: 'Hello',
    date: 4
  })

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'New title'
      }
    })
  }

  <button onClick={updateTitle}>Change<button>

