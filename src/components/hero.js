import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "../styles/Section"
import BackgroundImage from "gatsby-background-image"
import FontAwesome from "react-fontawesome"

const Title = styled.h1`
  font-size: 4.5em;
  font-weight: 500;
  color: #fff;
  max-width: 600px;
  line-height: 1.4;
  padding-top: 1em;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
`

const Hero = ({ title, background }) => {
  return (
    <StyledBackgroundImage
      fluid={background.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <Section>
        <Title>{title}.</Title>
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
