2. useEffect
	- useEffect

/******************************************************************************************/

// https://github.com/vladilenm/react-hooks-course/tree/master/src/examples
// https://www.youtube.com/watch?t=1403&v=9KJxaFHotqI&feature=youtu.be&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

/*================================= useEffect ===================================================*/

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


useEffect componentDidMount

  useEffect(() => {
    console.log('componentDidMount')
  }, [])


Очистка листнеров:

  const mouseMoveHandler = event => {
    console.log('move');
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => window.removeEventListener('mousemove', mouseMoveHandler)
  }, [])

