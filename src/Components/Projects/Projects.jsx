import Image2 from "../../assets/projects/Ecommerce.png"
import Image3 from "../../assets/projects/Restraunt.png"
import Image4 from "../../assets/projects/TEchHub.png"
import Image5 from "../../assets/projects/TcdSpace.png"


function Projects() {
    return (
        <section
            className='w-full h-fit py-7 bg-[#091630]'>
            <div className='w-[90%] mx-auto md:px-10'>
                <h1
                    className='text-3xl md:text-4xl 
                    font-extrabold text-white pb-4'>
                    Projects:
                    </h1>
                <div
                    className='flex flex-col 
                    md:flex-row flex-wrap 
                    justify-center items-center mt-5 gap-4'>
                    {/* 1st Card */}
                    <div
                        className='basis-[90%] lg:basis-[40%] min-w-[250px] 
                        h-[500px]
                        px-4 py-4 flex flex-col gap-4 
                        justify-center items-center text-white
                        bg-black/50 rounded-xl'>
                        <img className='rounded-lg' src={Image3} alt="Projects pic" />
                        <h1 className='text-2xl font-bold'>Restraunt Website</h1>
                        <p className='text-gray-600'>It's a Food booking Website, crafted with Html, Css & JavaScript</p>
                        <div
                            className='flex flex-row justify-center
                    items-center flex-wrap gap-2'>
                            <div
                                className='bg-slate-800 text-xl 
                        font-bold px-4 py-2 rounded-xl'>Html & Css</div>
                            <div
                                className='bg-slate-800 text-xl 
                        font-bold px-4 py-2 rounded-xl'>JavaScript</div>
                        </div>
                        <div
                            className='flex flex-row 
                        justify-center items-center gap-4'>
                            <a
                                href="https://duttachandan.github.io/REstrauntApp/"
                                className='bg-[#576cbc] py-2 px-4 rounded-xl font-bold'>
                                Demo
                            </a>
                            <a 
                            href="https://github.com/duttachandan/REstrauntApp"
                            className='bg-[#576cbc] py-2 px-4 rounded-xl font-bold'>
                                Source Code
                            </a>
                        </div>
                    </div>
                    {/* 2nd CArd */}
                    <div
                        className='basis-[90%] lg:basis-[40%] 
                        min-w-[250px] h-[500px]
                        px-4 py-4 flex flex-col gap-4 
                        justify-center items-center 
                        text-white bg-black/50 rounded-xl'>
                        <img className='rounded-lg' src={Image4} alt="Projects pic" />
                        <h1 className='text-2xl font-bold'>TechGears</h1>
                        <p className='text-gray-600'>Dynamic e-commerce platform showcasing VR headsets, designed with HTML, CSS, and Bootstrap.</p>
                        <div
                            className='flex flex-row justify-center
                    items-center flex-wrap gap-2'>
                            <div
                                className='bg-slate-800 text-xl 
                        font-bold px-4 py-2 rounded-xl'>
                                Html & Css
                            </div>
                            <div
                                className='bg-slate-800 text-xl 
                        font-bold px-4 py-2 rounded-xl'>
                                bootstrap
                            </div>
                        </div>
                        <div
                            className='flex flex-row 
                        justify-center items-center gap-4'>
                            <a
                                href="https://duttachandan.github.io/TechGears/"
                                className='bg-[#576cbc] py-2 px-4 rounded-xl font-bold'>
                                Demo
                            </a>
                            <a
                                href="https://github.com/duttachandan/TechGears"
                                className='bg-[#576cbc] py-2 px-4 rounded-xl font-bold'>
                                Source Code
                            </a>
                        </div>
                    </div>
                    {/* 3rd Card */}
                    <div
                        className='basis-[90%] lg:basis-[40%] 
                        min-w-[300px] h-[500px]
                        px-4 py-4 flex flex-col gap-4 
                        justify-center items-center text-white
                        bg-black/50 rounded-xl'>
                        <img className='rounded-lg' src={Image5} alt="Projects pic" />
                        <h1 className='text-2xl font-bold'>SpaceHub</h1>
                        <p className='text-gray-600'>Innovative e-commerce site for space exploration gear, crafted with HTML, CSS, and Tailwind CSS.</p>
                        <div
                            className='flex flex-row justify-center
                    items-center flex-wrap gap-2'>
                            <div
                                className='bg-slate-800 text-xl 
                        font-bold px-4 py-2 rounded-xl'>React</div>
                            <div
                                className='bg-slate-800 text-xl 
                        font-bold px-4 py-2 rounded-xl'>Tailwind</div>
                        </div>
                        <div
                            className='flex flex-row 
                        justify-center items-center gap-4'>
                            <a
                                href="https://duttachandan.github.io/TCD-Space/"
                                className='bg-[#576cbc] py-2 px-4 rounded-xl font-bold'>
                                Demo
                            </a>
                            <a 
                            href="https://github.com/duttachandan/TCD-Space"
                            className='bg-[#576cbc] py-2 px-4 rounded-xl font-bold'>
                                Source Code
                            </a>
                        </div>
                    </div>
                    {/* 4th Card */}
                    <div
                        className='basis-[90%] lg:basis-[40%] 
                        min-w-[250px] h-[500px]
                        px-4 py-4 flex flex-col gap-4 
                        justify-center items-center text-white
                        bg-black/50 rounded-xl'>
                        <img className='rounded-lg' src={Image2} alt="Projects pic" />
                        <h1 className='text-2xl font-bold'>Ecommerce Website</h1>
                        <p className='text-gray-600'>React-powered e-commerce site with seamless responsiveness, enhanced by Tailwind CSS for sleek design and functionality.</p>
                        <div
                            className='flex flex-row justify-center
                            items-center flex-wrap gap-2'>
                            <div
                                className='bg-slate-800 text-xl 
                            font-bold px-4 py-2 rounded-xl'>
                            React
                            </div>
                            <div
                            className='bg-slate-800 text-xl 
                            font-bold px-4 py-2 rounded-xl'>
                            Tailwind
                        </div>
                        </div>
                        <div
                            className='flex flex-row 
                            justify-center items-center gap-4'>
                            <a
                                href="https://duttachandan.github.io/EcommerceUsingContext/"
                                className='bg-[#576cbc] py-2 px-4 rounded-xl font-bold'>
                                Demo
                            </a>
                            <a 
                            href="https://github.com/duttachandan/EcommerceUsingContext"
                            className='bg-[#576cbc] py-2 px-4 rounded-xl font-bold'>
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
