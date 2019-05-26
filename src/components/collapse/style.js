import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  .cards {
    align-items: center;
    & .cardHeader {
      display: flex;
      justify-content: center;
      background-color: transparent;
      transition: 0.4s;
      cursor: pointer;
      & i {
        margin: auto;
        font-size: 20px;
      }

      height: 35px;
      &:hover {
        background-color: rgba(135, 171, 216, 0.2);
        transition: 0.4s;
      }
    }
    & .cardBody{
      text-align: center;
      font-size: 14px;
      margin: 10px;
      cursor: pointer;
      transition: 0.3s;
      font-weight: 500;
      &:hover{
        background-color: rgba(0,0,0,0.1);
        transition: 0.3s;
        border-radius: 10px;
      }
    }
  }
`
