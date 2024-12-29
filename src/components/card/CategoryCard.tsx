import React from 'react'

function CategoryCard({image,category}) {
  return (
    <div className={`w-full h-60 flex items-center justify-center ${image} bg-cover relative overflow-hidden`}>
        <div className='absolute bottom-5 left-[50%] bg-white w-[80%] h-10 flex items-center justify-center translate-x-[-50%] font-bold uppercase'>{category}</div>
    </div>
  )
}

export default CategoryCard