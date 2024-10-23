import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './App.module.css';
import Main from './components/Main';
import About from './components/About';
import Project from './components/Project';
import Menu from './components/Menu';
// import Footer from './components/Footer';

function App() {
  // const [activeSection, setActiveSection] = useState('home');
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sections = [
    { id: 'home', content: 'Section 1' },
    { id: 'about', content: 'Section 2' },
    { id: 'projects', content: 'Section 3' },
    { id: 'contact', content: 'Section 4' },
  ];

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      containerRef.current?.children[index].scrollIntoView({
        behavior: 'smooth',
      });
      setCurrentSection(index);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startY: number;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!isScrolling) {
        setIsScrolling(true);
        if (e.deltaY > 0) {
          scrollToSection(currentSection + 1);
        } else {
          scrollToSection(currentSection - 1);
        }
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;
      if (Math.abs(deltaY) > 50) {
        // Threshold for swipe
        if (deltaY > 0) {
          scrollToSection(currentSection + 1);
        } else {
          scrollToSection(currentSection - 1);
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isScrolling]);

  return (
    // Section indicator
    <div className={styles.pageWrapper}>
      <div className={styles.sideIndicator}>
        {sections.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === currentSection ? styles.activeDot : ''
            }`}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </div>

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className={`fixed top-20 right-20 z-50  w-8 h-8 focus:outline-none ${
          currentSection === 2 ? 'text-lime-custom' : 'text-purple-custom'
        }`}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <div className='relative w-full h-full'>
          <div
            className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45' : '-translate-y-1'
            }`}
          ></div>
          <div
            className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45' : 'translate-y-1'
            }`}
          ></div>

          {/* Side Menu */}
          {isMenuOpen && (
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          )}
        </div>
      </button>

      <div
        ref={containerRef}
        className={`min-h-screen bg-white text-gray-800 font-sans ${styles.divScroll}`}
      >
        <Main id='home' />

        <About id='about' />

        <Project id='project' />

        <section id='contact' className='section py-20 bg-white'>
          <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold mb-8'>Get in Touch</h2>
            <p className='text-lg mb-8'>
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
            <div className='flex justify-center space-x-6'>
              <a
                href='https://github.com/jasonlu2907'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-blue-500'
              >
                <Github size={24} />
              </a>
              <a
                href='https://www.linkedin.com/in/jasonlu99/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-blue-500'
              >
                <Linkedin size={24} />
              </a>
              <a
                href='mailto:ngoc.lu729l@gmail.com'
                className='text-gray-600 hover:text-blue-500'
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
