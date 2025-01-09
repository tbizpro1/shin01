import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./assets/plugins/bootstrap/css/bootstrap.min.css"
import "./assets/css/main.css"
import "./assets/css/authentication.css"
import "./assets/css/color_skins.css"
import './assets/css/blog.css'
import './assets/css/timeline.css'
import "./assets/css/inbox.css"

import Login from './app/pages/Signin/login'
import Home from './app/pages/Home/blank'
import ProtectedRouter from './app/components/ProtectedRouter/protectedRouter';
import AgentsPage from './app/pages/Socio/socio';
import { AddSocio } from './app/pages/AddSocio/addsocio';
import AgentProfile from './app/pages/Perfil/perfil';

import InvitePage from './app/pages/Invite/invite';




function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/workspace' element={ <ProtectedRouter page={Home} />} />
        <Route path='/socio' element={<ProtectedRouter page={AgentsPage} />} />
        <Route path='/addsocio' element={<ProtectedRouter page={AddSocio} />} />
        <Route path='/perfil' element={<ProtectedRouter page={AgentProfile} />} />

        <Route path='/explorer' element={<ProtectedRouter page={InvitePage} />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App