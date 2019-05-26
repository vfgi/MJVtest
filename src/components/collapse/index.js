import React, { Component } from 'react'
import { Container } from './style'

class Collapse extends Component {
  render() {
    return (
      <Container>
        <div class="accordion" id="accordionExample">
          <div className="cards">
            <div
              className="cardHeader"
              id="headingOne"
              data-toggle="collapse"
              data-target="#collapseOne"
            >
              <i class="fas fa-plug"> Eletrodomésticos</i>
            </div>
            <div
              id="collapseOne"
              class="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">SubCategories</div>
            </div>
          </div>
          <div className="cards">
            <div
              className="cardHeader"
              id="headingTwo"
              data-toggle="collapse"
              data-target="#collapseTwo"
            >
              <i class="fas fa-gamepad"> Games</i>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">SubCategories</div>
            </div>
          </div>
          <div className="cards">
            <div
              className="cardHeader"
              id="headingThree"
              data-toggle="collapse"
              data-target="#collapseThree"
            >
              <i class="fas fa-mobile-alt"> Smartphones</i>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">SubCategories</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Collapse
