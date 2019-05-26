import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: fixed;
  margin-top: 4.4%;
  flex: 0 0 3%;
  width: 100%;
  background-color: #fff;
  font-family: 'Roboto';
  z-index: 989;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  color: #000;
  @media(max-width: 600px){
    flex: 0 0 5%;
    margin-top: 8%;
  }
  .menu {
    display: flex;
    width: 40%;
    padding: 10px 0px 10px 20px;
    & i {
      color: #000;
      text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
      transition: 0.6s;
      font-size: 25px;
      cursor: pointer;
      &:hover {
        text-shadow: 5px 15px 35px #fff;
        transition: 0.6s;
      }
    }
    & span {
      margin: 4px 0px 0px 10px;
      font-size: 12px;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: bold;
    }
  }
  .searchBar {
    display: flex;
    justify-content: center;
    width: 50%;

    & input {
      outline: none;
      border: none;
      width: 80%;
      height: 80%;
      vertical-align: middle;
      border-radius: 8px;
      text-align: center;
      margin-top: 5px;
    }
  }
  .login {
    display: flex;
    width: 15%;
    padding: 10px 0px 10px 20px;
    & span {
      padding: 10px 0px 10px 20px;
      font-weight: bold;
    }
  }
  .cart {
    padding: 10px 0px 10px 20px;
    width: 10%;
  }
  .backGround {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: #000;
    opacity: 0.6;
  }
`
