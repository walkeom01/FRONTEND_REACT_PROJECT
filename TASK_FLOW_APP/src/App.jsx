import React, { useState } from 'react'
import Animate from './components/animate'
import Notification from './components/notification'
import Header from './components/header'
import StatsGrid from './components/statsgrid'
import Input from './components/input'
import Todolist from './components/todolist'
import Clearbutton from './components/clearbutton'

const playsound = () => { };
const App = () => {

  const STORAGE_KEY = "todo";

  const [todo, settodo] = useState([])
  const [input, setinput] = useState("")
  const [notification, setnotification] = useState(null)
  const [editingid, seteditingid] = useState(null)
  const [edittext, setedittext] = useState("")
  const [hasload, sethasloaded] = useState(false)

  
  //get from local storage


  //save to local storage


  //show notification
  const shownotification = (message, type = "success") => {
    setnotification({ message, type });
    setTimeout(() => {
      setnotification(null)
    }, 3000);
  }

  //add todo 
  const handleaddtodo = () => {
    if (!input.trim()) return;

    const newtodo = {
      id: Date.now(),
      text: input,
      completed: false,
      createdate: new Date().toISOString()
    };
    settodo([newtodo, ...todo]);
    setinput("")
    playsound("add")
    shownotification("🌟🤩 Task added successfully!")
  }

  //update todo


  //delete todo

  return (
    <div className='min-h-screen bg-linear-to-br from-indigo-950 via-purple-950 to-pink-950 p-3 sm:p-6 relative overflow-hidden'
      style={{ minHeight: '100vh' }}>

      <Animate />
      <Notification
        notification={notification} onClose={() => setnotification(null)} />

      <div className='max-w-3xl mx-auto relative z-10'>
        <Header />
        <StatsGrid />
        <Input value={input} onChange={(e) => setinput(e.target.value)} onAdd={handleaddtodo} />
        <Todolist todo= {todo} />
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
