import React from 'react'
import { BiSearch,BiCart } from 'react-icons/bi'



function Navbar() {

    const options = ['SHOP ALL', 'ELECTRONICS', 'CLOTHES', 'DECOR']
    const links = ['CONTACT', 'HELP', 'LOG IN']

    const hover = "hover:scale-125 hover:text-text_hover duration-500 cursor-pointer font-300"

  return (
        <div className='px-5 h-[10vh] flex justify-between items-center bg-transparent'>

            <div className='text-heading font-bold'>AL<span className='text-text_gray'>VI</span>RA</div>

            <div className='flex items-center justify-center gap-8 text-link'>
                {options.map((option,key)=>(
                    <div key={key} className={hover}>{option}</div>
                ))}
                <BiSearch size={20}/>
            </div>

            <div className='flex items-center justify-center gap-8 text-linksm'>
                {links.map((link,key)=>(
                    <div key={key} className={hover}>{link}</div>
                ))}
                <BiCart size={30} color='#C19A83'/>
            </div>


        </div>
  )
}

export default Navbar