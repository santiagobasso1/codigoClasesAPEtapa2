
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ClickOnMe from './components/ClickOnMe/ClickOnMe'
import ClickOnMeEffect from './components/ClickOnMeEffect/ClickOnMeEffect'
import UseParamsComp from './components/UseParams/UseParams'
import SinUseReducer from './components/UseReducer/SinUseReducer'
import UseReducer from './components/UseReducer/UseReducer'
import UsuarioProvider from './components/UsuarioContext/UsuarioContext'
import NuevoComponente from './components/UsuarioContext/NuevoComponente'
function App() {

  return (
    <BrowserRouter>
      <>

        <ClickOnMe />
        <ClickOnMeEffect />
        <UseReducer />
        <SinUseReducer />
        <Routes>
          {/* Al poner :id nosotros le estamos diciendo que lo que va a venir luego de usuarios es el id */}
          <Route path='/usuarios/:id' element={<UseParamsComp />} />
        </Routes>
        <UsuarioProvider>
          <NuevoComponente />
        </UsuarioProvider>

      </>

    </BrowserRouter>
  )
}

export default App
