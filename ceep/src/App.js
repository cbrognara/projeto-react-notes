// import './App.css'
import React, { Component } from 'react'
import ListaDeNotas from './componentes/lista-de-notas'
import FormularioCadastro from './componentes/formulario-cadastro'
import './assets/App.css'
import './assets/index.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notas: []
    }
  }
  criarNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota() {
    let arrayNotas = this.state.notas
    arrayNotas.splice(0, 1)
    this.setState({ notas: arrayNotas })
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas
          notas={this.state.notas}
          apagarNota={this.deletarNota.bind(this)}
        />
      </section>
    )
  }
}

export default App
