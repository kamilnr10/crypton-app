import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

html {
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    ${
      '' /* background-color: #232328;
     background-image: linear-gradient( #29323c 0%, #485563 100%);  */
    }
     background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}

*, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    
}



a,button {
    font-family: 'Montserrat', sans-serif;
}

`;
