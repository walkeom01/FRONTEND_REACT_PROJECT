import React from 'react'

const notification = () => {
  let notificationnn;
  let onclose;
if(!notificationnn)return null;
  return (
    <div>
      <div className='fixed top-4 right-4 z-50 animate-in slide-in-from-top-5'>
        <div className={`flex items-center gap-3 px-3 py-3  rounded-2xl shadow-2xl
          backdrop-blur-2xl border ${
              notificationnn.type === "success"
              ? "bg-emerald-500/90 border-emerald-400/50 text-white"
              : notificationnn.type === "error"
              ? "bg-rose-500/50 border-rose-400/50 text-white"
              : "bg-blue-500/90 border-blue-400/50 text-white" 
          }`}
          >
            {notificationnn.type === "success" && <CheckCircle2 size={18}/>}
            {notificationnn.type === "error" && <AlertCircle size={18}/>}
            <span className='font-semibold text-sm'>{notificationnn.message}</span>
            <button onClick={onclose} className='hover:opacity-80 transition-opacity'>
              <X size={16}/>
            </button>
        </div>

      </div>
    </div>
  )
}

export default notification