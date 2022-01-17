import './App.css'
import React, { Component } from 'react'

import ListaDeNotas from './components/ListaDeNotas'
import Formulario from './components/Formulario'
import Categorias from './components/Categorias'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notas: [],
      categorias: []
    }
  }

  handleSubmit(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas
    arrayNotas.splice(index, 1)
    this.setState({ notas: arrayNotas })
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = { ...this.state, categorias: novoArrayCategorias }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section>
        <Formulario
          handleSubmit={this.handleSubmit.bind(this)}
          categorias={this.state.categorias}
        />
        <main>
          <Categorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    )
  }
}

export default App
