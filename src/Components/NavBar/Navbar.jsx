import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [show, setShow] = useState(false);

    const Togglenavbar = () => {
        setShow(!show);
    }
    const NavLinks = () => {
        return (
            <>
                <div
                    className='w-full flex justify-evenly 
                    flex-col md:flex-row
                    text-xl font-semibold '>
                    <Link 
                    className='md:px-5 py-4 
                    cursor-pointer hover:text-violet-600
                    ' 
                    to="/Portfolio/">
                    Home
                    </Link>
                    <Link 
                    className='md:px-5 py-4 cursor-pointer
                    hover:text-violet-800' 
                    to="/Portfolio/about">
                    About
                    </Link>
                    <Link 
                    className='md:px-5 py-4 cursor-pointer
                    hover:text-violet-600' 
                    to="/Portfolio/projects">
                    Projects
                    </Link>
                    
                </div>
            </>

        )
    }
    return (
        <div 
        className='sticky pt-10 top-0 
        right-0 w-full bg-[#091630] z-10'
        >
            <nav
                className='flex py-2 md:h-full sticky top-0 
                right-0 px-5 justify-between items-center flex-wrap'>
                <div
                    className="text-2xl md:text-4xl font-bold 
                    text-white md:basis-1/2 basis-1/2 md:ps-10 ps-2 overflow-y-hidden">
                    Portfolio.
                </div>
                <div
                    className={` hidden md:flex  
                    md:items-center md:flex-2 
                    md:basis-1/3 min-w-[300px] md:flex-row text-white`}>
                    <NavLinks/>
                </div>
                <div
                    className='md:hidden cursor-pointer basis-1/2
                    flex justify-end items-end 
                    text-3xl font-bold text-white'
                    onClick={() => Togglenavbar()}
                    style={{transition: 'transform 0.3sec ease-in-out'}}>
                    {show?'X':'☰'}
                </div>
                    {
                        show && (
                            <div className="flex flex-col w-full text-white pt-5">
                                <NavLinks/>
                            </div>
                        )
                    }
            </nav>
        </div>
    );
}

export default Navbar;
