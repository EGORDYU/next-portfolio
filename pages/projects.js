import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Projects.module.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    link: '/projects/project1',
  },
  // Add more projects here...
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Egor Dyuzhev - Projects</title>
        <meta name="description" content="A showcase of my projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <Link href={project.link}>
                <a>{project.title}: {project.description}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
