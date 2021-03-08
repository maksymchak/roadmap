7. useCallback
	- useCallback

/******************************************************************************************/

// https://github.com/vladilenm/react-hooks-course/tree/master/src/examples
// https://www.youtube.com/watch?t=1403&v=9KJxaFHotqI&feature=youtu.be&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
// https://www.youtube.com/watch?v=btlo8kOoc-A&list=PL9mlH9etz6DyxCwks1tdVzlYhSxrsrjJ4&index=18&ab_channel=%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0web-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8FConstcode

/*================================= useCallback ===================================================*/

// Передайте встроенный колбэк и массив зависимостей. Хук useCallback вернёт мемоизированную версию колбэка, 
//   который изменяется только, если изменяются значения одной из зависимостей. Это полезно при передаче колбэков 
//   оптимизированным дочерним компонентам, которые полагаются на равенство ссылок для предотвращения ненужных рендеров


useCallback - делает по сути тоже самое что и useMemo, только useMemo запоминает обьект который может возвращать без изменений,
  то useCallback ф-цию

  import React from "react";
  import { useCallback } from "react";
  import { useEffect } from "react";
  import { useState } from "react";

  function App() {
    const [message, setMessage] = useState("Всем привет");
    const [counter, setCounter] = useState(0);

    const greeting = useCallback((text) => {
      console.log(text);
    }, []);

    useEffect(() => {
      greeting(message);
    }, [greeting, message]);

    return (
      <button onClick={() => setCounter(counter + 1)}>
        На меня нажали {counter} раз.
      <button>
    );
  }

  export default App;
