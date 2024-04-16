import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='hidden max-w-screen-xl mx-auto py-10 xl:flex gap-32'>
                <div className='basis-1/2'>
                    <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight hidden lg:block'>refokus.</h1>
                </div>
                <div className='basis-1/2 flex gap-4'>
                    <div className=' basis-1/3 '>
                        <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
                        {["Instagram","Twitter (x?)","LinkedIn"].map((item,index)=>(<a key={index} className='block mt-3 text-zinc-600 capitalize'>{item}</a>))}
                    </div>
                    <div className=' basis-1/3 '>
                        <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
                        {["Instagram","Twitter (x?)","LinkedIn"].map((item,index)=>(<a key={index} className='block mt-3 text-zinc-600 capitalize'>{item}</a>))}
                    </div>
                    <div className=' basis-1/2 flex flex-col items-end'>
                        <p className='text-right '>
                            Refokus is a pioneering digital agency driven by design and empowered by tecnology. 
                        </p>
                        <img  className="w-32 bg-blue-700 mt-10 " src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg" alt="" />
                    </div>
                
                </div>
        </div>
        <div className='xl:hidden w-full flex justify-start gap-14 p-7'>
            {["Privacy Policy","Cookie Policy","Impressum","Terms"].map((item,index)=>(<a key={index} className='block mt-3 text-zinc-500'>{item}</a>))}
        </div>
    </div>
  )
}

export default Footer 