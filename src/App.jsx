import React from 'react'
import { useState } from 'react'
import Titulo from './components/Titulo.jsx'
import Formulario from './components/Formulario.jsx'
import Resultado from './components/Resultado.jsx'

const App = () => {
  const [datos, setDatos] = useState(null);

  return (
    <div className="negro">
      <Titulo/>
      <div className="container-fluid mt-4">
        <div className="row">
          <Formulario onGenerar={ setDatos }/>
          <Resultado datos={ datos }/>
        </div>
      </div>
    </div>
  )
}

export default App
