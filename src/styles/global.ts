import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing:border-box;
}

:root {
    --color-primary: #6e5494;
    --color-primary-accent: #af61e3;
    --color-secondary: #6cc644;
    --color-secondary-alt: #4078c0;
    --color-white: #FFF;
    --color-gray-50: #fafafa;
    --color-gray-100:#dadedf;
    --color-gray-900: #333;
    --color-bg: #FAF5FF;
    --color-card-bg: #322659;
}   

body {
    background-color: var(--color-gray-50);
    
}

button {
    font-weight: bold;
    cursor: pointer;
}

`;
