"use client";
import React from 'react'

function Navbar() {
    const [open,setOpen] = React.useState<boolean>(false);

    


  return (
    <>
    <div className='absolute top-6 right-6 z-50 cursor-pointer first-line:text-black' onClick={()=>setOpen(!open)}>
        <div className='h-12 w-12 rounded-full bg-white flex flex-col gap-1 items-center justify-center  border-b-land-red'>
          <span className={`w-6 h-[2px] bg-red-800 ${!open ? "translate-x-0" : "rotate-[135deg]"}`}>&nbsp;</span>
          <span className={`w-6 h-[2px] bg-red-800 ${!open ? "translate-x-0" : "hidden"}`}>&nbsp;</span>
          <span className={`w-6 h-[2px] bg-red-800 ${!open ? "translate-x-0" : "rotate-[-135deg]"}`}>&nbsp;</span>
        </div>
    </div>
    {/* {open && (<div className=''>
                <div className={`h-screen  transition-all ease-in-out duration-[2000] w-screen  absolute right-0 top-0 animate-lTr bg-gray-500 `}></div>
                <div className='h-screen w-half absolute right-0 animate-rTl  bg-slate-800'> </div>
        </div>)} */}
        <div className={`h-screen w-screen transition- bg-amber-100 ease-in-out duration-[1000ms] ${open ? "translate-x-0": "-translate-x-[100vw]"}` }>
                {/* <div className={`h-screen w-screen   `}></div> */}
            <div className={`shadow-xl h-screen w-half transition-all ease-in-out  duration-[1000ms] bg-amber-500/50 ${open ? "translate-x-[50vw] opacity-100": "translate-x-[200vw]  opacity-0"}`}>
                <div className='flex flex-col pt-[20vh]' id='gg'>
                    <div className='pt-5 pl-4 cursor-pointer '><span className='text-5xl uppercase font-bold font-mono hover:line-through'>hello</span></div>
                    <div className='pt-5 pl-4 cursor-pointer '><span className='text-5xl uppercase font-bold font-mono hover:line-through'>hola</span></div>
                    <div className='pt-5 pl-4 cursor-pointer '><span className='text-5xl uppercase font-bold font-mono hover:line-through'>amigos</span></div>
                    <div className='pt-5 pl-4 cursor-pointer '><span className='text-5xl uppercase font-bold font-mono hover:line-through'>valorant</span></div>
                    <div className='pt-5 pl-4 cursor-pointer '><span className='text-5xl uppercase font-bold font-mono hover:line-through'>fck off</span></div>
                </div>
        </div>
        </div>

        
    </>
  )
}

export default Navbar;