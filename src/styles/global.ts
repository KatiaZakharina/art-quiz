import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { px2vw } from './px2vw';
import { ThemeType } from './theme';

type Props = { theme: ThemeType };

export const GlobalStyle = createGlobalStyle<Props>`
${normalize}

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 :root {
     font-size: 12px;

     @media (min-width: 768px) {
       font-size: ${px2vw(18)};
     }

     @media (min-width: 1024px) {
       font-size: ${px2vw(18)};
     }

     @media (min-width: 1440px) {
       font-size: ${px2vw(18)};
     }

     @media (min-width: 1600px) {
       font-size: ${px2vw(16)};
     }
   }

 body {
   font-family: 'Source Sans Pro', sans-serif;
   font-weight: 600;
   color: ${({ theme }) => theme.colors.inverse_main};
   background-color:  ${({ theme }) => theme.colors.main};
 }

 html, body, #root{
   height: 100%;
 }
`;
