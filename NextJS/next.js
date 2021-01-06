NextJS 
- Начало работы
- useRouter
- next/link
- Router push
- Head
- Layout
- Error page
- Cоздание API мок сервреа
- getInitialProps

/******************************************************************************************/
// https://www.youtube.com/watch?v=_EOrSmjdOZQ&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
// https://github.com/vladilenm/next-crash-course
// https://nextjs.org/

/*================================ Начало работы ==============================================*/

Next.js — JavaScript фреймворк, созданный поверх React.js для создания SSR приложений, созданный компанией Vercel.

SSR - server side rendering

SSR - создан для решение проблемы SEO выдачи, так это большая проблема в SPA.
Когда поисковые роботы заходят на SPA они видят пустой контент страницы - данные подставляються динамически

/*================================ useRouter ==============================================*/

Если вы хотите получить доступ к routerобъекту внутри любого функционального компонента в своем 
	приложении, вы можете использовать useRouterловушку, взгляните на следующий пример:


	import { useRouter } from 'next/router'

	function ActiveLink({ children, href }) {
	  const router = useRouter()

	  // router.query.id   будет наш динамический id

	  const style = {
	    marginRight: 10,
	    color: router.pathname === href ? 'red' : 'black',
	  }

	  const handleClick = (e) => {
	    e.preventDefault()
	    router.push(href)
	  }

	  return (
	    <a href={href} onClick={handleClick} style={style}>
	      {children}
	    <a>
	  )
	}

	export default ActiveLink	

/*================================ next/link ==============================================*/

Переходы между маршрутами на стороне клиента можно включить с помощью Linkкомпонента, 
	экспортируемого с помощью next/link.

	import Link from 'next/link'

	function Home() {
	  return (
	    <ul>
	      <li>
	        <Link href="/">
	          <a>Home<a>
	        <Link>
	      <li>
	      <li>
	        <Link href="/about">
	          <a>About Us<a>
	        <Link>
	      <li>
	      <li>
	        <Link href="/blog/hello-world">
	          <a>Blog Post<a>
	        <Link>
	      <li>
	    <ul>
	  )
	}

	export default Home

Link принимает следующие реквизиты:
	// href- Путь или URL-адрес для перехода. Это единственная необходимая опора
	// as- Необязательный декоратор для пути, который будет отображаться в адресной строке браузера. 
	// passHref- Заставляет Linkпередать hrefсобственность своему потомку. По умолчаниюfalse

/*================================ Router push ==============================================*/

Handles client-side transitions, this method is useful for cases where next/link is not enough.


	import Router from 'next/router'

	function ActiveLink({ children, href }) {


	  const handleClick = (e) => {
	    Router.push('/')
	  }

	  return (
	    <button onClick={handleClick} >
	      {children}
	    <button>
	  )
	}

	export default ActiveLink

/*================================ Head ==============================================*/

We expose a built-in component for appending elements to the head of the page:

	import Head from 'next/head'

	function IndexPage() {
	  return (
	    <div>
	      <Head>
	        <title>My page title<title>
	        <meta name="viewport" content="initial-scale=1.0, width=device-width" >
	      <Head>
	      <p>Hello world!<p>
	    <div>
	  )
	}

	export default IndexPage

/*================================ Layout ==============================================*/


export	function Latyout({children}) {
	  return (
	  	<>
			<Head>
			<title>My page title<title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" >
			<Head>
	  		<nav>Nav panel<nav>
	  		<main>
	  			{children}
	  		<main>
	  	<>
	  )
	}


/*================================ Error Page ==============================================*/

To create a custom 404 page you can create a pages/404 file. This file is statically generated at build time.

// pages/404.js
export default function Custom404() {
  return <h1>404 - Page Not Found<h1>
}


/*================================ Cоздание API мок сервреа ==============================================*/

// https://github.com/typicode/json-server

JSON Server - при помощи этого пакета мы создаем фейковый REST API.


Install JSON Server

// npm install -g json-server


Create a db.json file with some data

