import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC<{
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`fixed top-20 right-20 z-1 bg-white flex flex-col items-center justify-center text-2xl transition-transform duration-1000 ease-in-out transform ${
        isMenuOpen ? 'scale-100' : 'scale-0'
      }`}
      style={{
        height: '66.67vh', // 2/3 of the screen height
        width: '25vw', // 1/4 of the screen width
        transformOrigin: 'top right',
      }}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className='absolute top-5 right-5 text-purple-custom hover:text-dark-purple-custom text-3xl'
        aria-label='Close menu'
      >
        <p className='text-3xl'>&times;</p>
      </button>
      <div className='flex flex-col items-center space-y-8 mt-20'>
        <Link
          to={'/'}
          onClick={() => setIsMenuOpen(false)}
          className='text-purple-custom hover:underline hover:translate-x-1 transition ease-in-out duration-300'
        >
          Home
        </Link>
        <Link
          to={'/myworks'}
          onClick={() => setIsMenuOpen(false)}
          className='text-purple-custom hover:underline hover:translate-x-1 transition ease-in-out duration-300'
        >
          My Work
        </Link>

        <a
          href='#resume'
          onClick={() => setIsMenuOpen(false)}
          className='text-purple-custom hover:underline hover:translate-x-1 transition ease-in-out duration-300'
        >
          My Résumé
        </a>
      </div>

      <div className='flex flex-col items-center space-y-4 mt-16 text-gray-400 font-thin'>
        <span>SAY HI</span>
        <a
          href='mailto:ngoc.lu729@gmail.com'
          className='text-purple-custom hover:underline hover:translate-x-1 transition ease-in-out duration-2000'
        >
          ngoc.lu729@gmail.com
        </a>
        <a
          href='https://t.me/ngoclu'
          className='text-purple-custom hover:underline hover:translate-x-1 transition ease-in-out duration-2000'
        >
          t.me/ngoclu
        </a>
      </div>

      <div className='flex justify-center space-x-8 mt-16 text-purple-custom'>
        <a
          href='https://github.com/jasonlu2907'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-600 hover:text-dark-purple-custom'
        >
          <Github size={24} />
        </a>
        <a
          href='https://www.linkedin.com/in/jasonlu99/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-600 hover:text-dark-purple-custom'
        >
          <Linkedin size={24} />
        </a>
        <a
          href='mailto:ngoc.lu729l@gmail.com'
          className='text-gray-600 hover:text-dark-purple-custom'
        >
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default Menu;
