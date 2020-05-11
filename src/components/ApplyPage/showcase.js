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
  width: 100%;
  max-width: 600px;
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

const SectionLine = styled.span`
  color: ${SB_ORANGE};
  border-top: 3px solid;
  margin-top: 1em;
  margin-bottom: 0em;
  display: grid;
  content: none;
  width: -webkit-fill-available;
`

const BlueParagraph = styled.p`
  color: ${SB_NAVY};
  line-height: 1.5;
  font-size: 1.2em;
  width: 100%;
  max-width: 600px;
  margin-top: 0;
  text-align: center;
`

const Showcase = () => (
  <StyledSection>
    <Header>Semester highlights</Header>
    <ShowcaseVideo
      width="560"
      height="315"
      src="https://www.youtube.com/embed/_kvu42rM55Q"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <BlueParagraph>
      For the Spring 2020 semester, our members have been working hard on seven
      different projects: Cheminformatics, Visualizer, SearchNEU, Khoury Office
      Hours, Pharm D Tracker, and ELISA. Check out all the amazing work they
      have done!
    </BlueParagraph>
    {/* <SectionLine></SectionLine> */}
  </StyledSection>
)

export default Showcase
