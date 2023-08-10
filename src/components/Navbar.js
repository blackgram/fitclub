import React from 'react'

const Navbar = () => {
  return (
    <div class=" w-full  bg-grayish shadow-[0px_8px_8px_#a4e0a4] flex justify-between items-center font-ave text-white">
      <h1 class="font-bold text-[28px] p-2 mx-[30px]">FITCLUB</h1>
      <div class="list-none flex w-[500px] justify-evenly text-sm">
        <div className='cursor-pointer'><a href='#home' >Home</a></div>
        <div className='cursor-pointer'><a href='#about' >About Us</a></div>
        <div className='cursor-pointer'><a href='#pricing' >Pricing</a></div>
        <div className='cursor-pointer'><a href='#community' >Community</a></div>
      </div>
      <div class="flex px-8 items-center text-sm ">
        <div class="mx-1"><a href='#a'>Login</a></div>
        <div class="mx-1 bg-greenish text-center rounded-[5px] py-1 px-1.5"><a href='#a'>Register</a></div>
      </div>
    </div>
  )
}

export default Navbar