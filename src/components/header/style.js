import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: fixed;
  flex: 0 0 10%;
  width: 100%;
  background-color: #5eb1c3;
  font-family: 'Roboto';
  font-size: 16px;
  z-index: 990;
  color: #fff;
  background-image: linear-gradient(to right, transparent, rgba(7, 37, 74, 0.4));
  .logo {
    width: 25%;
    padding: 10px 0px 10px 20px;
    & i {
      color: #000;
      text-shadow: 0px 4px 10px #fff;
      transition: 0.6s;
      font-size: 36px;
      &:hover {
        text-shadow: 5px 15px 35px #fff;
        transition: 0.6s;
      }
      @media (max-width: 1330px) {
        font-size: 20px;
      }
      @media (max-width: 768px) {
        font-size: 17px;
      }
    }
    @media (max-width: 768px) {
      padding: 5px 0px 5px 10px;
    }
    @media (max-width: 600px) {
      width: 50%;
      padding: 5px 0px 5px 10px;
    }
  }
  .searchBar {
    display: flex;
    justify-content: center;
    width: 50%;
    @media (max-width: 600px) {
      display: none;
      width: 100%;
      height: 60%;
    }

    & input {
      outline: none;
      border: none;
      width: 80%;
      height: 60%;
      vertical-align: middle;
      border-radius: 8px;
      text-align: center;
      margin-top: 2%;
      color: #000;
      @media (max-width: 1330px) {
        width: 90%;
        height: 60%;
      }

      @media (max-width: 768px) {
        width: 90%;
        height: 60%;
      }
    }
  }
  .login {
    display: flex;
    width: 15%;
    padding: 10px 0px 10px 20px;
    @media (max-width: 768px) {
      padding: 8px 0px 0px 10px;
    }
    @media (max-width: 600px) {
      padding: 8px 0px 0px 20px;
      width: 30%;
    }
    & span {
      padding: 10px 0px 10px 20px;
      font-weight: bold;
      font-family: 'Source Sans Pro', sans-serif;
      @media (max-width: 1330px) {
        padding: 5px 0px 5px 10px;
        font-size: 12px;
      }
      @media (max-width: 768px) {
        padding: 3px 0px 3px 6px;
        font-size: 10px;
      }
    }
    & i {
      font-size: 36px;
      cursor: pointer;
      &:hover {
        text-shadow: 5px 15px 35px #fff;
        transition: 0.6s;
      }
      @media (max-width: 1330px) {
        font-size: 20px;
      }
      @media (max-width: 768px) {
        font-size: 17px;
      }
    }
  }
  .cart {
    padding: 10px 0px 10px 20px;
    width: 10%;
    @media (max-width: 768px) {
      padding: 10px 0px 4px 15px;
    }
    @media (max-width: 600px) {
      padding: 5px 10px 0px 40px;
    }
    & i {
      font-size: 36px;
      cursor: pointer;
      &:hover {
        text-shadow: 5px 15px 35px #fff;
        transition: 0.6s;
      }
      @media (max-width: 1330px) {
        font-size: 20px;
      }
      @media (max-width: 768px) {
        font-size: 17px;
      }
    }
  }
`
