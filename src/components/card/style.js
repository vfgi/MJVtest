import styled from 'styled-components'

export const Container = styled.div`
  width: 20%;
  text-align: center;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  }
  @media (max-width: 600px) {
        width: 45%;
        margin-left: 3%;
      }
  .foto {
    width: 100%;
    & img {
      width: 150px;
      height: 150px;
    }
  }
  .titulo {
    display:inline-table;
    width: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    letter-spacing: 0.8px;
  }
  .price{
    width: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.8px;
  }
`
