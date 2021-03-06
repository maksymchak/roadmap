7. useCallback
	- useCallback

/******************************************************************************************/

// https://github.com/vladilenm/react-hooks-course/tree/master/src/examples
// https://www.youtube.com/watch?t=1403&v=9KJxaFHotqI&feature=youtu.be&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

/*================================= useCallback ===================================================*/

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

