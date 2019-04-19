import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "../styles/Section"
import Header from "../styles/Header"
import Img from "gatsby-image"

const Container = styled.div`
  display: grid;
  justify-items: center;
  @media (min-width: 900px) {
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 40px;
  }
`

const HeaderLine = styled(Header)`
  position: relative;
  @media (min-width: 900px) {
    justify-self: stretch;
    display: flex;
    align-items: center;
    margin-left: -10px;
    margin-right: -10px;
    & span {
      order: ${props => (props.align === "left" ? 0 : 1)};
      margin: 0 10px;
    }
    & :after {
      flex-grow: 1;
      content: "";
      border-top: 2px solid #fcbc80;
      margin: 0 10px;
    }
  }
`

const Body = styled.div`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
  @media (min-width: 900px) {
    grid-column: 1;
  }
`

const ShadowImg = styled(Img)`
  box-shadow: 1px 1px 13px rgba(0, 0, 0, 0.25);
  margin: 30px 10px;
  justify-self: stretch;
  @media (min-width: 900px) {
    grid-column: 2;
  }
`

const Who = ({ img1, img2, img3, title1, p1, title2, p2 }) => {
  return (
    <Section>
      <Container>
        <HeaderLine align="left">
          <span>{title1}</span>
        </HeaderLine>
        <Body>{p1}</Body>
        <ShadowImg fluid={img1.childImageSharp.fluid} />
        <HeaderLine align="right">
          <span>{title2}</span>
        </HeaderLine>
        <Body>{p2}</Body>
        <ShadowImg fluid={img2.childImageSharp.fluid} />
        <ShadowImg fluid={img3.childImageSharp.fluid} />
      </Container>
    </Section>
  )
}

Who.propTypes = {
  img1: PropTypes.object.isRequired,
  img2: PropTypes.object.isRequired,
  img3: PropTypes.object.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  p1: PropTypes.string.isRequired,
  p2: PropTypes.string.isRequired,
}

export default Who
