import React from "react"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"
import FontAwesome from "react-fontawesome"
import styled from "styled-components"

import Section from "../styles/Section"
import banner from "../images/sandbox-banner-shadow.svg"

const Subtitle = styled.h1`
  padding-top: 1em;
  color: #fff;
  font-size: 2.5em;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 0 7px #111;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
`

const ImgContainer = styled.object`
  max-width: 40em;
  margin: 0 auto;
  display: block;
  padding-top: 10vh;
`

const Banner = () => <ImgContainer data={banner}>Banner</ImgContainer>

const Hero = ({ title, background }) => {
  return (
    <StyledBackgroundImage
      fluid={background.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <Section>
        <Banner dropShadow />
        <Subtitle>{title}</Subtitle>
        <br />
        <FontAwesome name="arrow-down" />
      </Section>
    </StyledBackgroundImage>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Hero
