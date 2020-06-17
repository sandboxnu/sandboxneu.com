import React from "react"
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
    display: block;
  }
`

const Who = ({ title1, p1, title2, p2 }) => {
  return (
    <Section>
      <Mobile>
        <HeaderLineBelow>{title1}</HeaderLineBelow>
        <Body>{p1}</Body>
        <br />
        <HeaderLineBelow>
          <span>{title2}</span>
        </HeaderLineBelow>
        <Body>{p2}</Body>
        <br />
      </Mobile>
      <Desktop>
        <div>
          <HeaderLineRight>{title1}</HeaderLineRight>
          <Body>{p1}</Body>
          <br />
          <HeaderLineLeft>{title2}</HeaderLineLeft>
          <Body>{p2}</Body>
        </div>
      </Desktop>
    </Section>
  )
}

Who.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  p1: PropTypes.string.isRequired,
  p2: PropTypes.string.isRequired,
}

export default Who
