import React from 'react'
import { Container } from './style'
import history from '../../history'


function Card (props){

  function productRedirect(key, category) {
    history.push(`/product/${category}/${key}`)
    console.log(category);
    
  }

    return (
      <Container onClick={() => productRedirect(props.token, props.cat)}>
        <div className="foto"><img src={props.img} alt='1'/></div>
        <span className="titulo">{props.title}</span>
        <span className="price">{props.price}</span>
      </Container>
    )
}

export default Card
