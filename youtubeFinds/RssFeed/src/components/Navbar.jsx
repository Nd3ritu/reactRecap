import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='text-white font-bold'>
        
            <ul className='flex flex-row gap-30 justify-center mt-9 shadow-lg '>
                <div className='relative'>
                    <div className=' absolute -inset-2 blur shadow-lg bg-green-400 rounded-lg' >


                    </div>
                     <li>
                       <a href="#" className=' relative border p-2 rounded-lg hover:text-green-400 shadow-lg bg-black '>Investopedia</a>
                     </li>

                </div>
                
                <li>
                    <a href="#" className='border p-2 rounded-lg  hover:text-green-400 '>Investingcom</a>

                </li>
                <li>
                    <a href="#" className='border p-2 rounded-lg  hover:text-green-400'>Bloomberg</a>
                </li>
                <li>
                    <a href="#" className='border p-2 rounded-lg  hover:text-green-400'>Forbes</a>
                </li>
                <li>
                    <a href="#" className='border p-2 rounded-lg  hover:text-green-400'>CNBC</a>
                </li>
               
            </ul>

        </div>


    </nav>
  )
}

export default Navbar