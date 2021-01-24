import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');

    
    html {
        font-size: 62.5%;
    }
    
    ::-webkit-scrollbar {
        display: none;
    }

    body {
        font-size: 1.6rem;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: ${props => props.theme.font};
        background: ${props => props.theme.colors.body};
        line-height: 1.6;
    }

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none !important;
    }

    h1, h2, h3, h4, h5, h6, p {
        padding: 0;
        margin: 0;
    }

    input, select {
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
    }

    input:focus, textarea:focus, select:focus{
        outline: none;
    }

    input[type='number']::-webkit-inner-spin-button, 
    input[type='number']::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        margin: 0;
    }

    select::-ms-expand {
        display: none;
    }

    a {
        color: ${props => props.theme.colors.links};
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    img {
        max-width: 100%;
        display: block;
    }
`