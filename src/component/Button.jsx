import React from 'react';

function Button({children, black}) {
  return (
    <button className={`${ black ? "bg-black border-[#8E8585] text-white" : "bg-[#fabb03] border-[rgba(0,0,0,0.2)]"}  border-2 shadow-md py-[10px] px-[20px]  sm:py-[15px] sm:px-[30px] flex items-center gap-2 rounded-[50px] text-[12px] sm:text-[16px] text-black font-bold`}>
      {children}
       <img className='w-4' src={ black ? "./call-icon--white.png" : "./call-icon--black.png"}/>
    </button>
  );
}

export default Button;
