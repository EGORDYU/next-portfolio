import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import styles from '../styles/animations.module.css';
import '../styles/Home.module.css';
import '../styles/Projects.module.css';
import '../styles/Modal.module.css';
import { projects, contracting } from '../data/projects';
import skills from '../data/skills';
import hobbies from '../data/hobbies';
import Modal from './modal';
import { FaReact, FaPython, FaJsSquare, FaCss3, FaDatabase, FaLeaf, FaRegFileAlt } from 'react-icons/fa';
import ImageCarousel from '@/components/Carousel';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [activeLink, setActiveLink] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true); // Set to true after the component mounts
  }, []);

  const toggleExpand = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let activeSection = activeLink; // Keep the current active section

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const topOffset = window.innerHeight * 0.5; // Start detection at the top 50% of the viewport
        if (rect.top <= topOffset && rect.bottom >= topOffset) {
          if (section.id === 'hobbies') {
            activeSection = 'skills'; // Treat 'hobbies' section as 'skills'
          } else {
            activeSection = section.id;
          }
        }
      });

      // Check if the user is at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        activeSection = 'contact';
      }

      setActiveLink(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set the initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink]);


  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);


  if (!mounted) {
    return null; // Avoid rendering mismatched content
  }

  return (
    <div className="flex items-center justify-center min-h-screen">

      <div className="grid max-w-screen-md mx-auto bg-gray-100 mt-[10px] dark:bg-gray-900 shadow-light dark:shadow-dark border border-gray-300 dark:border-gray-700">

        <Head>
          <title>Egor's Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

       <nav className={`fixed bottom-[-100px] right-40 h-screen ${theme === 'light' ? 'text-black' : 'text-white'}`}>

        <div className="h-full flex flex-col justify-start items-center">
          <button
            onClick={toggleTheme}
            className="mb-6 py-2 px-4 border rounded-full text-sm uppercase tracking-wide font-bold transition-colors duration-200 transform hover:scale-105 dark:hover:bg-white dark:hover:text-black dark:bg-black dark:text-white"
          >
            {theme === 'light' ? 'Toggle Dark Mode' : 'Toggle Light Mode'}
          </button>
          {/*  <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={`text-3xl font-semibold mb-4 py-2 px-4 rounded-full hover:bg-blue-900 outline ${styles['navigation-link']} ${activeLink === 'about' ? styles.activeNavLink : ''}`}
            onClick={() => setExpandedIndex(-1)}
            offset={-300}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            className={`text-3xl font-semibold mb-4 py-2 px-4 rounded-full hover:bg-blue-900 outline ${styles['navigation-link']} ${activeLink === 'skills' ? styles.activeNavLink : ''}`}
            onClick={() => setExpandedIndex(-1)}
            offset={-300}
          
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="contracts"
            smooth={true}
            duration={500}
            className={`text-3xl font-semibold mb-4 py-2 px-4 rounded-full hover:bg-blue-900 outline ${styles['navigation-link']} ${activeLink === 'contracts' ? styles.activeNavLink : ''}`}
            onClick={() => setExpandedIndex(-1)}
            offset={-300}
          
          >
            Contract Work
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className={`text-3xl font-semibold mb-4 py-2 px-4 rounded-full hover:bg-blue-900 outline ${styles['navigation-link']} ${activeLink === 'projects' ? styles.activeNavLink : ''}`}
            onClick={() => setExpandedIndex(-1)}
            offset={-300}
        
          >
            Personal Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={`text-3xl font-semibold mb-4 py-2 px-4 rounded-full hover:bg-blue-900 outline ${styles['navigation-link']} ${activeLink === 'contact' ? styles.activeNavLink : ''}`}
            onClick={() => setExpandedIndex(-1)}
            offset={-300}
          >
            Contact
          </ScrollLink> */}
        </div> 
      </nav>

        <main className="col-span-3 container mx-auto px-8">
          <section id="about" className="mb-16 flex items-center section-large pt-[50px]">
            <div className="grid grid-cols-2 gap-8">
              <div>
              <motion.h1
                  initial={{ opacity: 0, translateY: 20 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`font-bold text-4xl  mb-[50px] ${styles['animation-fade-in']}`}
                >
                  EGOR DYUZHEV
                </motion.h1>
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
                  className={`text-xl text-gray-600 dark:text-white ${styles['animation-fade-in']}`}
                >
                  Hi, I'm Egor Dyuzhev, a developer with skills in various languages and frameworks. I specialize in JavaScript, CSS, React, Python, Django, and Next.js. I'm passionate about coding and building creative solutions to complex problems. I'm constantly learning and exploring new technologies to expand my skill set.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`flex justify-center ${styles['animation-fade-in']}`}
              >
                <ImageCarousel />
              </motion.div>
            </div>
          </section>

          <section id="skills" className="mb-16 section-large">
            <motion.h1
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`font-bold text-2xl mb-8 ${styles['animation-fade-in']}`}
            >
              Skills
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${styles['animation-fade-in']}`}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-200 dark:bg-gray-700 py-6 px-4 rounded-lg shadow-lg flex flex-col items-center text-center"
                >
                  <div className="text-4xl mb-4">
                    {skill === 'JavaScript' && <FaJsSquare />}
                    {skill === 'CSS' && <FaCss3 />}
                    {skill === 'Postgres' && <FaDatabase />}
                    {skill === 'MongoDB' && <FaLeaf />}
                    {skill === 'React' && <FaReact />}
                    {skill === 'Python' && <FaPython />}
                    {skill === 'Django' && <FaRegFileAlt />}
                    {skill === 'Next.js' && <FaReact />}
                    {skill === 'Tailwind CSS' && <FaCss3 />}

                  </div>
                  <div className="text-lg font-semibold">
                    {skill}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section id="contracts" className="mb-16 section-large">
            <motion.h1
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className={`font-bold text-2xl mb-2 ${styles['animation-fade-in']}`}
            >
              Contracts
            </motion.h1>
            <ul className="grid grid-cols-2 gap-4">
              {contracting.map((contract, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, translateY: 20 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  className={`border dark:border-gray-700 p-8 rounded-xl project animation-fade-in hover-outline`}
                  style={{ backgroundImage: `url(${contract.bgImage})`, backgroundSize: 'cover' }}
                  onClick={() => {
                    setSelectedProject(contract);
                    setIsModalOpen(true);
                  }}
                >
                  <div onClick={() => setSelectedProject(contract)}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400 text-lg font-semibold"
                    >
                      <div className='text-2xl outline-text'>
                        {contract.title}
                        <br />
                      </div>
                    </a>
                  </div>
                  <div className="mt-4">
                  </div>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, translateY: 10 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.4 }}
                      className={`mt-4 ${styles['animation-fade-in']}`}
                    >
                      <p className="text-lg">{contract.additionalDescription}</p>
                      {/* Add any additional content you want to show when expanded */}
                    </motion.div>
                  )}
                </motion.li>
              ))}
            </ul>

            {selectedProject && (
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} theme={theme} />
            )}
          </section>

          <section id="projects" className="mb-16 section-large">
            <motion.h1
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className={`font-bold text-2xl mb-2 ${styles['animation-fade-in']}`}
            >
              Personal Projects
            </motion.h1>
            <ul className="grid grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, translateY: 20 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  className={`border dark:border-gray-700 p-8 rounded-xl project animation-fade-in hover-outline`}
                  style={{ backgroundImage: `url(${project.bgImage})`, backgroundSize: 'cover' }}
                  onClick={() => {
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }}
                >
                  <div onClick={() => setSelectedProject(project)}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400 text-lg font-semibold"
                    >
                      <div className='text-2xl outline-text'>
                        {project.title}
                        <br />
                      </div>
                    </a>
                  </div>
                  <div className="mt-4">
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

            {selectedProject && (
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} theme={theme} />
            )}
          </section>

          <section id="hobbies" className="mb-16 section-large">
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



          <section id="contact" className='pt-[100px] mb-16 section-large'>
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
          <footer className="text-center py-4">
            © Egor Dyuzhev {new Date().getFullYear()} GPLv3
          </footer>
        </main>

      </div>
    </div>
  );
}
