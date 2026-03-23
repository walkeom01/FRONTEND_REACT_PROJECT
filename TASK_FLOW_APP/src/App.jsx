import React, { useState } from 'react'
import Animate from './components/animate'
import Notification from './components/notification'
import Header from './components/header'
import StatsGrid from './components/statsgrid'
import Input from './components/input'
import Todolist from './components/todolist'
import Clearbutton from './components/clearbutton'
import { playsound } from "./components/PlaySound";



const App = () => {

  const STORAGE_KEY = "todo";

  const [todo, settodo] = useState([])
  const [input, setinput] = useState("")
  const [notification, setnotification] = useState(null)
  const [editingid, seteditingid] = useState(null)
  const [edittext, setedittext] = useState("")
  const [hasload, sethasloaded] = useState(false)


  //get from local storage
  useEffect(() => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        settodos(JSON.parse(data))
      }
    } catch (error) {
      console.log("Load Error: ", error)
    } finally {
      sethasloaded(true);
    }
  }, [])

  //save to local storage
  useEffect(() => {
    if (!hasloaded) return;
    try {
      localStorage.setitem(STORAGE_KEY, JSON.stringify(todos))
    } catch (error) {
      console.log("save error : ", error)

    }
  }, [todo, hasloaded])

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
    setinput("");
    playsound("add");
    shownotification("🌟🤩 Task added successfully!");
  }


  // onToggle
  const toggletodo = (id) => {
    settodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    const todo = todo.find((t) => t.id === id);

    if (!todo.completed) {
      playSound("complete");
      shownotification("🎉 Greate Job! Task completed!");
    }
  };

  // key press down{add}
  const handlekeypress = (e) => {
    if (e.key == "Enter") {
      handleaddtodo();
    }
  }


  // edit key press 
  const handleeditkeypress = (e, id) => {
    if (e.key === "Enter") {
      saveedit(id);
    } else if (e.key === "Escape") {
      oncacleedit();
    }
  };


  //start edit
  const startediting = (id, text) => {
    seteditingid(id);
    setedittext(text);
  }
  //update todo
  const saveedit = (id) => {
    if (!edittext.trim()) return;

    settodo(todo.map((todo) => { todo.id === id ? { ...todo, text: edittext } : todo }))

    setedittext("");
    seteditingid(null);
    playsound("update");
    shownotification("task updated successfully!");
  }

  //cancel edit

  const cancelEdit = () => {
    setedittext("");
    seteditingid(null);
  }


  //delete todo

  const deleteTodo = (id) => {
    settodo(todo.filter((todo) => todo.id !== id))
    playsound("delete")
    shownotification("task deleted", "info")
  }

  // clear all completed task
  const clearCompleted = () => {
    settodo(todo.filter((t) => !t.completed));
    playsound("delete");
    shownotification("🗑️ Task deleted ", "info");
  };

  const activeTodos = todo.filter((t) => !t.completed).length;
  const completedTodos = todo.filter((t) => t.completed).length;
  const progress = todo.length > 0 ? (completedTodos / todo.length) * 100 : 0;

  return (
    <div className='min-h-screen bg-linear-to-br from-indigo-950 via-purple-950 to-pink-950 p-3 sm:p-6 relative overflow-hidden'
      style={{ minHeight: '100vh' }}>

      <Animate />
      <Notification
        notification={notification} onClose={() => setnotification(null)} />

      <div className='max-w-3xl mx-auto relative z-10'>
        <Header
          activeTodos={activeTodos}
          progress={progress}
          totalTodos={todo.length}
        />

        <StatsGrid
          activeTodos={activeTodos}
          completedTodos={completedTodos}
          totalTodos={todo.length}
        />

        <Input value={input} onChange={(e) => setinput(e.target.value)} onAdd={handleaddtodo} onKeyPress={handleKeyPress} />
        <Todolist todo={todo} ondelete={deleteTodo} onstartedit={saveedit}
          onsaveedit={saveedit} oncacleedit={cancelEdit}
          editingid={editingid}
        />
        <ClearButton
          completedTodos={completedTodos}
          onClick={clearCompleted}
        />

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
