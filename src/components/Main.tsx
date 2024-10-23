const Main = ({ id }: { id: string }) => {
  return (
    <section id={id} className='h-[calc(100vh-64px)] flex relative'>
      <div className='flex w-full'>
        <div className='flex-grow-0 flex-shrink-0 basis-2/3 bg-purple-custom text-lime-custom p-10 flex flex-col justify-between'>
          <div className='text-2xl font-bold'>ngoc</div>

          <div className='flex flex-col justify-between pl-10'>
            <h1 className='text-6xl font-bold mb-6'>Frontend Developer.</h1>
            <p className='text-xl mb-10'>
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>
          </div>

          <div>
            <div className='flex justify-between'>
              <div className='w-5/12'>
                <h3 className='text-lg font-light'>
                  Highly skilled at progressive enhancement, design systems & UI
                  Engineering.
                </h3>
              </div>
              <div className='w-5/12'>
                <h3 className='text-lg font-light'>
                  Proven experience building successful products for clients
                  across several countries.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className='flex-grow-0 flex-shrink-0 basis-1/3 bg-lime-custom relative flex items-center justify-center'>
          <img
            src='/jason_selfcare.jpg'
            alt='Frontend Developer'
            className='max-w-[50%] border-4 border-white'
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
