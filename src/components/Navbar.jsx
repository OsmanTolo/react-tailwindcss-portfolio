import logo from "../assets/logo.svg";

export const Navbar = () => {
  return (
    <header className='flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-3 sm:py-0'>
      <nav
        className='relative w-full sm:flex sm:items-center sm:justify-between'
        aria-label='Global'
      >
        {/* Flex container */}
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <a className='nav__logo flex-none' href='#' aria-label='Brand'>
            <img
              src={logo}
              alt='Logo'
              className='h-10 w-10 sm:h-12 sm:w-12 transition-all delay-200'
            />
          </a>
          {/* Hamburger menu button */}
          <div className='sm:hidden'>
            <button
              type='button'
              className='hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-[4px] border border-onyx dark:border-white font-medium text-black dark:text-white shadow-sm align-middle hover:bg-indigo-200 hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black dark:focus:ring-offset-white focus:ring-blue transition-all text-sm'
              data-hs-collapse='#navbar-collapse-with-animation'
              aria-controls='navbar-collapse-with-animation'
              aria-label='Toggle navigation'
            >
              <svg
                className='hs-collapse-open:hidden w6 h-6'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                />
              </svg>
              <svg
                className='hs-collapse-open:block hidden w-4 h-4'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
              </svg>
            </button>
          </div>
        </div>
        {/* Menu items */}
        <div
          id='navbar-collapse-with-animation'
          className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'
        >
          <div className='flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7'>
            <a
              className='nav__link font-medium text-base text-black dark:text-white hover:text-blue sm:py-6'
              href='#'
              aria-current='page'
            >
              Home
            </a>
            <a
              className='nav__link font-medium text-base text-black dark:text-white hover:text-blue sm:py-6'
              href='#section--1'
            >
              About
            </a>
            <a
              className='nav__link font-medium text-base text-black dark:text-white hover:text-blue sm:py-6'
              href='#section--2'
            >
              Projects
            </a>
            <a
              className='nav__link flex items-center gap-x-2 font-medium text-base text-black dark:text-white hover:text-blue sm:border-l sm:border-black dark:sm:border-white sm:my-6 sm:pl-6'
              href='#section--3'
            >
              <svg
                className='w-4 h-4'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
              </svg>
              Get in Touch!
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
