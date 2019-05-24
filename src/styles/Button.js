import styled from "styled-components"
import { lightenDarkenColor, SB_NAVY } from "@colors"

const Button = styled.a`
  background-color: ${SB_NAVY};
  transition: background-color 0.3s;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  color: #fff;
  font-size: 1.2em;
  cursor: pointer;
  padding: 0.7em 2em;
  display: inline-block;

  &:hover {
    background-color: ${lightenDarkenColor(SB_NAVY, 20)};
  }
`

export default Button
