6. useMemo
	- useMemo

/******************************************************************************************/

// https://github.com/vladilenm/react-hooks-course/tree/master/src/examples
// https://www.youtube.com/watch?t=1403&v=9KJxaFHotqI&feature=youtu.be&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
// https://www.youtube.com/watch?v=btlo8kOoc-A&list=PL9mlH9etz6DyxCwks1tdVzlYhSxrsrjJ4&index=18&ab_channel=%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0web-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8FConstcode

/*================================= useMemo ===================================================*/

// Передайте «создающую» функцию и массив зависимостей. useMemo будет повторно вычислять мемоизированное 
//   значение только тогда, когда значение какой-либо из зависимостей изменилось. Эта оптимизация помогает 
//   избежать дорогостоящих вычислений при каждом рендере.


// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  function createUser(name, surname) {
    const user = { name, surname };

    console.log(user);

    return user;
  }

  function App() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [counter, setCounter] = useState(0);

    const user = useMemo(() => createUser(name, surname), [name, surname]);
    // ф-ция создаеться любой раз когда происходит перендеринг компонента
    // createUser не будет вызываться пока name и surname не измениться

    return (
      <div>
        <button onClick={() => setCounter(counter + 1)}>
          На меня нажали {counter} раз.
        </button>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <br />
        <pre>{JSON.stringify(user, null, 2)}<pre>
      <div>
    );
  }


// Тоесть useMemo нужен для того чтобы мы не перевызывали лишний раз создающую ф-цию, если не зменились ее зависимости
