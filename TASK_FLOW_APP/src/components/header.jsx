import React from 'react'
import { Sparkles, TrendingUp } from 'lucide-react';


const header = () => {
  let progress = 20;
  let active = 3;
  return (
    <>
      <div className='backdrop-blur-2xl bg-white/5 rounded-3xl border-white/10 p-6 mb-4 shadow-2xl'>

        <div className='flex item-center justify-between mb-4'>
          <div className='flex items-center gap-3'>
            <div className='relative '>
              <div className='w-12 h-12 bg-linear-to-br from-indigo-500 via-purple-600 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg '>
                <Sparkles className='text-white' size={23} />
              </div>
              <div className='absolute -top-1 -right-1 w-4 h-4 bg-emerald-500  rounded-full animate-ping'></div>
            </div>
            <div>
              <h1 className='text-3xl font-black text-white tracking-tight'>TASKFLOW</h1>
              <p className='text-purple-300 text-xs font-medium'>Productivity Rimagined</p>
            </div>
          </div>
          {/*right side  */}

          <div className='flex items-center gap-2 px-4 py-2 bg-linear-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full border border-violet-400/30'>
            <TrendingUp size={16} className='text-emerald-500'></TrendingUp>
            <span className='text-white font-bold text-sm'>{active} Active</span>
          </div>
        </div>
        {/**progress baar */}
        <div className='relative'>
          <div className='flex justify-between items-center mb-2'>
            <span className='text-white/70 text-xs font-semibold'>Progress</span>
            <span className='text-white font-bold text-sm'>{Math.round(progress)}%</span>
          </div>

          <div className='relative w-full h-2 bg-white/10 rounded-full overflow-hidden'>
            <div className=' absolute inset-0 bg-linear-to-br  from-emerald-400 via-teal-400 to-cyan-400 rounded-full transition-all duration-700 ease-out shadow-lg' style={{ width: `${progress}%` }}>

            </div>
            <div className=' absolute inset-0 bg-linear-to-br  from-transpaarent  via-white/30 to-transparent animate-none '>

            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default header