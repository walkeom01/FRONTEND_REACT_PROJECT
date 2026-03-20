import React from 'react'
import Animate from './components/animate'
import Notification from './components/notification'
import Header from './components/header'
import StatsGrid from './components/statsgrid'
import Input from './components/input'
import Todolist from './components/todolist'
import Clearbutton from './components/clearbutton'

const App = () => {
  return (
    <div className='min-h-screen bg-linear-to-br from-indigo-950 via-purple-950 to-pink-950 p-3 sm:p-6 relative overflow-hidden'>
      
      <Animate />
      <Notification />

      <div className='max-w-3xl mx-auto relative z-10'>
        <Header />
        <StatsGrid />
        <Input />
        <Todolist />
        <Clearbutton />
      </div>

      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
            }
            50% {
              transform: translateY(-20px) translateX(10px);
            }
          }

          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}
      </style>
    </div>
  )
}

export default App
