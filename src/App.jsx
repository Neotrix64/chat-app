import '../tailwind.css'

import React from 'react'
import {Button} from '@/components/ui/button.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Auth from '../src/pages/auth/index'
import Chat from '../src/pages/chat/index'
import Profile from '../src/pages/profile/index'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<Auth/>} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="*" element={<Navigate to="/auth"/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App