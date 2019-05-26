import React, { Component } from 'react'
import { Container } from './style'
import axios from 'axios'

import Card from '../../components/card'

class Category extends Component {
  state = {
    itens: []
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
    let cat = this.props.match.params.category
    let sub = this.props.match.params.subCategory
    console.log(cat, sub)
    if (sub === 'sony') {
      axios
        .get(`https://my-json-server.typicode.com/vfgi/servermjv/${cat}?brand=${sub}`)
        .then(response => {
          this.setState({ itens: response.data })
        })
    }
    axios
      .get(`https://my-json-server.typicode.com/vfgi/servermjv/${cat}?subCategory=${sub}`)
      .then(response => {
        this.setState({ itens: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.loadData()
  }

  render() {
    let shuffleditens = this.shuffleArray(this.state.itens)
    console.log(window.innerWidth)

    return (
      <Container>
        <div className="cards">
          {shuffleditens.map(itens => (
            <Card
              img={itens.foto}
              title={itens.titulo}
              price={((itens.preco * 10) / 10).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
              token={itens.id}
              cat={itens.category}
            />
          ))}
        </div>
      </Container>
    )
  }
}

export default Category
