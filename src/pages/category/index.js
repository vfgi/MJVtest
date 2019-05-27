import React, { Component } from 'react'
import { Container } from './style'
import axios from 'axios'

import Card from '../../components/card'

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itens: []
    }
  }

  loadData(props) {

    let cat = props.match.params.category
    let sub = props.match.params.subCategory
    console.log(cat, sub);
    
    if (sub === 'sony') {
      axios
        .get(`https://my-json-server.typicode.com/vfgi/servermjv/${cat}?brand=${sub}`)
        .then(response => {
          this.setState({ itens: response.data })
        })
    } else {
      axios
        .get(`https://my-json-server.typicode.com/vfgi/servermjv/${cat}?subCategory=${sub}`)
        .then(response => {
          this.setState({ itens: response.data })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  async componentDidMount() {
    this.loadData(this.props)
  }

  async componentWillReceiveProps(props) {
    this.loadData(props)
  }

  render() {
    return (
      <Container>
        <div className="cards">
          {this.state.itens.map(itens => (
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
