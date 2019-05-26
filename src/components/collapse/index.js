import React from 'react'
import { Container } from './style'
import history from '../../history'

function Collapse() {
  function productRedirect(cat, subCat) {
    history.push(`/${cat}/${subCat}`)    
  }

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
            <div className="cardBody" onClick={() => productRedirect('eletro', 'geladeira')}>
              Geladeiras
            </div>
            <div className="cardBody" onClick={() => productRedirect('eletro', 'maquina')}>
              Máquina de Lavar
            </div>
            <div className="cardBody" onClick={() => productRedirect('eletro', 'microondas')}>
              Microondas
            </div>
            <div className="cardBody" onClick={() => productRedirect('eletro', 'outros')}>
              Outros
            </div>
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
            <div className="cardBody" onClick={() => productRedirect('games', 'acessorio')}>
              Acessórios
            </div>
            <div className="cardBody" onClick={() => productRedirect('games', 'console')}>
              Consoles
            </div>
            <div className="cardBody" onClick={() => productRedirect('games', 'jogo')}>
              Jogos
            </div>
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
            <div className="cardBody" onClick={() => productRedirect('smartphone', 'Apple')}>
              Apple
            </div>
            <div className="cardBody" onClick={() => productRedirect('smartphone', 'Asus')}>
              Asus
            </div>
            <div className="cardBody" onClick={() => productRedirect('smartphone', 'Motorola')}>
              Motorola
            </div>
            <div className="cardBody" onClick={() => productRedirect('smartphone', 'Samsung')}>
              Samsung
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Collapse
