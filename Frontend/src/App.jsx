import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Userpage from './userpage/userpage'

const App = () => {
  return (
    <div className='font-mono'>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/user' element={<Userpage />} />
      </Routes>
    </div>
  )
}

export default App