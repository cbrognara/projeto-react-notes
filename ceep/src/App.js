// import './App.css'
import React, { Component } from 'react'
import ListaDeNotas from './componentes/lista-de-notas'
import FormularioCadastro from './componentes/formulario-cadastro'
import './assets/App.css'
import './assets/index.css'

class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    )
  }
}

export default App
