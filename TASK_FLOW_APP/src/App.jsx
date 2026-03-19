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
    <>
      <div className='min-h-screen bg-linear-to-br from-indigo-950 via-purple-950 to-pink-950 p-3 sm:p-6 relative overflow-hidden'>
        <Animate> </Animate>

        <Notification> </Notification>

        <div className='max-w-3xl mx-auto realtive z-10'>
          <Header> </Header>
          <StatsGrid> </StatsGrid>
          <Input> </Input>
          <Todolist></Todolist>
          <Clearbutton></Clearbutton>
        </div>
      </div>
    </>
  )
}

export default App