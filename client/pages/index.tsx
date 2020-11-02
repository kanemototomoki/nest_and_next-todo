import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1>ここにタイトル</h1>
        <p className={styles.description}>
          <code className={styles.code}>サブタイ</code>
        </p>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <h2>タイトル</h2>
            <p>テキスト</p>
          </li>
          <li className={styles.card}>
            <h2>タイトル</h2>
            <p>テキスト</p>
          </li>
          <li className={styles.card}>
            <h2>タイトル</h2>
            <p>テキスト</p>
          </li>
          <li className={styles.card}>
            <h2>タイトル</h2>
            <p>テキスト</p>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  )
}
