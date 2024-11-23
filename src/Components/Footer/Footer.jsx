import React from 'react'

function Footer() {
    return (
        <section 
        className='flex w-full px-14 
        flex-col md:flex-col bg-[#091630]'>
            <div 
            className='text-white basis-1/2 
            flex flex-col justify-center 
            md:items-start items-center ps-8'>
                <h1 className='text-4xl text-white font-bold'>Contact:</h1>
                <p className='font-medium text-gray-400'>Feel free to contact.</p>
                <hr className='w-full h-1 bg-white'/>
            </div>
            <form 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            className='flex flex-col md:basis-1/2 
            w-full justify-center gap-5
            items-start md:items-center py-8 ps-8'>
                <input 
                type="hidden" 
                name="access_key" 
                value="1c885807-aeba-4c5b-8ab8-d7ceb6bb3573">
                </input>
                <input 
                type="text" 
                name="name" 
                id=""  
                placeholder="Your Name"
                className='md:w-[400px] w-full rounded-xl 
                ps-4 py-2 focus:outline-none font-bold
                text-base text-black bg-white/55 
                placeholder:font-bold placeholder:text-black'  
                required/>
                <input
                className='md:w-[400px] w-full rounded-xl ps-4 
                py-2 focus:outline-none text-base 
                text-black bg-white/55 font-bold
                placeholder:text-black placeholder:font-bold' 
                type="email" 
                name="emailId"
                placeholder='YourEmail@gmail.com' 
                id="" 
                required
                />
                <textarea 
                name="textArea" 
                className='rounded-lg text-base 
                md:text-xl outline-none 
                focus:outline-none h-[100px] md:h-[200px] 
                md:w-[400px] w-full ps-5 font-bold
                pt-5 text-black bg-white/55
                placeholder:text-black placeholder:font-bold' 
                id="" 
                placeholder='Your Message'>
                </textarea>
                <button 
                type="submit"
                className='px-8 py-2 mx-auto 
                bg-orange-600 text-xl rounded-xl
                text-white font-bold'>
                Submit
                </button>
            </form>
        </section>
    )
}

export default Footer
