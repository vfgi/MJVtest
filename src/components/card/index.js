import React from 'react'
import { Container } from './style'

function Card (props){
    return (
      <Container>
        <div className="foto"><img src={props.img} alt={props.key}/></div>
        <span className="titulo">{props.title}</span>
        <span className="price">{props.price}</span>
      </Container>
    )
}

export default Card
