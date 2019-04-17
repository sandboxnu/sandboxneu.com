import React from "react"
import styled from "styled-components"
import Section from "../styles/Section"
import Header from "../styles/Header"

// Probably a better name
const ContainerContainer = styled.div`
  display: flex;
`

const TextContainer = styled.div`
  flex: 3;
`

const ImageContainer = styled.div`
  flex: 2;
`

const Who = () => (
  <Section>
    <ContainerContainer>
      <TextContainer>
        <Header>Who we are</Header>
        <Header>Why Sandbox</Header>
      </TextContainer>
      <ImageContainer>
        <p>
          We'll make some big ol' huge mountains! There's too many complicated
          things in our life already. All you're worried about is this nice
          outside shape. Always follow the angles. Don't just cover it all up --
          leave these spots!
        </p>
      </ImageContainer>
    </ContainerContainer>
  </Section>
)

export default Who
