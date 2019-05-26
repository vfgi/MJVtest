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
      .get(`https://my-json-server.typicode.com/vfgi/servermjv/${cat}/${id}`)
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
        <div className="foto">
          <img src={data.foto} alt={data.id} />
        </div>
        <div className="descricao">
          <div className="titulo">{data.titulo}</div>
          <div className="preco">
            <i class="far fa-money-bill-alt" />{' '}
            {((data.preco * 10) / 10).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </div>
          <div className="parcela">
            <i class="far fa-credit-card" />
            Parcele em até 12x de{' '}
            {(data.preco / 12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} sem
            juros no cartão
            <div>
              <div className="comprar">Comprar</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Home
