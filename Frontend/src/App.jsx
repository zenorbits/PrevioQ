import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Userpage from './userpage/userpage'
import UploadForm from './components/UploadForm'
import About from './userpage/About'

const App = () => {
  return (
    <div className='font-mono'>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/user' element={<Userpage />} />
        <Route path='/upload' element={<UploadForm />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App