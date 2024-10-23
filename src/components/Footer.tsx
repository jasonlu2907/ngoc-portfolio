import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    // Footer
    <footer className='py-16 px-8 mt-24 border-t border-white/10 bg-neutral-900'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='text-neutral-400'>
          © 2024 Ngoc Lu. All rights reserved
        </div>
        <div className='flex gap-8'>
          <a
            href='https://github.com/jasonlu2907'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-white'
          >
            <Github size={24} />
          </a>
          <a
            href='https://www.linkedin.com/in/jasonlu99/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-white'
          >
            <Linkedin size={24} />
          </a>
          <a
            href='mailto:ngoc.lu729l@gmail.com'
            className='text-gray-600 hover:text-white'
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
