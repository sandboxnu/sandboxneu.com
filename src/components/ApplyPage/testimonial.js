import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";

import { SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"
import Section from "styles/components/Section"

const DoubleQuote = styled.span`
  z-index: -1;
  color: #ffcfc9;
  font-family: Alfa Slab One;
  font-style: normal;
  font-size: 8em;
  position: absolute;
  visibility: hidden;

  @media (min-width: 600px) {
    grid-column-start: c0;
    grid-column-end: c1;
    grid-row-start: r0;
    grid-row-end: r1;
    font-size: 7em;
    position: static;
    top: auto;
    left: auto;
    visibility: visible;
  }

  @media (min-width: 1000px) {
    grid-column-start: c1;
    grid-column-end: c2;
    grid-row-start: r0;
    grid-row-end: r1;
    font-size: 8em;
    padding-left: 20px;
    position: static;
    top: auto;
    left: auto;
    visibility: visible;
  }
`

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;

  @media (min-width: 600px) {
    display: inline-grid;
    grid-template-columns: [c0] 250px [c1] 250px [c2];
    grid-template-rows: [r0] minmax(210px, auto) [r1] 200px [r2];
    align-items: normal;
    padding-left: 1em;
    padding-top: 0em;
    margin-bottom: 1.5em;
    margin-top: 0;
  }

  @media (min-width: 1000px) {
    display: inline-grid;
    grid-template-columns: [c0] 250px [c1] 500px [c2];
    grid-template-rows: [r0] 240px [r1] 120px [r2];
    padding-left: 1.5em;
    margin: 1em 8em;
  }
`
const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column-start: c0;
  grid-column-end: c1;
  grid-row-start: r1;
  grid-row-end: r2;

  @media (min-width: 600px) {
    grid-column-start: c0;
    grid-column-end: c1;
    grid-row-start: r1;
    grid-row-end: r2;
  }

  @media (min-width: 1000px) {
    margin-top: 25px;
    grid-column-start: c0;
    grid-column-end: c1;
    grid-row-start: r0;
    grid-row-end: r1;
  }
`
const Picture = styled(GatsbyImage)``
const Info = styled.p`
  display: flex;
  flex-direction: column;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.15;
  font-size: 1em;
  align-items: center;
  grid-column-start: c0;
  grid-column-end: c1;
  grid-row-start: r2;
  grid-row-end: r3;

  @media (min-width: 600px) {
    grid-column-start: c1;
    grid-column-end: c2;
    grid-row-start: r1;
    grid-row-end: r2;
    align-items: normal;
  }

  @media (min-width: 1000px) {
    letter-spacing: 0.15;
    font-size: 16px;
    grid-column-start: c0;
    grid-column-end: c1;
    grid-row-start: r1;
    grid-row-end: r2;
    align-items: center;
    margin-top: 0.5em;
  }
`

const Quote = styled.h3`
  color: ${SB_NAVY};
  font-style: italic;
  font-family: Brandon;
  font-weight: 200;
  font-size: 1.5em;
  display: flex;
  padding-top: 0px;
  margin-top: 0px;
  text-align: center;
  grid-column-start: c0;
  grid-column-end: c1;
  grid-row-start: r0;
  grid-row-end: r1;
  position: relative;

  @media (min-width: 600px) {
    grid-column-start: c0;
    grid-column-end: c2;
    grid-row-start: r0;
    grid-row-end: r1;
    padding-top: 5px;
    padding-left: 15px;
    padding-top: 42px;
    text-align: left;
    position: static;
  }

  @media (min-width: 1000px) {
    font-size: 1.5em;
    font-weight: 200;
    padding-top: 43px;
    padding-left: 45px;
    grid-column-start: c1;
    grid-column-end: c2;
    grid-row-start: r0;
    grid-row-end: r2;
    text-align: left;
    position: static;
  }
`

const Name = styled.span`
  font-weight: 500;
  font-size: 18px;
`

const SectionLine = styled.span`
  color: ${SB_ORANGE};
  border-top: 3px solid;
  margin-top: 0em;
  margin-bottom: 0em;
  display: grid;
  content: none;
`

const Testimonial = ({ quote, member, title, semester, image }) => {
  let gatsbyImage = image.childImageSharp.gatsbyImageData
  return (
    <Container>
      <Quote>{quote}</Quote>
      <DoubleQuote>“</DoubleQuote>
      <PictureContainer>
        <Picture image={gatsbyImage} />
      </PictureContainer>
      <Info>
        <Name>{member}</Name>
        <span>{title}</span>
        <span>{semester}</span>
      </Info>
    </Container>
  )
}

Testimonial.propTypes = {
  quote: PropTypes.string.isRequired,
  member: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  semester: PropTypes.string.isRequired,
  image: PropTypes.instanceOf(GatsbyImage),
}

export default Testimonial
