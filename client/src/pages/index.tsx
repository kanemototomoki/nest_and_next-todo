import Head from 'next/head'
import styles from '../styles/Home.module.css'

import MyButton from '@/components/atoms/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bolt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <MyButton text="Contact" />
      </header>
      <main className={styles.main}>
        <div className={styles.theme}>
          <div className={styles.inner}>
            <h1 className={styles.title}>Bolt Theme</h1>
            <p>FREE BOOTSTRAP THEMES</p>
          </div>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  )
}
