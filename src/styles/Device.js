import styled from "styled-components"

const Mobile = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
`

const Desktop = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 400px;
    grid-column-gap: 40px;
  }
`

export { Mobile, Desktop }