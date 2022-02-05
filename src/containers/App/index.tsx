import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Login'
import SignUp from '../SignUp'
import Menu from '../../components/Menu'
import NotFound from '../../components/NotFound'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App