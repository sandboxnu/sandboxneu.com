import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"

import Body from "styles/components/Body"
import {
  HeaderLineBelow,
  HeaderLineLeft,
  HeaderLineRight,
} from "styles/components/Header"
import Section from "styles/components/Section"

// SVG gets inlined as base64. This is ok because it's only 3 kb
const Mobile = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
`

const Desktop = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 400px;
    grid-column-gap: 40px;
  }
`

const ShadowImg = styled(Img)`
  box-shadow: 1px 1px 13px rgba(0, 0, 0, 0.25);
  margin: 0px 10px;
`

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0px;
`

const Who = ({ img1, img2, img3, title1, p1, title2, p2 }) => {
  return (
    <Section>
      <Mobile>
        <HeaderLineBelow>{title1}</HeaderLineBelow>
        <Body>{p1}</Body>
        <br />
        <ShadowImg fluid={img1.childImageSharp.fluid} />
        <HeaderLineBelow>
          <span>{title2}</span>
        </HeaderLineBelow>
        <Body>{p2}</Body>
        <br />
        <ShadowImg fluid={img2.childImageSharp.fluid} />
      </Mobile>
      <Desktop>
        <div>
          <HeaderLineRight>{title1}</HeaderLineRight>
          <Body>{p1}</Body>
          <br />
          <HeaderLineLeft>{title2}</HeaderLineLeft>
          <Body>{p2}</Body>
        </div>
        <ImgContainer>
          <ShadowImg fluid={img1.childImageSharp.fluid} />
          <ShadowImg fluid={img2.childImageSharp.fluid} />
          <ShadowImg fluid={img3.childImageSharp.fluid} />
        </ImgContainer>
      </Desktop>
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
