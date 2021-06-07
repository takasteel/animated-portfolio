import Head from 'next/head';
import { About } from '../components/About';

import styles from '../styles/home.module.scss';
import { ScrollTracker } from '../components/ScrollTracker';

export default function Home() {
  return (
    <div className={styles.container}>
      <ScrollTracker>
        <Head>
          <title>Takao</title>
        </Head>
        <About />
        <About />
        {/* <section id="works">
          works
        </section>
        <section id="contact">
          contact
        </section> */}
      </ScrollTracker>
    </div>
  )
}
