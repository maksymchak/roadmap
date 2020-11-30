React Hooks
- useState
- useEffect

/******************************************************************************************/


/*================================ useState ==============================================*/

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

/*================================ useEffect ==============================================*/

// useEffect - выполняет ту же роль, что и componentDidMount, componentDidUpdate и componentWillUnmount

import { useEffect } from 'react';

const Example2 = () => {

  useEffect(() => {

  })

  return(
    <div>
      <p>You clicked {count} times<p>
      <button onClick={() = setCount(count + 1)}>
      Click me
      <button>
    <div>
  );
}

// По умолчанию, React запускает эффекты после каждого рендера

// При необходимости вы можете вернуть из эффекта функцию, которая 
//  указывает эффекту, как выполнить за собой «сброс». 

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });


Вы можете указать React пропустить выполнение эффекта, если определенные значения 
  не изменились между повторными отрисовками. Для этого передайте массив в качестве 
  необязательного второго аргумента в useEffect:

  useEffect(() => {
    document.title = `Вы нажали ${this.state.count} раз`;
  }, [count]); // Перевыполнит эффект, только если count изменился   


Пример с сохранением в localStorage

useEffect(() => {
  const raw = localStorage.getItem('todos') || []
  setTodos(JSON.parse(raw))
}, [])

useEffect(() => {
  document.addEventListener('click', handleClick)
  localStorage.setItem('todos', JSON.stringify(todos))
  return () => {
    document.removeEventListener('click', handleClick)
  }
}, [todos])