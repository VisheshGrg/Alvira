import React from 'react'

function User({img,name,date}) {
  return (
    <div className="flex gap-1 justify-center gap-2">
        <div className={`${img} w-20 h-20 rounded-full bg-cover`}/>
        <div className="flex flex-col leading-5 py-4">
            <div className="font-semibold">{name}</div>
            <div className="text-link text-gray-500 font-semibold">{date}</div>
        </div>
    </div>
  )
}

export default User