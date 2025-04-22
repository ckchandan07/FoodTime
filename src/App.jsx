import React from 'react'
import Home from './Pages/Home'
import { ToastContainer, toast  } from 'react-toastify'

const App = () => {
  return (
    <div className='bg-slate-200 w-full h-[100%]'>
      <Home/>
      <ToastContainer/>
    </div>
  )
}

export default App