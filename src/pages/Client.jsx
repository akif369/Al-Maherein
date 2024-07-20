import React from 'react'
import ClientCard from '../components/ClientCard'

function Client() {
  return (
    <section id='client' className='font-montserrat text-center my-7'>
      <h1 className='text-4xl font-semibold my-3'>What Our Clients Say</h1>
      <p className='text-lg text-gray-700'>Hundreds of customers rely on our services. Hear their stories.</p>

      <div className='flex my-14 justify-around flex-wrap gap-y-10'>
        <ClientCard  customerName={"John"} type={"Valued Customer"} review={`User reviews like the one above praise The Smart Tailor's unparalleled craftsmanship and perfection. They really put effort into my pieces and made sure I was 100% satisfied with the alterations. Highly recommend! `}/>
        <ClientCard isBlack customerName={"John"} type={"Valued Customer"} review={`User reviews like the one above praise The Smart Tailor's unparalleled craftsmanship and perfection. They really put effort into my pieces and made sure I was 100% satisfied with the alterations. Highly recommend! `}/>
        <ClientCard  customerName={"John"} type={"Valued Customer"} review={`User reviews like the one above praise The Smart Tailor's unparalleled craftsmanship and perfection. They really put effort into my pieces and made sure I was 100% satisfied with the alterations. Highly recommend! `}/>

      </div>
    </section>
  )
}

export default Client