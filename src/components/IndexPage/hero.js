import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"

import { SB_ORANGE } from "@colors"
import { useAmplitudeLogEvent } from "utils/amplitude"
import banner from "images/sandbox-banner-shadow.svg"
import Section from "styles/Section"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const fadeInSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 10px);
  }

  50% {
    opacity: 0;
    transform: translate(0, 10px);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`

const Subtitle = styled.h1`
  opacity: 1;
  padding: 1.2em 0 2.8em;
  color: #fff;
  font-size: 1.8em;
  @media (min-width: 1000px) {
    font-size: 2.2em;
  }
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 0 7px #111;
  animation: ${fadeInSlideUp} 1.75s;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
`

const ImgContainer = styled.object`
  max-width: 15em;
  @media (min-width: 1000px) {
    max-width: 30em;
  }
  margin: 0 auto;
  display: block;
  padding-top: 8vh;
  animation: ${fadeInSlideUp} 1.25s;
`

const StyledFA = styled(FontAwesomeIcon)`
  display: block;
  margin: auto;
  position: relative;
  max-width: ${props => props.csssize};
  transition: top 0.3s, color 0.3s;
  animation: ${fadeIn} 2.25s;
  top: 0px;
  color: ${props => props.color};
  &:hover {
    top: 10px;
    cursor: pointer;
    color: ${SB_ORANGE};
  }
`

const Arrow = ({ color, scale }) => {
  const scrollToWhoSection = () => {
    window.scrollBy({
      top: document.documentElement.clientHeight,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <StyledFA
      icon={faArrowDown}
      size={scale + "x"} // to account for FA using size '3x' to represent '3em'
      csssize={scale + "em"} // this two-sizing-props weirdness is a workaround for a FA bug
      onClick={scrollToWhoSection}
      color={color}
    />
  )
}

const Banner = () => <ImgContainer data={banner}>Banner</ImgContainer>

const Hero = ({ title, background }) => {
  useAmplitudeLogEvent("Visit homepage")
  return (
    <StyledBackgroundImage
      fluid={background.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <Section>
        <Banner dropShadow />
        <Subtitle>{title}</Subtitle>
        <br />
        <Arrow color="#fff" scale="3" />
      </Section>
    </StyledBackgroundImage>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.object.isRequired,
}

export default Hero
