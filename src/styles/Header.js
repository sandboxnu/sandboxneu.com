import styled from "styled-components"

const Header = styled.h2`
  font-size: 2.5em;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #2a426b;
`

const HeaderLine = styled(Header)`
  display: flex;
  align-items: center;
  text-align: center;
  &:after,
  &:before {
    content: "";
    border-top: 2px solid #fcbc80;
  }
`

const HeaderLineRight = styled(HeaderLine)`
  & :after {
    flex-grow: 1;
    margin-left: 10px;
  }
`

const HeaderLineLeft = styled(HeaderLine)`
  & :before {
    flex-grow: 1;
    margin-right: 10px;
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
