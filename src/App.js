import React, { Component } from 'react'
import { BrowserRouter, Router } from 'react-router-dom'

import GlobalStyle from './style/globalStyle'

import Routes from './routes/routes'
import Header from './components/header'
import Menu from './components/menu'
import Drawer from './components/drawer'
import history from './history'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router history={history}>
          <div className="wrapper">
            <GlobalStyle />
            <Drawer />
            <Header />
            <Menu />
            <div className="mainWrapper">
              <Routes />
            </div>
          </div>
        </Router>
      </BrowserRouter>
    )
  }
}

export default App
