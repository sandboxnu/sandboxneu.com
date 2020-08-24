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
  border-radius: 5px;
  margin-bottom: 0.5em;

  @media (min-width: 1000px) {
    font-size: 4em;
  }
`

const Subtitle = styled.h3`
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 1em;
  letter-spacing: 0.05em;

  @media (min-width: 1000px) {
    font-size: 2em;
  }
`

const AppStatus = styled.h3`
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
  -webkit-text-stroke: 2px white;
  color: ${SB_SALMON};
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  font-stretch: expanded;
  font-style: italic;
  font-size: 2em;
  font-weight: 600;
  @media (min-width: 1000px) {
    margin-right: 1.5em;
  }
`
const BlueFontSection = styled(Section)`
  color: ${SB_NAVY};
  padding-bottom: 1em;
  margin-bottom: 10px;
  min-height: 25vh;
  height: 25vh
  display: inline-block;
  padding-left: 0px;
  padding-right: 0px;

  @media (min-width: 1000px) {
    min-height: 20vh;
    max-width: 100vw;
    padding: 5em 0em;
    padding-bottom: 0em;
  }
`

const Button = styled.span`
  background-color: white;
  transition: background-color 0.3s;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  cursor: pointer;
  display: inline-block;
  text-align: center;

  font-stretch: expanded;
  font-style: italic;
  font-size: 2em;
  font-weight: 600;
  color: ${SB_SALMON};
  padding: 7px 25px;
  margin-bottom: 1em;

  @media (min-width: 1000px) {
    margin-bottom: 0px;
  }
`

const AppStatusDiv = styled.div`
  background-color: ${SB_SALMON};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`

const PaddedDiv = styled.div`
  padding-bottom: 48px;
`

const Heading = ({ title, subtitle, applicationStatus, isBannerVisible }) => (
  <PaddedDiv>
    <BlueFontSection>
      <Header>{title}</Header>
      <Subtitle>{subtitle}</Subtitle>
    </BlueFontSection>
    {isBannerVisible && (
      <AppStatusDiv>
        <AppStatus>{applicationStatus}</AppStatus>
        <Button
          onClick={() => {
            const ref = document.getElementById("open-positions")
            ref.scrollIntoView(true)

            const scrollHeight = window.scrollY - 110
            window.scrollTo({ top: scrollHeight, behavior: "smooth" })
          }}
        >
          Apply
        </Button>
      </AppStatusDiv>
    )}
  </PaddedDiv>
)

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  applicationStatus: PropTypes.string.isRequired,
}

export default Heading
