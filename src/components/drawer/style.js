import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 998;
  .backGround {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    opacity: 0.6;
    z-index: 999;
  }
  .sideMenu {
    position: absolute;
    font-family: Roboto;
    font-size: 16px;
    width: 20%;
    height: 100%;
    z-index: 1000;
    background-color: #fff;
    animation: mymove 0.2s;
    -webkit-animation: mymove 0.2s;
    -webkit-animation-timing-function: ease-in;
    box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.4);
    /* Standard syntax */
    @keyframes mymove {
      from {
        left: -20%;
      }
      to {
        left: 0%;
      }
    }
    @media (max-width: 500px) {
      width: 60%;
      @keyframes mymove {
        from {
          left: -60%;
        }
        to {
          left: 0%;
        }
      }
    }
    & .menuHead {
      display: flex;
      width: 100%;
      height: 10%;
      background-color: #5eb1c3;
      & i {
        margin-top: 3%;
        color: #fff;
        cursor: pointer;
      }
      & span {
        margin-top: 5%;
        font-family: 'Source Sans Pro', sans-serif;
        letter-spacing: 5px;
        display: flex;
        justify-content: center;
        width: 90%;
        font-size: 25px;
        font-weight: bold;
        color: #fff;
        & i {
          margin-top: 3%;
          margin-right: 5%;
          color: rgba(0, 0, 0, 0.4);
          cursor: default;
        }
      }
    }
  }
`
