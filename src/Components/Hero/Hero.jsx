import React from 'react'
import { FaGithub, FaDownload  } from "react-icons/fa";
import HeroImage from "../../assets/hero/heroImage.png"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

function Hero() {
    return (
        <>
            <div 
            className='flex flex-col-reverse 
            md:flex-row mt-5 z-10'>
            <div 
            className='basis-1/2 flex 
            flex-col gap-1 px-10 justify-center items-start'>
                <h1 
                className='heroH1 text-[50px] md:text-[80px] font-bold'
                >
                Hi, I'm Chandan
                <span className='text-lg'>Dutta</span>
                </h1>
                <p className='text-white text-xl'>
                I'm a <span className='text-violet-400'>Frontend Web Developer </span> with over a year of experience creating websites using React.js. 
                Currently seeking new opportunities. Feel free to contact me if you're interested! 
                </p>
                <div className='flex flex-row gap-5 justify-center items-center px-5 py-4'>
                    <a 
                    className='text-white text-3xl
                    hover:text-purple-500'
                    href="https://github.com/duttachandan">
                        <FaGithub/>
                    </a>
                    <a className='text-white text-3xl
                    hover:text-purple-500' 
                    href="https://www.facebook.com/chandan.dutt.566">
                        <FaFacebook/>
                    </a>
                    <a className='text-white text-3xl
                    hover:text-purple-500' 
                    href="https://www.linkedin.com/in/chandan-dutta-b2a778170/"
                    >
                        <FaLinkedin/>
                    </a>
                    <a className='text-white text-3xl
                    hover:text-purple-500' 
                    href="https://www.instagram.com/myslv_chandan/">
                        <FaInstagramSquare/>
                    </a>
                    <a className='text-white text-3xl
                    hover:text-purple-500' 
                    href="https://drive.google.com/file/d/1blYoRcXKtyhZEf_fV22vKUPyjLdL3qci/view">
                        <FaDownload />
                    </a>
                </div>
            </div>
            <div className='basis-1/2 heroImg'>
                <img src={HeroImage} alt="" />
            </div>
        </div>
        <div className='topBlur'></div>
        </>
    )
}

export default Hero
