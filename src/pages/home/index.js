import React, { Component } from 'react'
import { Container } from './style'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Carousel from '../../components/carousel'
import Card from '../../components/card'

class Home extends Component {
  state = {
    games: [],
    smartphone: [],
    eletro: []
  }

  shuffleArray(array) {
    let i = array.length - 1
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  loadData() {
    axios
      .get(`http://my-json-server.typicode.com/vfgi/servermjv/db`)
      .then(response => {
        this.setState({
          games: response.data.games,
          smartphone: response.data.smartphone,
          eletro: response.data.eletro
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.loadData()
  }

  render() {
    let shuffledGames = this.shuffleArray(this.state.games)
    let shuffledPhones = this.shuffleArray(this.state.smartphone)
    let shuffledEletro = this.shuffleArray(this.state.eletro)

    return (
      <Container>
        <div className="top">
          <div className="banner">
            <Link to="product/Smartphone/1">
              <img src="https://images-shoptime.b2w.io/spacey/2019/03/08/s10e.png" alt="" />
            </Link>
          </div>
          <div className="head">
            <Carousel />
          </div>
          <div className="banner">
            <img
              src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/BTP_BTPX_1690_BANNER_mob_768x960_4.png"
              alt=""
            />
          </div>
        </div>
        <h2>Os Games que você ama estão aqui!</h2>
        <div className="cards">
          {shuffledGames.slice(0, 5).map(games => (
            <Card
              img={games.foto}
              title={games.titulo}
              price={((games.preco * 10) / 10).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
              token={games.id}
              cat={games.category}
            />
          ))}
        </div>
        <h2>Os Melhores Smartphones no melhor preço!</h2>
        <div className="cards">
          {shuffledPhones.slice(0, 5).map(phone => (
            <Card
              img={phone.foto}
              title={phone.titulo}
              price={((phone.preco * 10) / 10).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
              token={phone.id}
              cat={phone.category}
            />
          ))}
        </div>
        <h2>Só aqui você encontra o melhor preço em linha branca</h2>
        <div className="cards">
          {shuffledEletro.slice(0, 5).map(eletro => (
            <Card
              img={eletro.foto}
              title={eletro.titulo}
              price={((eletro.preco * 10) / 10).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
              token={eletro.id}
              cat={eletro.category}
            />
          ))}
        </div>
      </Container>
    )
  }
}

export default Home
