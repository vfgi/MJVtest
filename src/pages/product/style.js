import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  width: 100%;
  .top {
    padding: 15px 5px 10px 5px;
    display: flex;
    width: 100%;
    & .head {
      width: 70%;
      cursor: pointer;
    }
    & .banner {
      width: 15%;
      border-radius: 10px;
      & img {
        width: 100%;
        height: 300px;
        border-radius: 10px;
      }
      &:hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
        cursor: pointer;
      }
    }
  }
  .promo {
    display: flex;
    justify-content: center;
    padding: 5px 5px 10px 0px;
    width: 100%;
    & img {
      border-radius: 10px;
      width: 80%;
      height: 200px;
      &:hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
        cursor: pointer;
      }
    }
  }
  .cards{
    margin: 1%;
    display: flex;
    flex: wrap;
  }
  h2{
    margin: 1%;
  }
`
