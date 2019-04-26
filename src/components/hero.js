import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "../styles/Section"
import BackgroundImage from "gatsby-background-image"
import FontAwesome from "react-fontawesome"
import banner from '../images/sandbox-banner.svg'

const Subtitle = styled.h1`
  padding-top: 1em;
  color: #fff;
  font-size: 2.75em;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
`

const ImgContainer = styled.object`
  max-width: 30em;
  margin: 0 auto;
  padding: 10em 0 3em;
  display: block;
`

const Banner = () => <ImgContainer data={banner}>Banner</ImgContainer>

const Hero = ({ title, background }) => {
  return (
    <StyledBackgroundImage
      fluid={background.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <Section>
          <Banner />
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
