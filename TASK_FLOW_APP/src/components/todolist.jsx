import React from 'react'
import todoitem from './todoitem'

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