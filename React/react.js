React 
- Начало работы
- PropTypes



/******************************************************************************************/
// https://www.youtube.com/watch?v=xJZa2_aldDs&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

// https://ru.reactjs.org/docs/events.html

/*================================ Начало работы ==============================================*/

React — это JavaScript-библиотека для разработки пользовательского интерфейса (разработан компанией Facebook)

При помощи React мы создаем приложение составляя его из компонентов

JSX - расширение языка JavaScript.

Один из способов задавать css стили в Реакте:

/*	const styles = {
	  li: {
	    display: 'flex',
	    justifyContent: 'space-between',
	    alignItems: 'center',
	    padding: '.5rem 1rem',
	    border: '1px solid #ccc',
	    borderRadius: '4px',
	    marginBottom: '.5rem'
	  },
	  input: {
	    marginRight: '1rem'
	  }
	}


    <li style={styles.li}>
    	This is list
    <li>
 */


/*================================ PropTypes ==============================================*/

По мере роста вашего приложения вы можете отловить много ошибок с помощью проверки типов. 

PropTypes предоставляет ряд валидаторов, которые могут использоваться для проверки, что получаемые данные корректны. 

/*	function TodoItem({ todo, index, onChange }) {
	  if (todo.completed) {
	    classes.push('done')
	  }

	  return (
	  	<>Hello<>
	  )
	}

	TodoItem.propTypes = {
	  todo: PropTypes.object.isRequired,
	  index: PropTypes.number,
	  onChange: PropTypes.func.isRequired
	}
*/

Пример использования возможных валидаторов:

import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // Можно объявить проп на соответствие определённому JS-типу.
  // По умолчанию это не обязательно.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
};


/*================================ FORMS ==============================================*/


function AddTodo({ onCreate }) {
  const input = useInputValue('')

  function submitHandler(event) {
    event.preventDefault()

    if (input.value().trim()) {
      onCreate(input.value())
      input.clear()
    }
  }

  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <input {...input.bind} >
      <button type='submit'>Add todo<button>
    <form>
  )
}