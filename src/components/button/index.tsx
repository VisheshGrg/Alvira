import React from 'react'

function Button({children}) {

    const hover = "hover:bg-text_hover duration-500 cursor-pointer"

  return (
    <div className={`flex items-center justify-center py-3 px-6 bg-black text-white font-300 ${hover}`}>{children}</div>
  )
}

export default Button