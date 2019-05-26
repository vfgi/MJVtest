import React, { Component } from 'react'
import { Container } from './style'

class Header extends Component {
  render() {
    return (
      <Container>
        <div className="logo">
          <i class="fas fa-store"> BuyIt</i>
        </div>
        <div className="searchBar">
          <input placeholder="O que você está buscando?" />
        </div>
        <div className="login">
          <i class="far fa-user-circle" />
          <span>Faça seu login</span>
        </div>
        <div className="cart">
          <i class="fas fa-shopping-cart" />
        </div>
      </Container>
    )
  }
}
export default Header
