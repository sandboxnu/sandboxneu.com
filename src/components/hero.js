import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "../styles/Section"
import BackgroundImage from "gatsby-background-image"

const Title = styled.h1`
  font-size: 4em;
  font-weight: normal;
  color: #fff;
  max-width: 550px;
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
        <Title>{title}</Title>
      </Section>
    </StyledBackgroundImage>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Hero
