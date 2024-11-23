import React from 'react'
import image from "../../assets/out.png"
import { image1, image2, image3 } from '../../assets/about'


function About() {
    return (
        <section className='w-full bg-[#091630]'>
            <div className='bg-[#080f19] mx-[5vw] h-fit w-[90vw] pt-5 my-4 py-5 rounded-lg'>
                <h1
                    className='text-white text-2xl 
            font-semibold ps-6 md:text-4xl py-4'>
                    About:
                </h1>
                <div
                    className=' w-full gap-4
        flex flex-col md:flex-row '>
                    <div
                        className='basis-1/4 md:basis-1/3 flex 
            justify-center items-center px-5'>
                        <img className='w-[70%] md:w-[90%]
                    object-fit-contain rounded-2xl'
                            src={image}
                            alt="My photo" />
                    </div>
                    <div className='basis-1/2 flex flex-col gap-5 md:gap-10'>
                        <div className='w-full px-3 md:px-5 rounded-2xl 
                flex flex-row justify-center items-center gap-4 cards'>
                            <img className='h-fit  w-[80px] object-fit-contain' src={image1} alt="" />
                            <div>
                                <h1 className='text-3xl text-white'>Frontend Devloper</h1>
                                <p className='text-white pt-2'>
                                    Experienced frontend developer specializing in responsive,
                                    optimized sites. Passionate about crafting exceptional digital experiences
                                </p>
                            </div>
                        </div>
                        <div className='w-full px-3 md:px-5 rounded-2xl 
                flex flex-row justify-center items-center gap-4 cards'>
                            <img className='object-fit-contain w-[80px]' src={image2} alt="" />
                            <div>
                                <h1 className='text-3xl text-white'>Backend Devloper</h1>
                                <p className='text-white pt-2'>
                                    In addition to my expertise in Frontend development with React.js,
                                    I'm actively expanding my skills into Backend development.
                                </p>
                            </div>
                        </div>
                        <div className='w-full px-3 md:px-5 rounded-2xl 
                flex flex-row justify-center items-center gap-4 cards'>
                            <img className='w-[80px] object-fit-contain' src={image3} alt="" />
                            <div>
                                <h1 className='text-3xl text-white'>Ui & Ux Devloper</h1>
                                <p className='text-white pt-2'>
                                    Created multiple landing pages and design systems.
                                    Expertise in web design and UI/UX principles
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
