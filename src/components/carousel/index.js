import React, { Component } from 'react'

class Carousel extends Component {
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
              <img
                src="https://blog.jonygames.com.br/wp-content/uploads/2017/07/Banner-God-Of-War-PS4-Jony-Games.jpg"
                alt=""
                style={{ margin: 'auto', width: '100%', height: '300px' }}
              />
            </div>

            <div class="item">
              <img
                src="https://images.tcdn.com.br/img/img_prod/654759/1555706315_banner-cat-ps4.png"
                alt=""
                style={{ margin: 'auto', width: '100%', height: '300px' }}
              />
            </div>

            <div class="item">
              <img
                src="https://images-shoptime.b2w.io/spacey/2019/04/04/header-lancamento_.png"
                alt=""
                style={{ margin: 'auto', width: '100%', height: '300px' }}
              />
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
