import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  function handlerSubmit(event){
    event.preventDefault();
    if(input && !/^[ ]{1,}$/.test(input) && !list.includes(input)){
      list.push(input)
      setList(list)
      setInput('')
    }
  }
  function changeForm(event){
    setInput(event.target.value)
  }
  function removeItem(item){
    if(item >= 0 && item < list.length){
        setList(list.filter((value, index) => index !== item))
    }
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
          <ul className={styles.list}>
            {list.map((item, index) => (
              <li className={styles.item}>
                <span>{item} </span>
                <button className={styles.removeButton} onClick={() => removeItem(index)}>&times;</button>
              </li>
            ))}
          </ul>
        </section>
        <form onSubmit onSubmit={handlerSubmit}>
          <input className={styles.input} value={input} onChange={changeForm} />
          <button className={styles.btn} type={"submit"}>Adicionar</button>
          <button className={styles.btn} type={'button'} onClick={() => setList([])}>Limpar</button>
        </form>
        <section>
        </section>
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
