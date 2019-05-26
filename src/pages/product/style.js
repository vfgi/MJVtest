import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 600px) {
    padding-top: 15%;
    display: inline-table;
  }
  .foto {
    display: flex;
    width: 50%;
    @media (max-width: 600px) {
      width: 100%;
      height: 200px;
    }
    & img {
      margin: auto;
      width: 300px;
      height: 300px;
      @media (max-width: 600px) {
        width: 50%;
        height: 100%;
      }
    }
  }
  .descricao {
    width: 45%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    height: 100%;
    @media (max-width: 600px) {
        width: 96%;
        margin-left: 2%;
      }
    & .titulo {
      margin-top: 20px;
      width: 100%;
      letter-spacing: 1px;
      text-align: center;
      font-size: 30px;
      color: rgba(0, 0, 0, 0.6);
      font-weight: bold;
    }
    & .preco {
      font-family: 'Source Sans Pro', sans-serif;
      margin-top: 20px;
      width: 100%;
      letter-spacing: 1px;
      text-align: center;
      font-size: 34px;
      color: rgba(0, 0, 0, 0.9);
      font-weight: bold;
    }
    & .parcela {
      font-family: 'Source Sans Pro', sans-serif;
      margin-top: 20px;
      width: 100%;
      letter-spacing: 1px;
      text-align: center;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.3);
      font-weight: bold;
    }
    & .comprar {
      margin-top: 5%;
      margin-left: 26%;
      text-align: center;
      color: #fff;
      font-size: 16px;
      background-color: #2ef448;
      width: 50%;
      border-radius: 10px;
      height: 30px;
      cursor: pointer;
      transition: 0.4s;
      @media (max-width: 600px) {
        margin-bottom: 20px;
      }
      &:hover {
        margin-left: 22%;
        width: 55%;
        color: #000;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
        transition: 0.4s;
      }
    }
  }
`
