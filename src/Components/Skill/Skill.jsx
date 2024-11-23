import React from 'react'
import {Image1, Image2, Image3, Image4 , Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14} from "../../assets/skills/Skills"


function Skill() {
  return (
    <section className='w-full bg-[#080f19]'>
    {/* Skills Section */}
      <div 
      className='w-[95vw] mx-auto h-fit px-20 py-10'>
      <h1 
      className='text-3xl md:text-4xl 
      font-extrabold text-white pb-4'>
      Techstack:
      </h1>
        <div 
        className='flex flex-row flex-wrap justify-center items-center gap-5 pt-5'>
            <div className='text-white'>
            <img src={Image1}  className='h-[50px] aspect-2/3' alt="" />
            <p className='text-center'>Css</p>
            </div>
            <div className='text-white'>
            <img src={Image2}  className='h-[50px] aspect-2/3' alt="" />
            <p className='text-center'>Figma</p>
            </div>
            <div className='text-white'>
            <img src={Image3}  className='h-[50px] aspect-2/3' alt="" />
            <p className='text-center'>GraphQl</p>
            </div>
            <div className='text-white'>
            <img src={Image4}  className='h-[50px] aspect-2/3' alt="" />
            <p className='text-center'>Html</p>
            </div>
            <div className='text-white'>
            <img src={Image5}  className='h-[50px] aspect-2/3' alt="" />
            <p className='text-center'>Mongodb</p>
            </div>
            <div className='text-white'>
            <img src={Image6}  className='h-[50px] aspect-2/3' alt="" />
            <p className='text-center'>Node</p>
            </div>
            <div className='text-white'>
            <img src={Image7}  className='h-[50px] aspect-2/3' alt="" />
            <p className='text-center'>React</p>
            </div>
            <div className='text-white'>
            <img src={Image8}  className='h-[50px] aspect-2/3' alt="" />
            <p className='text-center'>Git</p>
            </div>
            <div className='text-white'>
            <img src={Image9}  className='h-[50px] aspect-2/3' alt="" />
            <p className='text-center'>Github</p>
            </div>
            <div className='text-white'>
            <img src={Image10}  className='h-[50px] aspect-2/3' alt="" />
            <p className='text-center'>Photoshop</p>
            </div>
            <div className='text-white'>
            <img src={Image11}  className='h-[50px] aspect-2/3' alt="" />
            <p className='text-center'>JavaScript</p>
            </div>
            <div className='text-white'>
            <img src={Image12}  className='h-[50px] aspect-2/3' alt="" />
            <p className='text-center'>JSX</p>
            </div>
            <div className='text-white'>
            <img src={Image13}  className='h-[50px] aspect-2/3' alt="" />
            <p className='text-center'>Pug</p>
            </div>
            <div className='text-white'>
            <img src={Image14}  className='h-[50px] aspect-2/3' alt="" />
            <p className='text-center'>Redux</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
