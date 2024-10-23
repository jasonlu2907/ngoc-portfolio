import React from 'react';
import { Link } from 'react-router-dom';

const Project: React.FC<{
  id: string;
}> = ({ id }) => {
  return (
    <section id={id} className='min-h-screen bg-indigo-600 text-white'>
      <div className='container mx-auto h-screen'>
        <div className='flex h-full'>
          {/* Left Column */}
          <div className='w-1/2 flex flex-col justify-center pr-12'>
            <h1 className='text-7xl font-bold mb-8'>
              <span className='text-lime-custom'>Over the</span>
              <br />
              <span className='text-lime-300'>years,</span>
            </h1>

            <div className='space-y-6 text-lg'>
              <p>
                My dad is my biggest influence, encouraging me to explore the
                possibilities of technology and coding. I still remember his
                speech of continuous learning and his fascination and curiosity
                gradually turned into a career path I wanted to follow.
              </p>

              <p>
                Today, I specialize in full-stack web development and am
                proficient in a range of technologies. My skills include
                languages like JavaScript, TypeScript, Java, and SQL, as well as
                front-end and back-end frameworks.
              </p>

              <p>
                One of the most significant aspects of my journey has been the
                development of several major software projects. Most recently, I
                developed Quizme-fy, an AI-powered quiz creation tool that
                automates the process of generating quizzes from PDF student
                notes.
              </p>

              <p>
                I’m currently working at Sportec Solutions as a Technical
                Manager for Video Systems. In this role, I manage technical
                projects related to sports technology, acting as the middle
                point of communication between the broadcast and the VAR team
                and ensuring seamless delivery of data-driven solutions.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className='w-1/2 flex items-center justify-center relative'>
            {/* The button with hover animation */}
            <div className='group relative overflow-hidden bg-lime-300 text-dark-purple-custom px-12 py-6 font-semibold text-xl transition-transform duration-300 hover:text-white hover:scale-100'>
              <div className='relative z-10 hover:border-b-2 hover:cursor-pointer transition ease-linear duration-300'>
                <Link to={'/myworks'}>My Works</Link>
              </div>
              <div className='absolute inset-0 bg-indigo-900 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></div>
            </div>

            {/* Decorative elements */}
            <div className='absolute w-4 h-4 bg-white rounded-full top-1/4 right-1/4'></div>
            <div className='absolute w-8 h-8 bg-lime-300 rounded-full bottom-1/3 left-1/3'></div>
            <div className='absolute w-6 h-6 border-2 border-white rounded-sm top-1/3 left-1/4 transform rotate-45'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
