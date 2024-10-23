import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Footer from './Footer';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const MyWorks = () => {
  const [hoveredProject, setHoveredProject] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const projects = [
    {
      id: 1,
      title: 'Quizme-fy',
      description:
        'A full-stack web-based application powered by OpenAI that generate quizzes from student notes.',
      role: 'Side Project for TCC Students',
      year: '2024',
      color: 'bg-purple-600',
      link: 'https://ai-quizme-ten.vercel.app/',
      github: 'https://github.com/jasonlu2907/ai-quizme',
    },
    {
      id: 2,
      title: 'XML Editor for JSBSim Aircraft Models',
      description:
        'A graphical user interface for editing Aircraft Models (.xml) for JSBSim Flight Simulator.',
      role: 'Fundamentals of Software Engineer',
      year: '2023',
      color: 'bg-blue-600',
      link: 'https://github.com/jasonlu2907/3310_Group3',
      github: 'https://github.com/jasonlu2907/3310_Group3',
    },
    {
      id: 3,
      title: 'Airbnb Clone',
      description:
        'A clone of the popular platform Airbnb. An online marketplace for short-and-long-term homestays and experiences in various countries and regions.',
      role: 'Side Project',
      year: '2024',
      color: 'bg-green-600',
      link: 'https://rental-places.vercel.app/',
      github: 'https://github.com/jasonlu2907/rental-places',
    },
  ];

  return (
    <div className='min-h-screen bg-neutral-900 text-white'>
      {/* Header */}
      <header className='fixed top-0 w-full z-50 px-8 py-6'>
        <nav className='flex justify-between items-center'>
          <div className='text-xl font-bold'>
            <Link to={'/'}>ngoc</Link>
          </div>
          {/* <button className='px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300'>
            Menu
          </button> */}
        </nav>

        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className={`fixed top-20 right-20 z-50  w-8 h-8 focus:outline-none `}
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
      </header>

      {/* Main Content */}
      <main className='pt-32 px-8'>
        <div className='max-w-7xl mx-auto'>
          {/* Hero Section */}
          <div className='mb-24'>
            <h1 className='text-8xl font-bold mb-8'>
              Selected <br />
              Works
            </h1>
            <p className='text-xl text-neutral-400 max-w-2xl'>
              A collection of projects I've worked on throughout my academic
              journey, showcasing my expertise in full-stack software
              development and user experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className='space-y-1'>
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target='_blank'
                className='block relative'
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(0)}
              >
                <div
                  className={`
                  relative z-10 px-8 py-16 border-t border-white/10
                  transition-all duration-500
                  ${
                    hoveredProject === project.id
                      ? 'bg-white/5'
                      : 'hover:bg-white/5'
                  }
                `}
                >
                  <div className='flex justify-between items-start'>
                    <div className='flex-1'>
                      <h2 className='text-5xl font-bold mb-6'>
                        {project.title}
                      </h2>
                      <p className='text-neutral-400 max-w-2xl mb-8'>
                        {project.description}
                      </p>
                      <div className='flex gap-8 text-sm text-neutral-400'>
                        <span>{project.role}</span>
                        <span>{project.year}</span>
                        <Link
                          to={project.github}
                          className='hover:border-b-2 transition-all ease-in duration-75'
                        >
                          Repository
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`
                      p-4 rounded-full border border-white/20
                      transform transition-all duration-300
                      ${hoveredProject === project.id ? 'rotate-45' : ''}
                    `}
                    >
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>

                {/* Animated background */}
                <div
                  className={`
                    absolute inset-0 ${project.color} opacity-0
                    transition-opacity duration-300
                    ${hoveredProject === project.id ? 'opacity-5' : ''}
                  `}
                />
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MyWorks;
