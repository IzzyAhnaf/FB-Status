import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'
import UploadPage from './Pages/Upload'


function App() {


  return (
    <>
      <Navbar />
      <div className="flex justify-between">
          <Sidebar/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Upload' element={<UploadPage />}></Route>
          </Routes>
      </div>

    </>
  )
}

export default App
