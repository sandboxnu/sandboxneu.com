import styled from "styled-components"
import { SB_SALMON, SB_LIGHT_SALMON } from "@colors"

const Header = styled.h2`
  font-size: 2.5em;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${SB_SALMON};
`

const HeaderLine = styled(Header)`
  display: flex;
  align-items: center;
  text-align: center;
  &:after,
  &:before {
    content: "";
    border-top: 3px solid ${SB_LIGHT_SALMON};
  }
`

const HeaderLineRight = styled(HeaderLine)`
  & :after {
    flex-grow: 1;
    margin-left: 20px;
  }
`

const HeaderLineLeft = styled(HeaderLine)`
  & :before {
    flex-grow: 1;
    margin-right: 20px;
  }
`

const HeaderLineBelow = styled(HeaderLine)`
  flex-direction: column;
  & :after {
    margin-top: 20px;
    width: 80%;
    max-width: 250px;
  }
`

export { Header, HeaderLine, HeaderLineRight, HeaderLineLeft, HeaderLineBelow }
