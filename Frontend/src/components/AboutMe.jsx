import React from 'react'
import myphoto from '../../public/My Photo.jpg'

function AboutMe() {
  return (
    <>
      <div>
        <section id="AboutMe" className='h-screen bg-gray-50 flex items-center justify-center'  >
           <div className='flex justify-between mx-8 space-x-6'>
           <img src={myphoto} alt="" className='h-96'/>
            <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti architecto, delectus neque dolore alias esse suscipit reprehenderit ratione temporibus in at sapiente, quos molestias? Soluta autem eaque nemo provident impedit ad tempora officia ratione ullam! Similique magnam animi officiis, ex tempora dignissimos dolore sunt sequi deserunt quo enim quisquam ea rem error delectus recusandae facilis facere ducimus at doloribus nisi accusantium! Commodi non ullam laudantium, fuga numquam aspernatur, itaque quisquam eum, quod quaerat quasi quo voluptate perspiciatis! Quisquam dicta minus odit maxime at hic id totam quas mollitia velit eligendi libero, eius tempora ipsa amet omnis. Reprehenderit nisi non laboriosam!
            </p>
           </div>
        </section>
      </div>
    </>
  )
}

export default AboutMe
