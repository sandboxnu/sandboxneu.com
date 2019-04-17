import React from "react"
import styled from "styled-components"
import Section from "../styles/Section"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Title = styled.h1`
  font-size: 64px;
  font-weight: normal;
  color: #fff;
  max-width: 550px;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
`

const Hero = ({ data }) => {
  const { frontmatter } = data[0].node
  const { title, background } = frontmatter
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

export default Hero
