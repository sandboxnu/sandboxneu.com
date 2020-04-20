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
  min-height: 33vh;
  height: 33vh
  display: inline-block;

  @media (min-width: 1000px) {
    min-height: 20vh;
    padding-bottom: 0em;
  }
`

const Heading = ({ title, applicationStatus }) => (
  <BlueFontSection>
    <Header>{title}</Header>
    <Subtitle>{applicationStatus}</Subtitle>
  </BlueFontSection>
)

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  applicationStatus: PropTypes.string.isRequired,
}

export default Heading
