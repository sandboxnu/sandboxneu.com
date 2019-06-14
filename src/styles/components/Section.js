import styled from "styled-components"

export const SectionContent = styled.section`
  max-width: 600px;
  @media (min-width: 1000px) {
    max-width: 1100px;
  }
`

const Section = styled(SectionContent)`
  margin: 0 auto;
  padding: 5em 2em;
`

export default Section
