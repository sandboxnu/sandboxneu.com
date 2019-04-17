import React from "react"
import Section from "../styles/Section"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Title = styled.h1`
  font-size: 64px;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
`

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "stairs-down.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <StyledBackgroundImage
        fluid={data.placeholderImage.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <Title>Helping researchers dig deeper</Title>
      </StyledBackgroundImage>
    )}
  />
)

export default Hero
