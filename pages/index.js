import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll, scroller } from 'react-scroll';
import styles from '../styles/animations.module.css';
import '../styles/Home.module.css';



const projects = [
  {
    title: 'PandaBubMe 🐼',
    description: 'Platformer Bullethell',
    link: 'https://egordyu.github.io/project-1/',
    additionalDescription:
      'As part of my coursework, I designed and coded an interactive platformer game with a panda character using canvas and HTML/JavaScript. I researched various platformer games for inspiration, designed the game\'s characters and environment, and incorporated game mechanics to make it engaging. The final product was a fun and interactive game that received positive feedback and helped me improve my coding and game design skills.',
  },
  {
    title: 'GPTSaves 🤖',
    description: 'Website using GPT API to call and save GPT prompts',
    link: 'https://gptsaves-deployment-project2.herokuapp.com/',
    additionalDescription:
      'I developed a website that allows users to communicate with ChatGPT, a chatbot, and securely save their conversations. I integrated the ChatGPT API, designed the UI/UX using HTML, CSS, and JavaScript, and connected it to a PostgreSQL database for secure storage. The website received positive feedback and improved my web development skills, particularly in working with APIs, UI/UX design, database connectivity, and user security.',
  },
  {
    title: 'Card.io 🃏',
    description: 'Flashcard website',
    link: 'https://velvety-croissant-33ec85.netlify.app/decks',
    additionalDescription:
      'I created a flashcard website called Card.io, which allows users to create and study decks of flashcards. The website features an intuitive user interface, responsive design, and seamless integration of flashcard functionality. Users can easily create, edit, and review flashcards, making it a valuable tool for learning and studying various subjects.',
  },
  {
    title: 'ZergCoach 🐛',
    description: 'Zerg Coaching and information website',
    link: 'https://main--lustrous-kulfi-ced407.netlify.app/',
    additionalDescription:
      'ZergCoach is a website dedicated to providing coaching and information about playing Zerg in StarCraft II. It offers comprehensive guides, strategies, and tips for Zerg players of all skill levels. The website also features a community forum where players can discuss strategies, share replays, and connect with other Zerg enthusiasts. Whether you\'re a beginner or an experienced Zerg player, ZergCoach is your go-to resource for improving your gameplay and staying updated with the latest Zerg strategies.',
  },
  // Add more projects here...
];

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
const hobbies = [
  'Starcraft 2 Coaching',
  'Boxing',
  'Hiking',
  'Swimming',
  'Running'
]
export default function Home() {
  const { theme, setTheme } = useTheme();
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [activeLink, setActiveLink] = useState('about');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleExpand = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const section1 = document.getElementById('about');
      const section2 = document.getElementById('skills');
      const section3 = document.getElementById('projects');
      const section4 = document.getElementById('contact');

      const distance1 = section1.getBoundingClientRect().top;
      const distance2 = section2.getBoundingClientRect().top;
      const distance3 = section3.getBoundingClientRect().top;
      const distance4 = section4.getBoundingClientRect().top;

      if (distance1 <= 0 && distance2 > 0) {
        setActiveLink('about');
      } else if (distance2 <= 0 && distance3 > 0) {
        setActiveLink('skills');
      } else if (distance3 <= 0 && distance4 > 0) {
        setActiveLink('projects');
      } else if (distance4 <= 0) {
        setActiveLink('contact');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="container mx-auto max-w-4xl px-4">
      <Head>
        <title>Egor's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <br />
      <button
  onClick={toggleTheme}
  className="mb-6 py-2 px-4 border rounded-full text-sm uppercase tracking-wide font-bold 
  transition-colors duration-200 transform 
  hover:scale-105 
  dark:hover:bg-white dark:hover:text-black
  dark:bg-black dark:text-white"
>
  {theme === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
</button>

      <nav className={`fixed top-100 right-40     ${theme === 'light' ? 'text-black' : 'text-white'}`}>
  <div className="h-full flex flex-col justify-center items-center">
    NAVIGATION
    <ScrollLink
      to="about"
      smooth={true}
      duration={500}
      className={`text-3xl font-semibold mb-4 py-2 px-4 rounded-full hover:bg-red-300 outline ${
        styles['navigation-link']
      } ${styles['about-link']} ${activeLink === 'about' ? 'activeNavLink' : ''}`}
      onClick={() => setExpandedIndex(-1)}
    >
      About
    </ScrollLink>
    <ScrollLink
      to="skills"
      smooth={true}
      duration={500}
      className={`text-3xl font-semibold mb-4 py-2 px-4 rounded-full hover:bg-blue-300 outline ${
        styles['navigation-link']
      } ${styles['skills-link']} ${activeLink === 'skills' ? 'activeNavLink' : ''}`}
      onClick={() => setExpandedIndex(-1)}
    >
      Skills
    </ScrollLink>
    <ScrollLink
      to="projects"
      smooth={true}
      duration={500}
      className={`text-3xl font-semibold mb-4 py-2 px-4 rounded-full hover:bg-purple-300 outline ${
        styles['navigation-link']
      } ${styles['projects-link']} ${activeLink === 'projects' ? 'activeNavLink' : ''}`}
      onClick={() => setExpandedIndex(-1)}
    >
      Projects
    </ScrollLink>
    <ScrollLink
      to="contact"
      smooth={true}
      duration={500}
      className={`text-3xl font-semibold mb-4 py-2 px-4 rounded-full hover:bg-green-300 outline ${
        styles['navigation-link']
      } ${styles['contact-link']} ${activeLink === 'contact' ? 'activeNavLink' : ''}`}
      onClick={() => setExpandedIndex(-1)}
    >
      Contact
    </ScrollLink>
  </div>
</nav>



      <main>


        <section id="about" className="mb-8 flex items-center">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <motion.h1
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.8 }}
                className={`font-bold text-2xl mb-2 ${styles['animation-fade-in']}`}
              >
                About Me
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-xl text-gray-600 dark:text-gray-400 ${styles['animation-fade-in']}`}
              >
                Hi, I'm Egor Dyuzhev, a developer with skills in various languages and
                frameworks. I specialize in JavaScript, CSS, React, Python, Django, and Next.js. I'm passionate about coding and building creative solutions to complex problems. I'm constantly learning and exploring new technologies to expand my skill set.

                <br />

                <br />
                My background is in electrical contracting, but I pivoted to programming recently and never looked back.
                I found my true passion in coding and software development, and I'm excited to apply my technical
                skills and problem-solving abilities to create innovative solutions.

              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`flex justify-center ${styles['animation-fade-in']}`}
            >
              <img src="/egor.png" alt="Egor Dyuzhev" className="w-100 h-102 " />
            </motion.div>
          </div>
        </section>

        <section id="skills" className="mb-8">
          <motion.h1
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`font-bold text-2xl mb-2 ${styles['animation-fade-in']}`}
          >
            Skills
          </motion.h1>
          <motion.ul
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`flex flex-wrap gap-2 ${styles['animation-fade-in']}`}
          >
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <section id="hobbies" className="mb-8">
          <motion.h1
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`font-bold text-2xl mb-2 ${styles['animation-fade-in']}`}
          >
            Hobbies
          </motion.h1>
          <motion.ul
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`flex flex-wrap gap-2 ${styles['animation-fade-in']}`}
          >
            {hobbies.map((hobby, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded"
              >
                {hobby}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <section id="projects" className="mb-8">
  <motion.h1
    initial={{ opacity: 0, translateY: 20 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{ duration: 0.8, delay: 1 }}
    className={`font-bold text-2xl mb-2 ${styles['animation-fade-in']}`}
  >
    Projects
  </motion.h1>
  <ul className="grid grid-cols-1 gap-4">
    {projects.map((project, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
        className={`border dark:border-gray-700 p-8 rounded-xl project ${styles['animation-fade-in']}`}
      >
        <div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400 text-lg font-semibold"
            onClick={() => toggleExpand(index)}
          >
            {project.title}: {project.description}
          </a>
        </div>
        <div className="mt-4">
          <button
            className="arrow-button text-gray-500 hover:text-gray-700 transition-colors duration-200"
            onClick={() => toggleExpand(index)}
          >
            <FiChevronDown size={20} />
          </button>
        </div>
        {expandedIndex === index && (
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.4 }}
            className={`mt-4 ${styles['animation-fade-in']}`}
          >
            <p className="text-lg">{project.additionalDescription}</p>
            {/* Add any additional content you want to show when expanded */}
          </motion.div>
        )}
      </motion.li>
    ))}
  </ul>
</section>


        <section id="contact">
          <motion.h1
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className={`font-bold text-2xl mb-2 ${styles['animation-fade-in']}`}
          >
            Contact Me
          </motion.h1>
          <motion.p
  initial={{ opacity: 0, translateY: 20 }}
  animate={{ opacity: 1, translateY: 0 }}
  transition={{ duration: 0.8, delay: 1.6 }}
  className={`text-gray-600 dark:text-gray-400 ${styles['animation-fade-in']}`}
>
  Email: <a href="mailto:egordyuzhev@gmail.com">egordyuzhev@gmail.com</a>
</motion.p>
<motion.p
  initial={{ opacity: 0, translateY: 20 }}
  animate={{ opacity: 1, translateY: 0 }}
  transition={{ duration: 0.8, delay: 1.8 }}
  className={`text-gray-600 dark:text-gray-400 ${styles['animation-fade-in']}`}
>
  LinkedIn: <a href="https://www.linkedin.com/in/egor-dyuzhev" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/egor-dyuzhev</a>
</motion.p>
<motion.p
  initial={{ opacity: 0, translateY: 20 }}
  animate={{ opacity: 1, translateY: 0 }}
  transition={{ duration: 0.8, delay: 2 }}
  className={`text-gray-600 dark:text-gray-400 ${styles['animation-fade-in']}`}
>
  GitHub: <a href="https://github.com/EGORDYU" target="_blank" rel="noopener noreferrer">github.com/EGORDYU</a>
</motion.p>

        </section>
      </main>
    </div>
  );
}