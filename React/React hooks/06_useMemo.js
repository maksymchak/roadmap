6. useMemo
	- useMemo

/******************************************************************************************/

// https://github.com/vladilenm/react-hooks-course/tree/master/src/examples
// https://www.youtube.com/watch?t=1403&v=9KJxaFHotqI&feature=youtu.be&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

/*================================= useMemo ===================================================*/

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
