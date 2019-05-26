import React, { Component } from 'react'
import { Container } from './style'

import Carousel from '../../components/carousel'
import Card from '../../components/card'

import { GameData } from '../../utils/mock/games'
import { PhoneData } from '../../utils/mock/smartphone'
import { EletroData } from '../../utils/mock/eletro'

class Home extends Component {
  shuffle(arr) {
    var i, j, temp
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  }
    
  render() {
    let shuffledGames = this.shuffle(GameData)
    let shuffledPhones = this.shuffle(PhoneData)
    let shuffledEletro = this.shuffle(EletroData)

    return (
      <Container>
        <div className="top">
          <div className="banner">
            <img src="https://images-shoptime.b2w.io/spacey/2019/03/08/s10e.png" alt="" />
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
            <Card img={games.foto} title={games.titulo} price={games.preco} />
          ))}
        </div>
        <h2>Os Melhores Smartphones no melhor preço!</h2>
        <div className="cards">
          {shuffledPhones.slice(0, 5).map(phone => (
            <Card img={phone.foto} title={phone.titulo} price={phone.preco} />
          ))}
        </div>
        <h2>Só aqui você encontra o melhor preço em linha branca</h2>
        <div className="cards">
          {shuffledEletro.slice(0, 5).map(eletro => (
            <Card img={eletro.foto} title={eletro.titulo} price={eletro.preco} />
          ))}
        </div>
      </Container>
    )
  }
}

export default Home
