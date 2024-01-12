import React from 'react'

function Button2({text}) {
  return (
    <button data-ripple-light="true" type="button" 
          className="select-none rounded-md bg-[#6366f1] py-3 px-6 
          text-center align-middle font-sans text-xs font-bold uppercase
           text-white shadow-md  transition-all 
           hover:shadow-lg hover:shadow-[#6e70ff]  
           focus:shadow-none active:opacity-[0.85] active:shadow-none focus:outline-none
           disabled:pointer-events disabled:opacity-50 disabled:shadow-none duration-300">
            {text}          
    </button>
  )
}

export default Button2