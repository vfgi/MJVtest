import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        height: 100%;
    }
    .wrapper{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .mainWrapper{
      padding-top: 7.5%;
        display: flex;
        flex-direction: column;
        flex: 1;
    }
`
export default GlobalStyle
