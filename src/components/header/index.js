import React, { Component } from 'react'
import { Container } from './style'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <Container>
        <div className="logo">
          <Link to="/">
            <i class="fas fa-store"> BuyIt</i>
          </Link>
        </div>
        <form className="searchBar">
          <input placeholder="O que você está buscando?" />
        </form>
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
