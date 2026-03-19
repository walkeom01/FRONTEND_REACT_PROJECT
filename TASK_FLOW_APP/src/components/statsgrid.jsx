import React from 'react'
import {  CheckCircle, Zap } from 'lucide-react'


const statsgrid = () => {
  let totaltodo = 4;
  let activetodo = 2;
  let completetodo = 2;


  return (
    <>
      <div className='grid grid-cols-3 gap-3 mb-4'>

        <div className=' backdrop-blur-2xl bg-linear-to-br from-violet-400 to-purple-500/20 rounded-2xl border border-violet-400/30 p-4 hover:scale-105 transition-transform duration-300 cursor-pointer'>
          <div className='flex item gap-2 mb-1'>
            <Zap size={16} className='text-shadow-violet-500'></Zap>
            <span className='text-viol text-xs font-semibold'>Total</span>
          </div>
          <div className='text-2xl font-black text-white'>{totaltodo}</div>

        </div>
        <div className=' backdrop-blur-2xl bg-linear-to-br from-blue-400 to-cyan-500/20 rounded-2xl border border-violet-400/30 p-4 hover:scale-105 transition-transform duration-300 cursor-pointer'>
          <div className='flex item gap-2 mb-1'>
           
              <div className='w-4 h-4 rounded-full border-2 border-blue-400'></div>
            <span className='text-viol text-xs font-semibold'>Active</span>
          </div>
          <div className='text-2xl font-black text-white'>{activetodo}</div>

        </div>
        <div className=' backdrop-blur-2xl bg-linear-to-br from-violet-400 to-purple-500/20 rounded-2xl border border-violet-400/30 p-4 hover:scale-105 transition-transform duration-300 cursor-pointer'>
          <div className='flex item gap-2 mb-1'>
            <CheckCircle size={16} className='text-shadow-violet-500'/>
            <span className='text-viol text-xs font-semibold'>Done</span>
          </div>
          <div className='text-2xl font-black text-white'>{completetodo}</div>

        </div>

      </div>

    </>
  )
}

export default statsgrid
