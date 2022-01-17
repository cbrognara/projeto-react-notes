import React, {Component} from 'react'
import Nota from './Nota'

class ListaDeNotas extends Component {

  render() {
    return (
      <ul>
        {
          this.props.notas.map((nota, index) => {
            return (
              <li key={index}>
          <Nota index = {index}
          apagarNota={this.props.apagarNota}
          titulo={nota.titulo} 
          texto={nota.texto}/>
          </li>
            )
          })
        }
      </ul>
    )
  }
}

export default ListaDeNotas
