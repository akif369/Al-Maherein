import React from 'react'

function OtherStores() {
  return (
    <section className='text-center font-montserrat my-12' id='otherStores'>

    <h1 className='font-montserrat my-6 text-4xl'>OTHER STORES</h1>

    <h2 className='font-redRose text-4xl font-bold mb-10 text-[#A47C35]'>HOME SERVICE AND APPOINTMENTS</h2>

    <a className='bg-[#25D366] text-white inline-flex p-5 gap-1 py-2  rounded-md hover:brightness-105 transition-all' href='/#'><img src='/icon/whatsapp.svg' alt='wh'></img>Whatsapp</a>


    <h1 className='text-2xl font-bold my-12'>STORE LOCATIONS</h1>

    <div>
    <img className='mx-auto' src='/icon/location.svg' alt='location'/>
    <h1 className='text-[#A47C35] mt-2 mb-3 font-redRose font-bold text-2xl '>DUBAI MARINA</h1>
    <p className='font-light text-lg'>+971 1234 5678</p>
    </div>

    </section>
  )
}

export default OtherStores