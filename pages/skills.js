import Head from 'next/head';
import styles from '@/styles/Skills.module.css';

const skills = [
  'JavaScript',
  'CSS',
  'Postgres',
  'MongoDB',
  'React',
  'Python',
  'Django',
  'Next.js',
  // Add more skills here...
];

export default function Skills() {
  return (
    <>
      <Head>
        <title>Egor Dyuzhev - Skills</title>
        <meta name="description" content="A list of my skills." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Skills</h1>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
