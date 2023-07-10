/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <section className='flex flex-col items-start min-h-screen h-screen p-0 justify-center'>
      <p className='mb-5 ml-[2px] text-base tracking-widest text-blue leading-tight'>
        Hi, my name is
      </p>
      <h1 className='text-[40px] sm:text-6xl lg:text-[80px] leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white dark:to-blue to-blue font-bold'>
        Osman Dumbuya.
      </h1>
      <h2 className='mt-[5px] text-[40px] sm:text-6xl lg:text-[80px] leading-[1] font-semibold text-onyx dark:text-gray-300'>
        I craft delightful, responsive software.
      </h2>
      <p className='max-w-[540px] lg:max-w-2xl mt-5 text-sm sm:text-lg lg:text-xl leading-snug text-onyx dark:text-gray-300'>
        From wires to websites, I'm an electrical engineer turned software
        developer. I strive to deliver software that is accessible and
        user-friendly to use. Let's collaborate and bring your digital vision to
        life!
      </p>

      {/* CTA buttons */}
      <div className='mt-7 grid gap-3 w-full sm:inline-flex'>
        <a
          className='inline-flex justify-center items-center gap-x-3 text-center bg-blue hover:bg-[#2b88ca] border border-transparent text-sm lg:text-base text-white font-medium rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800'
          href='#section--2'
        >
          Check out my work
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 -960 960 960'
            className='fill-current w-5 h-5'
          >
            <path d='M480-200 240-440l42-42 198 198 198-198 42 42-240 240Zm0-253L240-693l42-42 198 198 198-198 42 42-240 240Z' />
          </svg>
        </a>
        <a
          className='inline-flex justify-center items-center gap-x-3.5 text-blue bg-white dark:bg-black text-sm lg:text-base text-center border border-blue shadow-sm rounded-[4px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:hover:border-gray dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800 hover:bg-blue'
          href='../assets/osman-dumbuya-cv.pdf'
          download
        >
          Resume
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='fill-current w-5 h-5'
            viewBox='0 -960 960 960'
            stroke='currentColor'
          >
            <path d='M220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Zm260-153L287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193Z' />
          </svg>
        </a>
      </div>
    </section>
  );
};
export default Hero;
