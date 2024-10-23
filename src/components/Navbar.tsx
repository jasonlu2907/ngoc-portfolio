import React from 'react';
import { Menu, X } from 'lucide-react';
import NavButton from './NavButton';

interface NavbarProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  menuOpen,
  setMenuOpen,
}: {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <header className='top-0 left-0 right-0 bg-white z-50 shadow-sm'>
      <nav className='container mx-auto px-6 py-3 flex justify-between items-center'>
        <div className='flex items-center space-x-3'>
          <img
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt='Avatar'
            className='w-10 h-10 rounded-full object-cover border-2 border-blue-500'
          />
          <a href='#home' className='text-xl font-bold'>
            Ngoc Lu
          </a>
        </div>

        <div className='hidden md:flex space-x-4'>
          <NavButton
            activeSection={activeSection}
            onClick={() => setActiveSection('home')}
            title='Home'
          />
          <NavButton
            activeSection={activeSection}
            onClick={() => setActiveSection('about')}
            title='About'
          />
          <NavButton
            activeSection={activeSection}
            onClick={() => setActiveSection('projects')}
            title='Projects'
          />
          <NavButton
            activeSection={activeSection}
            onClick={() => setActiveSection('contact')}
            title='Contact'
          />
        </div>

        <button className='' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
