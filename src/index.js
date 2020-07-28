import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home';
import CadastroVideo from './pages/cadastro/Videos'
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = '/' component = {Home} exact />
      <Route path = '/cadastro/videos' component = {CadastroVideo} />
      <Route path = '/cadastro/categoria' component = {CadastroCategoria} />
      <Route component = {() => (<div>Página 404</div>)}/>
    </Switch>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

