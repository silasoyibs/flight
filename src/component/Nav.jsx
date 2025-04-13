import React from 'react';
import Button from './Button';

function Nav() {
  return (
      <nav className="flex justify-between bg-white items-center max-w-[1112px] h-[80px] mx-auto rounded-[100px] px-2 sm:px-6">
        <img src="/logo-img.png"  className='h-[30px] sm:h-[40px] w-auto'/>
        <Button black>(888) 217-8007</Button>
      </nav>
  );
}

export default Nav;



