import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"
import Section from "styles/components/Section"
import { HeaderLine } from "styles/components/Header"
import { SB_LIGHT_BLUE } from "../../styles/colors"

const ShowcaseVideo = styled.iframe`
  margin-top: 20px;
  margin-bottom: 40px;
`

const PadLessSection = styled(Section)`
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1000px) {
    padding-top: 0em;
    padding-bottom: 0em;
  }
`
const TestHeader = styled.h1`
  font-style: italic;
  color: #e8f0ff;
  font-stretch: expanded;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;
  font-size: 10.5em;
  margin-bottom: 0.5em;
  position: absolute;
  top: 850px;
  margin-top: 29px;
`

const Header = styled.h1`
  font-style: italic;
  font-stretch: expanded;
  letter-spacing: 0.15em;
  text-align: center;
  font-weight: 600;
  font-size: 2em;
  color: ${SB_NAVY};
  text-transform: uppercase;

  @media (min-width: 1000px) {
    font-size: 3em;
  }
`

const SectionLine = styled(HeaderLine)`
  color: ${SB_ORANGE};
  border-top: 3px solid;
  margin-top: 1em;
  display: grid;
  width: -webkit-fill-available;
`

const Showcase = () => (
  <PadLessSection>
    {/* <TestHeader>highlights</TestHeader> */}
    <Header>Semester highlights</Header>
    <ShowcaseVideo
      width="560"
      height="315"
      src="https://www.youtube.com/embed/_kvu42rM55Q"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <SectionLine />
  </PadLessSection>
)

export default Showcase
