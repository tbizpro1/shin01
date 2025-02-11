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
import { StartupProfile } from './app/pages/PerfilStartup/perfilstartup';

import PartnerProfile from './app/pages/UserDetail/UserDetail';

// pages
import { HomeStartup } from './app/pages/HomeStartup/HomeStartup';
import { EditeStartup } from './app/pages/EditeStartup/EditeStartup';
import { DataPage } from './app/components/DataPage/datapage';





function App() {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/workspace' element={ <ProtectedRouter page={Home} />} />
        {/* página de formulário das startup */}
        <Route path='/startup' element={ <ProtectedRouter page={StartupProfile} />} />
        <Route path='/socio' element={<ProtectedRouter page={AgentsPage} />} />
        <Route path='/addsocio' element={<ProtectedRouter page={AddSocio} />} />
        <Route path='/perfil' element={<ProtectedRouter page={AgentProfile} />} />
        <Route path='/explorer' element={<ProtectedRouter page={InvitePage} />} />

        <Route path='/profile/partner' element={<ProtectedRouter page={PartnerProfile} />} />

        <Route path='/homestartup' element={<ProtectedRouter page={HomeStartup} />} />
        <Route path='/contentstartup' element={<ProtectedRouter page={EditeStartup} />} />

        <Route path='/datapage' element={<ProtectedRouter page={DataPage} />} />


      </Routes>
  )
}

export default App
