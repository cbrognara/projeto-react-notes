import React, {Component} from "react";
import {ReactComponent as DeleteSVG} from '../img/delete.svg'


class Nota extends Component {
apagar() {
  const index = this.props.index
  this.props.apagarNota(index)
}

  render() { 
    return (
        <section>
            <header>
              <DeleteSVG onClick={this.apagar.bind(this)}/>
              <h3>{this.props.titulo}</h3>
            </header>
            <p>{this.props.texto}</p>
          </section>
    );
  }
}

export default Nota

 