import { createGlobalStyle } from 'styled-components'
// Cores mais utilizadas na page
export const defaultColors = {
  primaryColor: '#008000',
  secondyColor: '#ffffff',
  darckColor: '#000000',
  shadowColor: 'rgb(100, 155, 107 )',
  shadowColorWhite: 'rgb(255 255 255 / 20%)',
  textColor: '#F5DBA7'
}

export default createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: 'Crimson Text', serif;
    
}

body {
    background: #000000;
   
}

`
