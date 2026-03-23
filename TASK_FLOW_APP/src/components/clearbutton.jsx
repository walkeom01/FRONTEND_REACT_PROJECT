import React from 'react'

const clearbutton = ({completedtodo, onclick}) => {


  if(completedtodo === 0 )return null;
  return (
     <>
      <button onClick={onclick} className='mt-4 w-full py-3 backdrop-blur-2xl 
      bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300
      rounded-lg fint font-semibold border-white/10 hover:scale-[1.02] active:scale-95 text-sm'>
        clear{completedtodo}completed task
      </button>
     </>
  )
}

export default clearbutton