import Head from 'next/head';

import { About } from '../components/About';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Takao</title>
      </Head>
      <About />
      {/* <section id="works">
        works
      </section>
      <section id="contact">
        contact
      </section> */}
    </div>
  )
}
