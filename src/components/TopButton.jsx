import React from 'react'
import ScrollToTop from 'react-scroll-to-top';

function TopButton() {
  return (
    <div className=''>
      <ScrollToTop smooth top='100' color='orange'  className='flex rounded-[30%] items-center justify-center z-20 shadow-2xl bg-slate-500 hover:scale-110 duration-200 animate-bounce'/>
    </div>
  )
}

export default TopButton
