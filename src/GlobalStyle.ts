import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
body{
  width: 100vw;
  height: 100vh;
  font-family: overpass;
  font-weight: 400;
  font-size: .937rem;
  line-height: 24px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-content: center;

}

h2,p{
  color: #8b919d;
}
body{
display: flex;
align-items: center;
justify-content: center;
background-color: #131518;

;
} 

button {
    cursor: pointer;
  }

`