NextJS 
- Начало работы
- Схема

/******************************************************************************************/
// https://www.youtube.com/watch?v=OezyScvU9-c&ab_channel=knowcity
// https://github.com/ecrofeg/graphql-tutorial
// https://www.youtube.com/watch?v=GMJNSBur-lM&ab_channel=webDev

// https://graphql.org/
// https://www.apollographql.com/docs/react/
// https://graphql-code-generator.com/
// https://nestjs.com/

/*================================ Начало работы ==============================================*/

GraphQL - это язык запросов к API и среда выполнения этих запросов с имеющимися данными.
// GraphQL - Graph qery language (Разработан фейсбуком)

GraphQL - не привязан к какому либо языку.

GraphQL - это язык; язык, который используется для взаимодействия с сервером для получений данных.

GraphQL обеспечивает полное и понятное описание данных в вашем API, дает клиентам возможность запрашивать именно 
	то, что им нужно и не более того, упрощает обновление API-интерфейсов с течением времени и предоставляет мощные 
	инструменты для разработчиков.

Отличие GraphQL от Rest API, что у нас только один url адресс с которым мы общаемся по средству GraphQL.
	И мы запрашиваем только те данные которые нам нужны. К примеру если мы хотим получить только id или title из 
	обьекта - мы можем это сделать, мы не получим остальную часть ответа.

GraphQL имеет свою типизацию и валидацию, мы не сможем получить сущность которая не описана.


Apollo Client - GraphQL Client для JavaScript, который упрощает общение с Backend сервисами GraphQL при помощи 
	современных реакт хуков. Мы сами указываем какие данные мы хотим получить, в каком компоненте. В Apollo Client
	реализован прогресивный кеш, который кеширует целые сущности.


/*================================ Схема ==============================================*/

GraphQL схема - это база, скелет всех GraphQL приложений. 

Схема - описывает сущности которые могут быть в приложении и какие манипуляции можно с ними проводить.

Перед тем как сервер сможет отдавать какие-либо данные клиенту ему нужно указать с какими данными придется работать. 
	За описание данных отвечает схема.


// Файл схемы

	type Book {
		id: ID!
		title: String!
		author: Author
		description: String!
	}
	// ! - обозначает что поле обьязательное (Backend - обязан вернуть этот параметр, он не может вернуть null)

	input BookInput {
		title: String!
		description: String!
	}

	type Author {
		id: ID!
		firstName: String!
		lastName: String!
	}

	type Query {
		getAllBooks: [Book]!
		getBook(id: ID!): Book!
	}
	// После двоеточия обозначаеться тип данных ([Book] - массив Book)
	// getBook(id: ID!) - получение Book по id, ну и обратно по запросу мы получим обьязательно Book

	type Mutation {
		addBook(book: BookInput!): Boolean!
	}
	// addBook - мутация создает новый Book, в аргументе мы отправляем обьект input с данными по Book
	// Все данные которые подаються на вход мутациям должные иметь тип input, так GraphQL сможет различать 
	//	 какие аргументы идут в запросах а какие являються обычными сущностями.

В файл схеме описаны все сущности и запросы приложения.

В GraphQL все общение с Frontend или Backend осущиствляеться или с помощью запросов либо с помощью мутаций.

// Mutation - подрузумевают что вы мутируете данные. (создаете новую книгу или редактируете существующую)
// Query - получение списка книг или списка это запрос.



Как Backend взаимодействует со схемой:
// Если коротко - какая ф-ция выполниться при запросе какого-либо поля.

/*
	const root = {
		getAllBooks: () => {
			return allBooks;
		},
		getBook: params => {
			return allBooks.find(({ id }) => params.id === id);
		},
		addBook: params => {
			allBooks.push({
				id: allBooks.length + 1,
				...params.book,
				author: {
					id: '1',
					firstName: 'Alex',
					lastName: 'Kislov'
				}
			});

			return true;
		}
	};
*/


/*================================ GraphiQL ==============================================*/

GraphiQL это очень удобная браузерная IDE для создания и выполнения запросов к endpoint-ам GraphQL, 
	кроме того он являеться и документацией (где описаны все запросы, сущности, мутации)

// Шаблон запроса:

	query GetAllBooks {
		getAllBooks {
			id
			title
			description
			author {
				id
				firstName
				lastName
			}
		}
	}

Как видим мы передаем запрос в том виде в котором хотим его получить. К примеру если нам нужен был 
	только id книги - мы бы сделали так:

	query GetAllBooks {
		getAllBooks {
			id
		}
	}
	// На выходе мы получим массив книг - только их id.

GraphQL - работает по типу что ты запросил то ты и получишь.


// Шаблон запроса книги по id:

	query GetBook($id: ID!) {
		getBook(id: $id) {
			id
			title
			description
			author {
				id
				firstName
				lastName
			}
		}
	}

/*================================ Фрагменты ==============================================*/

Чтобы не дублировать однотипные структуры в запросах (см. пример ниже) в GraphQL есть фрагменты.

// Пример фрагмента:

	fragment BookFragment on Book {
		title
		author {
			firstName
			lastName
		}
	}

	query GetAllBooks {
		getAllBooks {
		...BookFragment
		}
	}

	query GetBook($id: ID!) {
		getBook(id: $id) {
			id
		 	...BookFragment
		}
	}


/*================================ GraphQL Frontend ==============================================*/

// GetAllBooks.graphql
	query GetAllBooks {
		getAllBooks {
			id
			title
			description
			author {
				id
				firstName
				lastName
			}
		}
	}

// GraphQL запросы можно хранить в спецыальных файлах или описывать непосредственно в самих компонентах

// AllBooks.jsx
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import * as GetAllBooks from './GetAllBooks.graphql';

export default ({ onSelect }) => {
	const { data, loading } = useQuery(GetAllBooks);
 
	// useQuery - хук который отправляет GraphQL запрос (внутрь передаеться сам GraphQL запрос)
	// Назад мы получаем обьект data в котором вся инфа полученная от сервера и "boolean" loading (идет запрос или нет)

	return (
		<div>
			<h1>All books<h1>

			{loading && <div>Loading...<div>}

			{!loading && data.getAllBooks && (
				<ul>
					{data.getAllBooks.map(book => (
						<li key={book.title}>
							{book.id}: {book.title} ({book.author.firstName} {book.author.lastName}){' '}
							<button onClick={() => onSelect(book)}>select<button>
						<li>
					))}
				<ul>
			)}
		<div>/
	);
}/;

// В data.getAllBooks лежит массив наших книг (getAllBooks - название запроса из схемы)


/*================================ GraphQL Frontend  Example 2 ==============================================*/

// GetBook.graphql
	query GetBook($id: ID!) {
		getBook(id: $id) {
			id
			title
			description
			author {
				id
				firstName
				lastName
			}
		}
	}

// Book.jsx
	import React from 'react';
	import { useQuery } from '@apollo/react-hooks';
	import * as GetBook from './GetBook.graphql';

	export default ({ id }) => {
		const { data, loading } = useQuery(GetBook, {
			variables: {
				id: id
			}
		});

		const book = data ? data.getBook : null;

		return book ? (
			<div>
				<h1>{book.title}<h1>
			<div>
		) : (
			<div>Loading...<div>
		);
	};