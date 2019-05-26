import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import history from '../../history'


class Carousel extends Component {
  productRedirect(cat, subCat) {
    history.push(`/${cat}/${subCat}`)    
  }
  render() {
    return (
      <div class="container">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active" />
            <li data-target="#myCarousel" data-slide-to="1" />
            <li data-target="#myCarousel" data-slide-to="2" />
          </ol>
          <div class="carousel-inner">
            <div class="item active">
              <Link to="/product/games/4">
                <img
                  src="https://blog.jonygames.com.br/wp-content/uploads/2017/07/Banner-God-Of-War-PS4-Jony-Games.jpg"
                  alt=""
                  style={
                    window.innerWidth > 600
                      ? { margin: 'auto', width: '100%', height: '300px' }
                      : { margin: 'auto', width: '100%', height: '150px' }
                  }
                />
              </Link>
            </div>

            <div class="item">
              <img
                src="https://images.tcdn.com.br/img/img_prod/654759/1555706315_banner-cat-ps4.png"
                alt=""
                style={
                  window.innerWidth > 600
                    ? { margin: 'auto', width: '100%', height: '300px' }
                    : { margin: 'auto', width: '100%', height: '150px' }
                }
                onClick={() => this.productRedirect('games', 'sony')}
              />
            </div>

            <div class="item">
              <Link to="/product/Smartphone/0">
                <img
                  src="https://images-shoptime.b2w.io/spacey/2019/04/04/header-lancamento_.png"
                  alt=""
                  style={
                    window.innerWidth > 600
                      ? { margin: 'auto', width: '100%', height: '300px' }
                      : { margin: 'auto', width: '100%', height: '150px' }
                  }
                />
              </Link>
            </div>
          </div>
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" />
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" />
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Carousel
