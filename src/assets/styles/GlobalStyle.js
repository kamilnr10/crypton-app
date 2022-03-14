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
    background-color: #232328;

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
