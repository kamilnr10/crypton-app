import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

html {
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: white;
    background-color: #080710;
}

*, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}

th {

}

th div {

    svg {
        font-size: 6px !important; 
    }
}

th div span:hover {
color: #84ff9d !important;
}

.MuiTableSortLabel-active {
    color: #29fd53 !important;
}

a,button {
    font-family: 'Montserrat', sans-serif;
}

`;
