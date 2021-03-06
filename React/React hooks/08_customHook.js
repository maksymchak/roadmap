8. customHook
	- customHook

/******************************************************************************************/

// https://github.com/vladilenm/react-hooks-course/tree/master/src/examples
// https://www.youtube.com/watch?t=1403&v=9KJxaFHotqI&feature=youtu.be&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

/*================================= customHook ===================================================*/

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