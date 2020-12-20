React Hooks
- useState
- useEffect
- useReducer
- useContext
- useRef
- useMemo
- useCallback
- Создание пользовательских хуков


/******************************************************************************************/
// https://github.com/vladilenm/react-hooks-course/tree/master/src/examples
// https://www.youtube.com/watch?t=1403&v=9KJxaFHotqI&feature=youtu.be&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

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



/*================================ useReducer ==============================================*/


Хук useReducer обычно предпочтительнее useState, когда у вас сложная логика состояния, 
  которая включает в себя несколько значений, или когда следующее состояние зависит от 
  предыдущего. useReducer также позволяет оптимизировать производительность компонентов, 
  которые запускают глубокие обновления,

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

//*================================ useContext ==============================================*/

Принимает объект контекста (значение, возвращённое из React.createContext) и возвращает текущее 
  значение контекста для этого контекста. Текущее значение контекста определяется пропом value 
  ближайшего <MyContext.Provider> над вызывающим компонентом в дереве.

 const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
/
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}
/
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Я стилизован темой из контекста!
    </button>
  );
} 
/

/*================================ useRef ==============================================*/

Если мы не хотим что-то перерисовывать - мы используем useRef.

useRef возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным 
  аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени 
  жизни компонента.

  const refContainer = useRef(initialValue);

  useEffect(() => {
    refContainer.current++
  })

  <div>Render counts: {refContainer.current}<div>


Если вы передадите React объект рефа с помощью подобного выражения <div ref={myRef}/>, React 
  установит собственное свойство .current на соответствующий DOM-узел при каждом его изменении.

  const inputRef = useRef(null)

  <input ref={inputRef} >

  //*********//////

  const inputRef = useRef(null)

  const focus = () => inputRef.current.focus()

  <input ref={inputRef} >

  <button onClick={focus}> Focus <button>


/*================================ useMemo ==============================================*/

// Возвращает мемоизированное значение.


// Передайте «создающую» функцию и массив зависимостей. useMemo будет повторно вычислять мемоизированное 
//   значение только тогда, когда значение какой-либо из зависимостей изменилось. Эта оптимизация помогает 
//   избежать дорогостоящих вычислений при каждом рендере.

  import React, {useState, useMemo, useEffect} from 'react'

  function complexCompute(num) {
    console.log('complexCompute')
    let i = 0
    while (i < 1000000000) i++
    return num * 2
  }

  function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => ({
      color: colored ? 'darkred' : 'black'
    }), [colored])

    const computed = useMemo(() => {
      return complexCompute(number)
    }, [number])

    useEffect(() => {
      console.log('Styles changed')
    }, [styles])

    return (
      <>
        <h1 style={styles}>Вычисляемое свойство: {computed}<h1>
        <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Добавить<button>
        <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Убрать<button>
        <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить<button>
      <>
    )
  }

  export default App

// Вы можете использовать useMemo как оптимизацию производительности, а не как семантическую гарантию. 



/*================================ useCallback ==============================================*/

// Передайте встроенный колбэк и массив зависимостей. Хук useCallback вернёт мемоизированную версию колбэка, 
//   который изменяется только, если изменяются значения одной из зависимостей. Это полезно при передаче колбэков 
//   оптимизированным дочерним компонентам, которые полагаются на равенство ссылок для предотвращения ненужных рендеров

  import React, {useState, useCallback} from 'react'
  import ItemsList from './ItemsList'

  function App() {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const styles = {
      color: colored ? 'darkred' : 'black'
    }

    const generateItemsFromAPI = useCallback((indexNumber) => {
      return new Array(count).fill('').map((_, i) => `Элемент ${i + indexNumber}`)
    }, [count])

    return (
      <>
        <h1 style={styles}>Количество элементов: {count}<h1>
        <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Добавить<button>
        <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить<button>

        <ItemsList getItems={generateItemsFromAPI} >
      <>
    )
  }

  export default App



/*================================ Создание пользовательских хуков ==============================================*/

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  return {
    value, onChange
  }
}

function App() {
  const input = useInput('')

  useLogger(input.value)

  return (
    <input type='text' value={input.value} onChange={input.onChange}>
  )
}