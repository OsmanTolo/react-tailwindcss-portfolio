/* eslint-disable react/no-unknown-property */
const Contact = () => {
  return (
    <section className='py-16 mt-0 mb-24 lg:mr-auto lg:ml-auto' id='section--3'>
      <h2 className='mt-[10px] mb-10 text-3xl text-center font-bold text-black dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight'>
        Get in Touch
      </h2>
      <p className='mb-4 text-onyx text-center dark:text-gray-400 text-sm sm:text-md lg:text-xl'>
        Got a project in mind or just want to chat? Drop me a line via email
        below or find me on social media.
      </p>

      {/* <!-- Scoials Card Section --> */}
      <div className='py-5 mx-auto'>
        {/* Grid */}
        <div className='grid gap-6 sm:grid-cols-3'>
          {/* Card */}
          <a
            href='https://www.linkedin.com/in/osman-dumbuya-148581108/'
            className='group flex flex-col bg-white rounded-[4px] shadow-xl hover:shadow-2xl transition dark:bg-onyx'
          >
            <div className='p-4'>
              <div className='flex'>
                <svg
                  class='shrink-0 w-6 h-6 mt-1'
                  fill='#0094ff'
                  height='200px'
                  width='200px'
                  version='1.1'
                  id='Layer_1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlns:xlink='http://www.w3.org/1999/xlink'
                  viewBox='-143 145 512 512'
                  xml:space='preserve'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    <path d='M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z'></path>
                  </g>
                </svg>

                <div className='grow ml-5'>
                  <h3 className='group-hover:text-blue font-semibold text-gray-800 dark:text-gray-200'>
                    LinkedIn
                  </h3>
                  <p className='text-sm text-gray-500'>Connect with me</p>
                </div>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* Card */}
          <a
            href='https://www.linkedin.com/in/osman-dumbuya-148581108/'
            className='group flex flex-col bg-white rounded-[4px] shadow-xl hover:shadow-2xl transition dark:bg-onyx'
          >
            <div className='p-4'>
              <div className='flex'>
                <svg
                  class='shrink-0 w6 h-6 mt-1'
                  viewBox='0 -2 20 20'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlns:xlink='http://www.w3.org/1999/xlink'
                  fill='#0094ff'
                  stroke='#0094ff'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    <title>twitter [#154]</title>
                    <desc>Created with Sketch.</desc>
                    <defs> </defs>
                    <g
                      id='Page-1'
                      stroke='none'
                      stroke-width='1'
                      fill='none'
                      fill-rule='evenodd'
                    >
                      <g
                        id='Dribbble-Light-Preview'
                        transform='translate(-60.000000, -7521.000000)'
                        fill='#0094ff'
                      >
                        <g
                          id='icons'
                          transform='translate(56.000000, 160.000000)'
                        >
                          <path
                            d='M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705'
                            id='twitter-[#154]'
                          >
                            {" "}
                          </path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>

                <div className='grow ml-5'>
                  <h3 className='group-hover:text-blue font-semibold text-gray-800 dark:text-gray-200'>
                    Twitter
                  </h3>
                  <p className='text-sm text-gray-500'>Follow me</p>
                </div>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* Card */}
          <a
            href='https://www.linkedin.com/in/osman-dumbuya-148581108/'
            className='group flex flex-col bg-white rounded-[4px] shadow-xl hover:shadow-2xl transition dark:bg-onyx'
          >
            <div className='p-4'>
              <div className='flex'>
                <svg
                  className='shrink-0 w6 h-6 mt-1'
                  viewBox='0 0 20 20'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlns:xlink='http://www.w3.org/1999/xlink'
                  fill='#000000'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    <title>github [#142]</title>
                    <desc>Created with Sketch.</desc>
                    <defs> </defs>
                    <g
                      id='Page-1'
                      stroke='none'
                      stroke-width='1'
                      fill='none'
                      fill-rule='evenodd'
                    >
                      <g
                        id='Dribbble-Light-Preview'
                        transform='translate(-140.000000, -7559.000000)'
                        fill='#0094ff'
                      >
                        <g
                          id='icons'
                          transform='translate(56.000000, 160.000000)'
                        >
                          <path
                            d='M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399'
                            id='github-[#142]'
                          >
                            {" "}
                          </path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>

                <div className='grow ml-5'>
                  <h3 className='group-hover:text-blue font-semibold text-gray-800 dark:text-gray-200'>
                    Github
                  </h3>
                  <p className='text-sm text-gray-500'>Checkout my projects</p>
                </div>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}
        </div>
      </div>
      {/* <!-- End Card Section --> */}

      {/* <!-- Email button --> */}
      <div className='text-center'>
        <a
          href='mailto:dumbuyaosman@icloud.com'
          className='inline-flex justify-center items-center gap-x-3 text-center bg-blue hover:bg-[#2b88ca] border border-transparent text-sm max-sm:w-full lg:text-base text-white font-medium rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800 mt-10'
        >
          Say Hello
          <svg
            className='w-5 h-5 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            height='48'
            viewBox='0 -960 960 960'
            width='48'
          >
            <path d='M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z' />
          </svg>
        </a>
      </div>
    </section>
  );
};
export default Contact;
