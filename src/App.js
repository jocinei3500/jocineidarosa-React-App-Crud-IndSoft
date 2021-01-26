import React from 'react';
import Navbar from '../src/components/Header/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainUsuario from './pages/Usuario/main';
import DetalhesUsuario from './pages/Usuario/detalhes';
import CriarUsuario from './pages/Usuario/criar';
import EditarUsuario from './pages/Usuario/editar';
import DeletarUsuario from './pages/Usuario/deletar';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route exact path = "/usuarios" component={MainUsuario} />
        <Route path = "/usuarios/:id" component={DetalhesUsuario} />
        <Route path = "/criarUsuario" component={CriarUsuario} />
        <Route path = "/editarUsuario/:id" component={EditarUsuario} />
        <Route path = "/deletarUsuario/:id" component={DeletarUsuario} />
      </Switch>
    </Router>
  </>
  );
}

export default App;
