import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as DrawerActions } from '../../store/ducks/drawer'
import Collapse from '../collapse';

class Drawer extends Component {
  render() {
    return this.props.drawer.isActive ? (
      <Container>
        <div className="sideMenu">
          <div className="menuHead">
            <span>
              <i class="fas fa-bars" />
              MENU
            </span>
            <i class="fas fa-times" onClick={() => this.props.closeDrawer()} />
          </div>
          <Collapse/>
        </div>
        <div className="backGround" onClick={() => this.props.closeDrawer()} />
      </Container>
    ) : null
  }
}

const mapStateToProps = state => ({
  drawer: state.drawer
})

const mapDispatchToProps = dispatch => bindActionCreators(DrawerActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer)
