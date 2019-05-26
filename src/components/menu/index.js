import React, { Component } from 'react'
import { Container } from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as DrawerActions } from '../../store/ducks/drawer'

class Menu extends Component {
  render() {
    return (
      <Container>
        <div className="menu">
          <i class="fas fa-bars" onClick={() => this.props.openDrawer()} /> <span>Navegue pela loja</span>
        </div>
      </Container>
    )
  }
}
const mapStateToProps = state => ({
  drawer: state.drawer
})

const mapDispatchToProps = dispatch => bindActionCreators(DrawerActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
