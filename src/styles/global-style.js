/* eslint-disable import/no-unresolved */
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { applyMediaQuery } from './mediaQuery';

const GlobalStyle = createGlobalStyle`

  ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
  #root, body, html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: 62.5%;
    font-family: 'Noto Sans Display', 'Noto Sans KR', 'AppleSDGothicNeo', sans-serif;
  }
   * {
  
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color:inherit;
  }
    button {
        border: none;
        background-color: none;
        font-family: inherit;
        padding: 0;
        cursor: pointer;
    }
    .pc-tablet-only {
        display: block;
       ${applyMediaQuery('mobile')} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
     ${applyMediaQuery('tablet')}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
       ${applyMediaQuery('mobile')} {
            display: block;
        }
    }
`;

export default GlobalStyle;
