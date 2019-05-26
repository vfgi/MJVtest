import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './style/globalStyle'

import Routes from './routes/routes'
import Header from './components/header'
import Menu from './components/menu'
import Drawer from './components/drawer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <GlobalStyle />
          <Drawer/>
          <Header />
          <Menu />
          <div className="mainWrapper">
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
