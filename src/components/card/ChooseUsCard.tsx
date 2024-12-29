import React from 'react'

function ChooseUsCard({title,icon}) {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-3'>
        <div>{icon}</div>
        <div className='text-normal font-semibold'>{title}</div>
        <div className='text-card_light text-center font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus natus  </div>
    </div>
  )
}

export default ChooseUsCard