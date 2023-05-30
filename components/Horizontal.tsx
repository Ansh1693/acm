import React from 'react'

const Horizontal = () => {
  return (
    <div>
        <div className='w-full h-full bg-slate-900 snap-both snap-mandatory  overflow-scroll flex'>
        <section className='flex-none snap-start flex justify-center items-center w-screen h-screen bg-gray-800 text-rose-700'>
          <h1 className='font-serif text-9xl'>Page One</h1>
        </section>
        <section className='flex-none snap-start flex justify-center items-center w-screen h-screen bg-slate-800 text-pink-800'>
          <h1 className='font-serif text-9xl'>Page Two</h1>
        </section>
        <section className='flex-none snap-start flex justify-center items-center w-screen h-screen bg-gray-900 text-fuchsia-200'>
          <h1 className='font-serif text-9xl'>Page Three</h1>
        </section>
      </div>
    </div>
  )
}

export default Horizontal