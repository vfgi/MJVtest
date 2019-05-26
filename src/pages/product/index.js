import React, { Component } from 'react'
import { Container } from './style'
import axios from 'axios'

class Home extends Component {
  state = {
    data: []
  }

  loadData() {
    let id = this.props.match.params.id
    let cat = this.props.match.params.category

    axios
      .get(`http://my-json-server.typicode.com/vfgi/servermjv/${cat}/${id}`)
      .then(response => {
        this.setState({ data: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.loadData()
  }

  render() {
    let data = this.state.data

    return (
      <Container>
        <div className="foto"><img src={data.foto} alt={data.id}/></div>
        <div>{data.titulo}</div>
        <div>{((data.preco*10)/10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
        <div>Parcele em até 12x de {(data.preco/12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
      </Container>
    )
  }
}

export default Home
