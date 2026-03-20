import React from 'react'
import todoitem from './todoitem'
import { Sparkles } from 'lucide-react';

const todolist = () => {
  let todo = [];
  let editid;
  let edittext;
  let ontoggle;
  let onstartedit;
  let onsaveedit;
  let oncacleedit;
  let ondelete;
  let onedittextchange;
  let oneditkeypress;

  if(todo.length === 0){
    return (
      <div className='text-center py-16 backdrop-blur-2xl bg-white/5 rounded-2xl border  
      border-white/0 '>
        <div className='w-16 h-16 bg-linear-to-br from-violet-500/20 to-fuchsia-500/20
        rounded-2xl flex items-center justify-center mx-auto mb-3'> 
        <Sparkles size={32} className="text-violet-300"></Sparkles>

        </div>
        <p className='text-white/90 text-base font-semibold mb-2 '>No Task Yet</p>
        <p  className='text-white/50 text-sm font-bold'>create your first task to get started</p>
      </div>
    )
  }
  return (
    <div className='space-y-2'>
      {todo.map((todo, index) => <todoitem key={index} 
      todo={todo}
      index={index}
      editid={editid}
      edittext ={edittext}
      ontoggle={ontoggle}
      onstartedit={onstartedit}
      onsaveedit={onsaveedit}
      oncacleedit={oncacleedit}
      ondelete={ondelete}
      onedittextchange={onedittextchange}
      oneditkeypress={oneditkeypress}
      />)}

    </div>
  )
}

export default todolist