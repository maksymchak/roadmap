4. useContext
	- useContext

/******************************************************************************************/

// https://github.com/vladilenm/react-hooks-course/tree/master/src/examples
// https://www.youtube.com/watch?t=1403&v=9KJxaFHotqI&feature=youtu.be&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

/*================================= useContext ===================================================*/

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
    <ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    <div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Я стилизован темой из контекста!
    <button>
  );
} 
