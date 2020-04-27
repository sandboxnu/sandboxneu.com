import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"
import Section from "styles/components/Section"

const Header = styled.h1`
  font-style: italic;
  font-stretch: expanded;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-align: center;
  font-weight: 600;
  font-size: 2.5em;

  @media (min-width: 1000px) {
    font-size: 3em;
  }
`

const Subtitle = styled.h3`
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 5px;
  letter-spacing: 0.05em;

  @media (min-width: 1000px) {
    font-size: 1.5em;
  }
`

const AppStatus = styled.h3`
  text-align: center;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: 1000px) {
    font-size: 1.5em;
  }
`
const BlueFontSection = styled(Section)`
  color: ${SB_NAVY};
  padding-bottom: 1em;
  margin-bottom: 10px;
  min-height: 25vh;
  height: 25vh
  display: inline-block;

  @media (min-width: 1000px) {
    min-height: 20vh;
    padding-bottom: 0em;
  }
`

const Heading = ({ title, subtitle, applicationStatus }) => (
  <BlueFontSection>
    <Header>{title}</Header>
    <Subtitle>{subtitle}</Subtitle>
    <AppStatus>{applicationStatus}</AppStatus>
  </BlueFontSection>
)

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  applicationStatus: PropTypes.string.isRequired,
}

export default Heading
