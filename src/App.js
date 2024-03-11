import React from 'react';
import Cadalimento from './componentes/tela/cadalimento';
import Cadeletronico from './componentes/tela/cadeletronico';
import Telainicial from './componentes/tela/paginicial';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaErro from './componentes/tela/pagError';
import CadRoupas from './componentes/tela/cadroupas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Telainicial/>} />
          <Route path='/Roupas' element={<CadRoupas/>} />
          <Route path='/Eletronicos' element={<Cadeletronico/>} />
          <Route path='/Alimentos' element={<Cadalimento/>} />
          <Route path='*' element={<TelaErro/>} />
        </Routes>
      </BrowserRouter>
      
    </div> 
    
  );
}

export default App;