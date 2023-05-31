import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useTheme } from 'next-themes'


const skills = [
  'JavaScript',
  'CSS',
  'Postgres',
  'MongoDB',
  'React',
  'Python',
  'Django',
  'Next.js',
  'Tailwind CSS',
  // Add more skills here...
];

const projects = [
  {
    title: 'PandaBubMe 🐼',
    description: 'Platformer Bullethell',
    link: 'https://egordyu.github.io/project-1/',
  },
  {
    title: 'GPTSaves 🤖',
    description: 'Website using GPT API to call and save GPT prompts',
    link: 'https://gptsaves-deployment-project2.herokuapp.com/ ',
  },
  {
    title: 'Card.io 🃏',
    description: 'Flashcard website',
    link: 'https://velvety-croissant-33ec85.netlify.app/decks',
  },
  {
    title: 'ZergCoach 🐛',
    description: 'Zerg Coaching and information website',
    link: 'TBD',
  },
  // Add more projects here...
];

export default function Home() {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="mx-auto max-w-xl p-4 md:max-w-3xl">
      <Head>
        <title>Egor's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button 
        onClick={toggleTheme} 
        className="mb-6 py-2 px-4 border rounded-full text-sm uppercase tracking-wide font-bold 
        transition-colors duration-200 transform 
        hover:scale-105 
        dark:hover:bg-white dark:hover:text-black
        dark:bg-black dark:text-white"
      >
        Toggle theme
      </button>

      <main>
        <section id="about" className="mb-8">
          <h1 className="font-bold text-2xl mb-2">About Me</h1>
          <p className="text-gray-600 dark:text-gray-400">Hi, I'm Egor Dyuzhev, a passionate developer with skills in various languages and frameworks.</p>
        </section>

        <section id="skills" className="mb-8">
          <h1 className="font-bold text-2xl mb-2">Skills</h1>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <li key={index} className="bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">{skill}</li>
            ))}
          </ul>
        </section>

        <section id="projects" className="mb-8">
          <h1 className="font-bold text-2xl mb-2">Projects</h1>
          <ul className="grid grid-cols-1 gap-4">
            {projects.map((project, index) => (
              <li key={index} className="border dark:border-gray-700 p-4 rounded">
                <a href={project.link} className="text-blue-600 hover:underline dark:text-blue-400">
                  {project.title}: {project.description}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact">
          <h1 className="font-bold text-2xl mb-2">Contact Me</h1>
          <p className="text-gray-600 dark:text-gray-400">Email: egordyuzhev@gmail.com</p>
          <p className="text-gray-600 dark:text-gray-400">LinkedIn: www.linkedin.com/in/egor-dyuzhev</p>
          <p className="text-gray-600 dark:text-gray-400">GitHub: github.com/EGORDYU</p>
        </section>
      </main>
    </div>
  )
}