/* eslint-disable react/no-unescaped-entities */
import image from "../assets/images/osman-cropped-no-bg.png";
const About = () => {
  return (
    <section className='py-16' id='section--1'>
      <h2 className='mt-[10px] mb-10 text-3xl font-bold text-black sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white'>
        A little about me
      </h2>
      <div className='flex flex-col md:grid md:grid-cols-3 gap-12 md:gap-16 xl:gap-20 md:items-center'>
        <div className='left col-span-2'>
          <div className='description text-onyx dark:text-gray-400 text-sm sm:text-md lg:text-xl'>
            <p className='mb-4'>
              Hey there! I'm Osman, a web developer who's passionate about
              bringing ideas to life online. During the pandemic lockdown in
              2020, I rekindled my love for coding, which I initially disliked
              during my degree. Seeing my code come alive on a website was truly
              exhilarating!
            </p>
            <p className='mb-4'>
              Now, I am a graduate of a
              <span className='text-blue'>
                Front-end Web Development Boot Camp
              </span>
              , and have extensive experience in building web applications using
              a variety of technologies. My current focus is on developing
              inclusive and accessible digital experiences with ReactJs.
            </p>
            <p className='mb-4'>
              As an individual who thrives on challenges, I am constantly
              <span className='text-blue'>
                seeking new opportunities to learn and grow
              </span>
              . Below, you'll find a snapshot of the technologies I have been
              actively working with.
            </p>
          </div>

          <ul className='skills mt-5 grid grid-cols-skills-grid overflow-hidden md:flex md:justify-around'>
            <li className='flex items-center flex-col justify-center py-2 px-2'>
              <i
                className='fa-brands fa-html5 text-blue text-5xl md:text-6xl'
                alt='HTML Icon'
              ></i>
              <span className='text-xs text-onyx dark:text-gray-300'>
                HTML 5
              </span>
            </li>
            <li className='flex items-center flex-col justify-center py-2 px-2'>
              <i
                className='fa-brands fa-css3-alt text-blue text-5xl md:text-6xl'
                alt='HTML Icon'
              ></i>
              <span className='text-xs text-onyx dark:text-gray-300'>
                CSS 3
              </span>
            </li>
            <li className='flex items-center flex-col justify-center py-2 px-2'>
              <i
                className='fa-brands fa-square-js text-blue text-5xl md:text-6xl'
                alt='HTML Icon'
              ></i>
              <span className='text-xs text-onyx dark:text-gray-300'>
                JavaScript
              </span>
            </li>
            <li className='flex items-center flex-col justify-center py-2 px-2'>
              <i
                className='fa-brands fa-react text-blue text-5xl md:text-6xl'
                alt='HTML Icon'
              ></i>
              <span className='text-xs text-onyx dark:text-gray-300'>
                React
              </span>
            </li>
            <li className='flex items-center flex-col justify-center py-2 px-2'>
              <i
                className='fa-brands fa-node text-blue text-5xl md:text-6xl'
                alt='HTML Icon'
              ></i>
              <span className='text-xs text-onyx dark:text-gray-300'>
                NodeJs
              </span>
            </li>
            <li className='flex items-center flex-col justify-center py-2 px-2'>
              <i
                className='fa-brands fa-git-alt text-blue text-5xl md:text-6xl'
                alt='HTML Icon'
              ></i>
              <span className='text-xs text-onyx dark:text-gray-300'>Git</span>
            </li>
          </ul>
        </div>
        {/* End Col */}

        <div className='relative grid place-content-center'>
          <img
            className='img rounded-[4px] object-cover'
            src={image}
            alt='Image of Osman with a baseball hat.'
          />
          <div className='absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white to-white rounded-[4px] dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0'></div>

          {/* SVG */}
          <div className='absolute bottom-0 left-0'>
            <svg
              className='w-2/3 ml-auto h-auto text-onyx dark:text-white'
              width='630'
              height='451'
              viewBox='0 0 630 451'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='531'
                y='352'
                width='99'
                height='99'
                fill='currentColor'
              />
              <rect
                x='140'
                y='352'
                width='106'
                height='99'
                fill='currentColor'
              />
              <rect
                x='482'
                y='402'
                width='64'
                height='49'
                fill='currentColor'
              />
              <rect
                x='433'
                y='402'
                width='63'
                height='49'
                fill='currentColor'
              />
              <rect
                x='384'
                y='352'
                width='49'
                height='50'
                fill='currentColor'
              />
              <rect
                x='531'
                y='328'
                width='50'
                height='50'
                fill='currentColor'
              />
              <rect x='99' y='303' width='49' height='58' fill='currentColor' />
              <rect x='99' y='352' width='49' height='50' fill='currentColor' />
              <rect x='99' y='392' width='49' height='59' fill='currentColor' />
              <rect x='44' y='402' width='66' height='49' fill='currentColor' />
              <rect
                x='234'
                y='402'
                width='62'
                height='49'
                fill='currentColor'
              />
              <rect
                x='334'
                y='303'
                width='50'
                height='49'
                fill='currentColor'
              />
              <rect x='581' width='49' height='49' fill='currentColor' />
              <rect x='581' width='49' height='64' fill='currentColor' />
              <rect
                x='482'
                y='123'
                width='49'
                height='49'
                fill='currentColor'
              />
              <rect
                x='507'
                y='124'
                width='49'
                height='24'
                fill='currentColor'
              />
              <rect x='531' y='49' width='99' height='99' fill='currentColor' />
            </svg>
          </div>
        </div>
        {/* End Col */}
      </div>
    </section>
  );
};
export default About;
