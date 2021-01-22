import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  function handlerSubmit(event){
    event.preventDefault();
    if(input && !/^[ ]{1,}$/.test(input)){
      list.push(input)
      setList(list)
      setInput('')
    }
  }
  function changeForm(event){
    setInput(event.target.value)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Ikigai Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className={styles.title}>Welcome to Ikigai Test</h1>
      </header>
      <main className={styles.main}>
        <section>
          <ul>
            {list.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </section>
        <form onSubmit onSubmit={handlerSubmit}>
          <input value={input} onChange={changeForm} />
          <button>Adicionar</button>
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://guilhermeweb.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Guilherme Isaías Web Developer '}
        </a>
      </footer>
    </div>
  )
}
