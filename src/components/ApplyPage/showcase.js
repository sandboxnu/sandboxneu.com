import React from "react"
import styled from "styled-components"
import { SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"
import Section from "styles/components/Section"

const ShowcaseVideo = styled.iframe`
  margin-top: 20px;
  margin-bottom: 50px;
  width: 100%;
  max-width: 600px;

  @media (min-width: 1000px) {
    margin-bottom: 70px;
  }
`

const StyledSection = styled(Section)`
  padding-top: 0em;
  padding-bottom: 1em;
  padding-left: 2em;
  padding-right: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1000px) {
    padding-top: 0em;
    padding-bottom: 0em;
  }
`

const BlueParagraph = styled.p`
  color: ${SB_NAVY};
  line-height: 1.5;
  font-size: 1.2em;
  width: 100%;
  max-width: 600px;
  margin-top: 0;
  margin-bottom: 0px;
  text-align: center;
`

const Showcase = () => (
  <StyledSection>
    <BlueParagraph>Check out the work we did Spring 2020!</BlueParagraph>
    <ShowcaseVideo
      width="560"
      height="315"
      src="https://www.youtube.com/embed/6h-77kEnbtI"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </StyledSection>
)

export default Showcase
