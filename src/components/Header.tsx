/* eslint-disable prettier/prettier */
import React from 'react';

const Header = () => {
  return (
    <div className='bg-[#C4C7C8] h-16 mobile:hidden'>
      <div className='absolute top-5 left-12 text-[inherit] mobile:top-2 mobile:text-sm mobile:left-2'>
        Call Us Today! 416-519-3621|
        <a
        //   className="text-[inherit]"
        //   href="mailto:info@holdinghandscommunitynetwork.org"
        //   target="_blank"
        >
          <span className='[text-decoration:underline]'>
            info@holdinghandscommunitynetwork.org
          </span>
        </a>
      </div>
      <div id='google_translate_element'></div>
    </div>
  );
};

export default Header;
