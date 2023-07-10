/* eslint-disable react/no-unescaped-entities */
const Projects = () => {
  return (
    <section className='py-16' id='section--2'>
      <h2 className='mt-[10px] mb-10 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight'>
        Things I've built
      </h2>
      {/* Project Cards Container */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='project-card group flex flex-col h-full bg-white shadow-xl rounded-[4px] hover:shadow-2xl dark:bg-onyx'>
          <div className='p-4 md:p-6'>
            <span className='header block mb-1 text-xs font-semibold uppercase text-blue'>
              TravelInfo
            </span>
            <div className='flex flex-col justify-between'>
              <h3 className='text-[22px] font-semibold text-onyx dark:text-gray-300'>
                Travel Information Finder
              </h3>
              <p className='mt-3 text-sm text-onyx dark:text-gray-300'>
                A one stop travel information web app to take you around the
                world and back in a couple of clicks. View information such as
                weather forecast, latest local news, most visited places and
                geographical details of your destination. Convert between
                different currencies and see what other travellers have to say
                about their experience of the location.
              </p>
              <ul className='mt-8 flex gap-3 text-xs text-onyx dark:text-gray-300'>
                <li className='tech-icon'>Tailwind</li>
                <li className='tech-icon'>JavaScript</li>
                <li className='tech-icon'>React</li>
                <li className='tech-icon'>Node</li>
              </ul>
            </div>
          </div>
          <div className='mt-auto flex border-t border-gray-300 divide-x divide-gray-300 dark:border-gray-600 dark:divide-gray-600'>
            <a
              className='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-[4px] font-medium bg-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm sm:p-4 dark:bg-onyx dark:hover:bg-[#313531]'
              href='https://spacepineapple.github.io/infotravel-travel-information/'
            >
              <span className='material-symbols-outlined text-blue w-6 h-6'>
                open_in_new
              </span>
            </a>
            <a
              className='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-[4px] font-medium bg-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm sm:p-4 dark:bg-onyx dark:hover:bg-[#313531]'
              href='https://github.com/OsmanTolo/infotravel-travel-information'
            >
              <span className='material-symbols-outlined text-blue w-6 h-6'>
                folder
              </span>
            </a>
          </div>
        </div>
        {/* Card */}
        <div className='project-card group flex flex-col h-full bg-white shadow-xl rounded-[4px] hover:shadow-2xl dark:bg-onyx'>
          <div className='p-4 md:p-6'>
            <span className='block mb-1 text-xs font-semibold uppercase text-blue'>
              JustBuy
            </span>
            <div className='flex flex-col justify-between'>
              <h3 className='text-[22px] font-semibold text-onyx dark:text-gray-300'>
                eCommerce Store
              </h3>
              <p className='mt-3 text-sm text-onyx dark:text-gray-300'>
                A user-friendly and minimalisitc e-commerce site built with
                ReactJS. Browse and search for products from a range of
                categories. Each product listing includes information such as
                the product name, description, price, and images. Customers can
                add products to their shopping cart and checkout when they are
                ready to purchase.
              </p>
              <ul className='mt-8 flex gap-3 text-xs text-onyx dark:text-gray-300'>
                <li className='tech-icon'>React</li>
                <li className='tech-icon'>Redux</li>
                <li className='tech-icon'>Axios</li>
                <li className='tech-icon'>Node</li>
              </ul>
            </div>
          </div>
          <div className='mt-auto flex border-t border-gray-300 divide-x divide-gray-300 dark:border-gray-600 dark:divide-gray-600'>
            <a
              className='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-[4px] font-medium bg-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm sm:p-4 dark:bg-onyx dark:hover:bg-[#313531]'
              href='https://spacepineapple.github.io/infotravel-travel-information/'
            >
              <span className='material-symbols-outlined text-blue w-6 h-6'>
                open_in_new
              </span>
            </a>
            <a
              className='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-[4px] font-medium bg-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm sm:p-4 dark:bg-onyx dark:hover:bg-[#313531]'
              href='https://github.com/OsmanTolo/infotravel-travel-information'
            >
              <span className='material-symbols-outlined text-blue w-6 h-6'>
                folder
              </span>
            </a>
          </div>
        </div>
        {/* Card */}
        <div className='project-card group flex flex-col h-full bg-white shadow-xl rounded-[4px] hover:shadow-2xl dark:bg-onyx'>
          <div className='header h-full p-4 md:p-6'>
            <span className='block mb-1 text-xs font-semibold uppercase text-blue'>
              TeamView
            </span>
            <div className='flex flex-col justify-center'>
              <h3 className='text-[22px] font-semibold text-onyx dark:text-gray-300'>
                CLI Profile Generator
              </h3>
              <p className='mt-3 text-sm text-onyx dark:text-gray-300'>
                A command line interface (CLI) app that takes user-fed employee
                information and generates a static HTML webpage to display a
                summary of each employee for quick access to their emails and
                GitHub profiles. The application will run in the users CLI of
                their integrated development environment (IDE) using NodeJs.
              </p>
              <ul className='mt-8 flex gap-3 text-xs text-onyx dark:text-gray-300'>
                <li className='tech-icon'>JavaScript</li>
                <li className='tech-icon'>NodeJs</li>
                <li className='tech-icon'>Inquirer</li>
                <li className='tech-icon'>Async</li>
              </ul>
            </div>
          </div>
          <div className='footer mt-auto flex border-t border-gray-300 divide-x divide-gray-300 dark:border-gray-600 dark:divide-gray-600'>
            <a
              className='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-[4px] font-medium bg-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm sm:p-4 dark:bg-onyx dark:hover:bg-[#313531]'
              href='https://spacepineapple.github.io/infotravel-travel-information/'
            >
              <span className='material-symbols-outlined text-blue w-6 h-6'>
                open_in_new
              </span>
            </a>
            <a
              className='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-[4px] font-medium bg-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm sm:p-4 dark:bg-onyx dark:hover:bg-[#313531]'
              href='https://github.com/OsmanTolo/team_profile_generator-javascript-nodeJs'
            >
              <span className='material-symbols-outlined text-blue w-6 h-6'>
                folder
              </span>
            </a>
          </div>
        </div>
        {/* Card */}
        <div className='project-card group flex flex-col h-full bg-white shadow-xl rounded-[4px] hover:shadow-2xl dark:bg-onyx'>
          <div className='p-4 md:p-6'>
            <span className='block mb-1 text-xs font-semibold uppercase text-blue'>
              WeatherNow
            </span>
            <h3 className='text-[22px] font-semibold text-onyx dark:text-gray-300'>
              Weather Forecaster
            </h3>
            <p className='mt-3 text-sm text-onyx dark:text-gray-300'>
              Another weather forecast application dashboard for the web. The
              app allows a user to view current and the next five days weather
              weather forecast for any city. Upon searching for a city, the
              current weather conditions for that city is presented from a query
              to OpenWeather API, along with the current date using Moment.js
              library.
            </p>
            <ul className='mt-8 flex gap-3 text-xs text-onyx dark:text-gray-300'>
              <li className='tech-icon'>JavaScript</li>
              <li className='tech-icon'>jQuery</li>
              <li className='tech-icon'>RestAPI</li>
              <li className='tech-icon'>Moment.js</li>
            </ul>
          </div>
          <div className='mt-auto flex border-t border-gray-300 divide-x divide-gray-300 dark:border-gray-600 dark:divide-gray-600'>
            <a
              className='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-[4px] font-medium bg-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm sm:p-4 dark:bg-onyx dark:hover:bg-[#313531]'
              href='https://osmantolo.github.io/weather_now-apis-javascript/'
            >
              <span className='material-symbols-outlined text-blue w-6 h-6'>
                open_in_new
              </span>
            </a>
            <a
              className='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-[4px] font-medium bg-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm sm:p-4 dark:bg-onyx dark:hover:bg-[#313531]'
              href='https://github.com/OsmanTolo/weather_now-apis-javascript'
            >
              <span className='material-symbols-outlined text-blue w-6 h-6'>
                folder
              </span>
            </a>
          </div>
        </div>
        {/* Card */}
        <div className='project-card group flex flex-col h-full bg-white shadow-xl rounded-[4px] hover:shadow-2xl dark:bg-onyx'>
          <div className='p-4 md:p-6'>
            <span className='block mb-1 text-xs font-semibold uppercase text-blue'>
              Social being
            </span>
            <h3 className='text-[22px] font-semibold text-onyx dark:text-gray-300'>
              CRUD Social Feed
            </h3>
            <p className='mt-3 text-sm text-onyx dark:text-gray-300'>
              A social media feed page that performs the four basic CRUD
              operations of a software application - Create, Read, Update and
              Delete. Users will be able to create data (i.e. the post), have
              access to the data in the UI by reading the data, update or edit
              the data, and delete the data.
            </p>
            <ul className='mt-8 flex gap-3 text-xs text-onyx dark:text-gray-300'>
              <li className='tech-icon'>JavaScript</li>
              <li className='tech-icon'>HTML</li>
              <li className='tech-icon'>CSS</li>
              <li className='tech-icon'>Local Storage</li>
            </ul>
          </div>
          <div className='mt-auto flex border-t border-gray-300 divide-x divide-gray-300 dark:border-gray-600 dark:divide-gray-600'>
            <a
              className='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-[4px] font-medium bg-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm sm:p-4 dark:bg-onyx dark:hover:bg-[#313531]'
              href='https://osmantolo.github.io/CRUD-social-feed-app/'
            >
              <span className='material-symbols-outlined text-blue w-6 h-6'>
                open_in_new
              </span>
            </a>
            <a
              className='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-[4px] font-medium bg-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm sm:p-4 dark:bg-onyx dark:hover:bg-[#313531]'
              href='https://github.com/OsmanTolo/CRUD-social-feed-app'
            >
              <span className='material-symbols-outlined text-blue w-6 h-6'>
                folder
              </span>
            </a>
          </div>
        </div>
        {/* Card */}
        <div className='project-card group flex flex-col h-full bg-white shadow-xl rounded-[4px] hover:shadow-2xl dark:bg-onyx'>
          <div className='p-4 md:p-6'>
            <span className='block mb-1 text-xs font-semibold uppercase text-blue'>
              Quiz Bee
            </span>
            <h3 className='text-xl font-semibold text-onyx dark:text-gray-300'>
              JS Code Quiz App
            </h3>
            <p className='mt-3 text-sm text-onyx dark:text-gray-300'>
              A multiple choice quiz that lives on the browser. The user is a
              presented with various JavaScript questions with multiple choice
              answers to choose from. When answer is clicked, the next question
              appears. If the answer clicked was incorrect then subtract time
              from the clock. The quiz will end when all questions are answered,
              or the player run out of time.
            </p>
            <ul className='mt-8 flex gap-3 text-xs text-onyx dark:text-gray-300'>
              <li className='tech-icon'>JavaScript</li>
              <li className='tech-icon'>HTML</li>
              <li className='tech-icon'>CSS</li>
              <li className='tech-icon'>Web APIs</li>
            </ul>
          </div>
          <div className='mt-auto flex border-t border-gray-300 divide-x divide-gray-300 dark:border-gray-600 dark:divide-gray-600'>
            <a
              className='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-[4px] font-medium bg-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm sm:p-4 dark:bg-onyx dark:hover:bg-[#313531]'
              href='https://osmantolo.github.io/code_quiz-web_apis-javascript/'
            >
              <span className='material-symbols-outlined text-blue w-6 h-6'>
                open_in_new
              </span>
            </a>
            <a
              className='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-[4px] font-medium bg-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm sm:p-4 dark:bg-onyx dark:hover:bg-[#313531]'
              href='https://github.com/OsmanTolo/code_quiz-web_apis-javascript'
            >
              <span className='material-symbols-outlined text-blue w-6 h-6'>
                folder
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className='text-center'>
        <a
          className='inline-flex justify-center items-center gap-x-3 text-center bg-blue hover:bg-[#2b88ca] border border-transparent text-sm max-sm:w-full lg:text-base text-white font-medium rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800 sm:mt-20 mt-16'
          href='https://github.com/OsmanTolo?tab=repositories'
        >
          View more
          <svg
            className='w-2.5 h-2.5'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
export default Projects;