/*
	{
	  "posts": [
	    { "id": 1, "title": "json-server", "author": "typicode" }
	  ],
	  "comments": [
	    { "id": 1, "body": "some comment", "postId": 1 }
	  ],
	  "profile": { "name": "typicode" }
	}
*/

package.json file add:

// 'mock': "json-server -w db.json -p 4200 -d 450"




/*================================ getInitialProps ==============================================*/

getInitialPropsвключает рендеринг на стороне сервера и позволяет выполнять начальное заполнение данных, 
	что означает отправку страницы с данными, уже заполненными с сервера. Это особенно полезно для SEO.


Example1:

/*
	function Page({ stars }) {
	  return <div>Next stars: {stars}</div>
	}

	Page.getInitialProps = async (ctx) => {
	  const res = await fetch('https://api.github.com/repos/vercel/next.js')
	  const json = await res.json()
	  return { stars: json.stargazers_count }
	}

	export default Page
*/


Page.getInitialProps - определяем статический метод, который будет выполняться на сервере.
Дальше мы делаем запрос к любому ендпойнту к которому захотим.


Example2:

	import {useState, useEffect} from 'react'
	import Head from 'next/head'
	import {MainLayout} from '../components/MainLayout'
	import Link from 'next/link'
	import {MyPost} from '../interfaces/post'
	import {NextPageContext} from 'next'

	interface PostsPageProps {
	  posts: MyPost[]
	}

	export default function Posts({ posts: serverPosts }: PostsPageProps {
	  const [posts, setPosts] = useState(serverPosts)

	  useEffect(() => {
	    async function load() {
	      const response = await fetch('http://localhost:4200/posts')
	      const json = await response.json()
	      setPosts(json)
	    }

	    if (!serverPosts) {
	      load()
	    }
	  }, [])

	  if (!posts) {
	    return <MainLayout>
	      <p>Loading ...<p>
	    <MainLayout>
	  }

	  return (
	    <MainLayout>
	      <Head>
	        <title>Posts Page | Next Course<title>
	      <Head>
	      <h1>Posts Page<h1>
	      <ul>
	        {posts.map(post => (
	          <li key={post.id}>
	            <Link href={`/post/[id]`} as={`/post/${post.id}``}>
	              <a>{post.title}<a>
	            <Link>
	          <li>
	        ))}
	      <ul>
	    <MainLayout>
	  )
	}

	Posts.getInitialProps = async ({req}: NextPageContext => {
	  if (!req) {
	    return {posts: null}
	  }

	  const response = await fetch(`${process.env.API_URL}/posts`)
	  const posts: MyPost[] = await response.json()

	  return {
	    posts
	  }
	}



Example3:

	import {useState, useEffect} from 'react'
	import {MainLayout} from '../../components/MainLayout'
	import Link from 'next/link'
	import {useRouter} from 'next/router'
	import {NextPageContext} from 'next'
	import {MyPost} from '../../interfaces/post'

	interface PostPageProps {
	  post: MyPost
	}

	export default function Post({ post: serverPost }: PostPageProps) {
	  const [post, setPost] = useState(serverPost)
	  const router = useRouter()

	  useEffect(() => {
	    async function load() {
	      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
	      const data = await response.json()
	      setPost(data)
	    }

	    if (!serverPost) {
	      load()
	    }
	  }, [])

	  if (!post) {
	    return <MainLayout>
	      <p>Loading ...<p>
	    <MainLayout>
	  }

	  return(
	    <MainLayout>
	      <h1>{post.title}<h1>
	      <hr />
	      <p>{post.body}<p>
	      <Link href={'/posts'}><a>Back to all posts<a><Link>
	    <MainLayout>
	  )
	}

	interface PostNextPageContext extends NextPageContext {
	  query: {
	    id: string
	  }
	}

	Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
	  if (!req) {
	    return {post: null}
	  }

	  const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)
	  const post: MyPost = await response.json()

	  return {
	    post
	  }
	}

	// export async function getServerSideProps({ query, req }) {
	//   // if (!req) {
	//   //   return {post: null}
	//   // }
	//   const response = await fetch(`http://localhost:4200/posts/${query.id}`)
	//   const post = await response.json()
	//
	//   return {props: {post}}
	// }