import Head from 'next/head';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Egor Dyuzhev - Contact</title>
        <meta name="description" content="Contact information." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Me</h1>
        <p>Email: egordyuzhev@gmail.com</p>
        <p>LinkedIn: www.linkedin.com/in/egor-dyuzhev</p>
        <p>GitHub: github.com/EGORDYU</p>
      </main>
    </>
  );
}
