import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MyButton from '@/components/atoms/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bolt - Free Bootstrap 3 Theme</title>
        <meta name="description" content="This is my portfolio site." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keyword" content="bolt, bootstrap, portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={`${styles.inner} ${styles['header-inner']}`}>
          <FontAwesomeIcon icon={['fas', 'fa-bolt']} />
          <MyButton text="Contact" />
        </div>
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
