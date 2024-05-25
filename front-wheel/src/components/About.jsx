//This Section has the testimonials.Tell your users who have purchased your solution in this section.
import React from 'react'

const About = () => {
  return (
    <div name='testimony' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Trusted by developers across Kenya</h2>
                <p className='text-2xl py-6 text-black-200'>
                Empowering Kenyan developers with efficient tools and reliable integrations. 
                Join a community that values speed, innovation, and  ultimately success #kuomoka.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>210 +</p>
                    <p className='text-black-400 mt-2'>Over 200 react &Next js  developers have purchased this boilerplate</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>190 </p>
                    <p className='text-black-400 mt-2'>The number of PHP developers that have purchased this boilerplate</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>60 +</p>
                    <p className='text-black-400 mt-2'>The number of Flask and Python developers have purchased this boilerplate</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About