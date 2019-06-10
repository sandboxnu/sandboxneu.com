import styledNormalize from "styled-normalize"
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  ${styledNormalize}

  *, *:before, *:after {
    font-family: Brandon;
    box-sizing: border-box;
  }
  
  html{
    font-size: 14px;
  }

  @media (min-width: 400px) {
    html {
      font-size: 16px;
    }
  }
`
