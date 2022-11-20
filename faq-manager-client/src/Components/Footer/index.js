import React from 'react';

function Footer() {
  return (
    <footer className='bg-gray-200 text-center lg:text-left text-xs'>
      <div className='text-gray-700 p-4 md:flex'>
        <div className=' md:flex-1 justify-start'>
          Copyright © iLabs,All Rights Reserved
        </div>
        <div className=' md:flex-initial justify-end sm:text-center'>
          © Privacy Policy | Terms of Service | Help Center
        </div>
      </div>
    </footer>
  );
}

export default Footer;
