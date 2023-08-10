import React from 'react'

const Navbar = () => {
  return (
    <div class=" w-full  bg-grayish shadow-[0px_8px_8px_#a4e0a4] flex justify-between items-center font-ave text-white">
      <h1 class="font-bold text-[28px] p-2 mx-[30px]">FITCLUB</h1>
      <ul class="list-none flex w-[500px] justify-evenly text-sm">
        <li><a href='#home' className='cursor-pointer'>Home</a></li>
        <li><a href='#about' className='cursor-pointer'>About Us</a></li>
        <li><a href='#pricing' className='cursor-pointer'>Pricing</a></li>
        <li><a href='#community' className='cursor-pointer'>Community</a></li>
      </ul>
      <div class="flex px-8 items-center text-sm ">
        <div class="mx-1"><a href='#a'>Login</a></div>
        <div class="mx-1 bg-greenish text-center rounded-[5px] py-1 px-1.5"><a href='#a'>Register</a></div>
      </div>
    </div>
  )
}

export default Navbar