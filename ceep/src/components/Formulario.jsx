import React, {Component} from "react";

class Formulario extends Component {

  constructor(props){
    super(props)
    this.titulo =''
    this.texto = ''
  }

  handleSubmit(evento) {
    evento.preventDefault()
    evento.stopPropagation()
    this.props.handleSubmit(this.titulo, this.texto)
  }

  handleMudancaTitulo(evento) {
    evento.stopPropagation()
    this.titulo = evento.target.value
  }

  handleMudancaTexto(evento) {
    evento.stopPropagation()
    this.texto = evento.target.value
  }

  render() { 
    return (
      <form className="form-cadastro" onSubmit={this.handleSubmit.bind(this)}>
      <select>
        {this.props.categorias.map((item, index) => <option value={item} key={index}>{item}</option>
        )}
      </select>
      <input 
      type="text" 
      placeholder="Título" 
      className="form-cadastro_input" 
      onChange={this.handleMudancaTitulo.bind(this)}/>
      <textarea placeholder="Escreva sua nota" className="form-cadastro_input" onChange={this.handleMudancaTexto.bind(this)}/>
      <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
    </form>
    );
  }
}

export default Formulario


