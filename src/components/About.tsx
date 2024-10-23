const About = ({ id }: { id: string }) => {
  return (
    <section id={id} className='mt-16 mx-36 h-[calc(100vh-64px)] flex relative'>
      <div className='px-2 h-full justify-around flex flex-col items-center'>
        {/* Top section */}
        <div className='flex flex-row gap-8'>
          <div className='w-1/3 p-8'>
            <h2 className='text-6xl font-bold text-indigo-600 mb-6'>
              About Me
            </h2>
            <p className='text-lg text-gray-700 leading-relaxed'>
              I am a senior student at the{' '}
              <span className='underline'>
                University of Texas at Arlington
              </span>{' '}
              majoring in Software Engineering. I'm currently working as a{' '}
              <span className='font-bold text-md'>SI Leader</span> at Tarrant
              County College and a{' '}
              <span className='font-bold text-md'>
                Technical Manager for Videos Systems
              </span>{' '}
              at Sportec Solutions.
            </p>
          </div>
          <div className='w-2/3 flex flex-col justify-between p-8'>
            <div className='flex space-x-4 mb-4'>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className='w-3 h-3 rounded-full bg-white border-2 border-indigo-500'
                ></div>
              ))}
            </div>
            <div className='flex justify-end'>
              <div className='flex flex-col space-y-4'>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className='w-4 h-4 border-2 border-indigo-600 transform -rotate-45'
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className='flex'>
          <div className='w-1/3 p-8'>
            <div className='flex justify mb-6'>
              <div className='flex flex-col space-y-4'>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className='w-4 h-4 border-2 border-indigo-600 transform -rotate-45'
                  ></div>
                ))}
              </div>
            </div>
            <div className='flex justify-end space-x-4'>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className='w-3 h-3 rounded-full bg-white border-2 border-indigo-500'
                ></div>
              ))}
            </div>
          </div>
          <div className='w-2/3 p-8'>
            <h2 className='text-6xl font-bold text-indigo-600 mb-6'>
              What I Do
            </h2>
            <p className='text-lg text-gray-700 leading-relaxed'>
              With a passion for building scalable, full-stack web applications,
              I bring ideas to life through code. When I'm not coding, you can
              find me reading books, working on my side-projects, contributing
              to open-source projects, or enjoying a good cup of coffee while
              sketching new application ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
