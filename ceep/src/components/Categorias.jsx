import React, {Component} from "react";

class Categorias extends Component {
_handleEventoInput(evento) {
  if (evento.key === 'Enter'){
    let valorCategoria = evento.target.value
this.props.adicionarCategoria(valorCategoria)
  }
}

  
  render() { 
    return (
      <section>
      <ul>
      {this.props.categorias.map((categoria, index) => {
        return <li key={index} >{categoria}</li>
      })}
      </ul>
      <input type='text' placeholder="Nome da Categoria"
      onKeyUp={this._handleEventoInput.bind(this)}
      />
      </section>
    );
  }
}
 
export default Categorias;