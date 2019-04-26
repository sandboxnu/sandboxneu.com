import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "../styles/Section"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-background-image"
import FontAwesome from "react-fontawesome"

const Subtitle = styled.h1`
  font-size: 2.75em;
  font-weight: 500;
  color: #fff;
  line-height: 1.4;
  padding-top: 1em;
  text-transform: uppercase;
  letter-spacing: .15em;
  text-align: center;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
`

const ImgContainer = styled.div`
  max-width: 800px;
  min-height: 300px;
  margin: 0 auto;
`

const Hero = ({ title, background, banner }) => {
  return (
    <StyledBackgroundImage
      fluid={background.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <Section>
      <ImgContainer>
        <Img fluid={banner.childImageSharp.fluid} />
      </ImgContainer>
        <Subtitle>Helping researchers dig deeper</Subtitle>
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
