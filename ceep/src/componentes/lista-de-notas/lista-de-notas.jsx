import React, {Component} from 'react'
import CardNota from '../card-nota/card-nota'
import './style.css'

 class ListaDeNotas extends Component {
  render() {
    return ( 
      <ul className='lista-notas'>
        {Array.of('trabalho', 'trabalho','estudos').map(categoria => {
          return (<li className='lista-notas_item'>
           <CardNota/>
          </li>)
        })}
      </ul>
    )}
}

export default ListaDeNotas