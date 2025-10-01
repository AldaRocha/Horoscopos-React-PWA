import React from 'react'
import { useState } from 'react'
import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'

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
