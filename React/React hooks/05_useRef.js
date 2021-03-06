5. useRef
	- useRef

/******************************************************************************************/

// https://github.com/vladilenm/react-hooks-course/tree/master/src/examples
// https://www.youtube.com/watch?t=1403&v=9KJxaFHotqI&feature=youtu.be&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
// https://www.youtube.com/watch?v=Zn54xUCkh9s&ab_channel=%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0web-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8FConstcode
// https://ru.reactjs.org/docs/react-api.html#reactforwardref

/*================================= useRef ===================================================*/

// useRef как переменная 
У хука useRef 2 предназначения:
  - когда нужна переменная, которая не приводит к обновлению компонентов (перерендорингу).
  - когда нужно создать ссылку на елемент компонента.

По сути, useRef похож на «коробку», которая может содержать изменяемое значение в своём свойстве .current.

	function App() {
		const [counter, setCounter] = useState(0);

		const ref = useRef();

		useEffect(() => {
			ref.current = 0;
		}, [])

		// ref.current - по дефолту undefined
		// ref.current - может быть и обьектом

		return (
			<button onClick={() => ref.current++}> На меня нажали {counter} раз.<button>
			<button onClick={() => setCounter(ref.current)}>Обновить<button>
		);
	}

	// ref - между рендерами помогает собрать некую информацию, которая не приводи перерендорингу



// useRef как ссылка 
	export default function App(props) {
		const [name, setName] = useState("");
		const [surname, setSurname] = useState("");

		const nameInputRef = useRef();
		const surnameInputRef = useRef();

		const handlerKeyUp1 = (e) => {
			if (e.key === "Enter") {
				surnameInputRef.current.focus();
			}
		};

		const handlerKeyUp2 = (e) => {
			if (e.key === "Enter") {
				nameInputRef.current.focus();
			}
		};

		return (
			<form>
				<input
					ref={nameInputRef}
					type="text"
					placeholder="Имя"
					value={name}
					onChange={(e) => setName(e.target.value)}
					onKeyUp={handlerKeyUp1}
				/>
				<br />
				<input
					ref={surnameInputRef}
					type="text"
					placeholder="Фамилия"
					value={surname}
					onChange={(e) => setSurname(e.target.value)}
					onKeyUp={handlerKeyUp2}
				/>
			<form>
		);
	}


// React.forwardRef
React.forwardRef создаёт React компонент, который перенаправляет атрибут ref, что он получает, другому компоненту ниже в дереве. 

	const FancyButton = React.forwardRef((props, ref) => (
	  <button ref={ref} className="FancyButton">
	    {props.children}
	  <button>
	));

	// Теперь вы можете получить ссылку на элемент DOM:
	const ref = React.createRef();
	<FancyButton ref={ref}>Click me!<FancyButton>;

	// В приведённом выше примере React обнаруживает ref, переданный элементу <FancyButton ref={ref}>, и передаёт его через второй аргумент 
	// 	в функцию рендера внутри вызова React.forwardRef. В свою очередь, функция рендера передаёт ref в элемент <button ref={ref}>.