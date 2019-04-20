import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "../styles/Section"
import Header from "../styles/Header"
import Img from "gatsby-image"
import shovel from "../images/shovel.svg"

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

const ShovelBackground = styled.div`
  background-image: url(${shovel});
  background-position: 50% 100px;
  background-size: 80%;
  background-repeat: no-repeat;
  @media (min-width: 1000px) {
    background-position: 90% 0;
    background-size: contain;
    padding-bottom: 200px;
    margin-bottom: -200px;
  }
`

const HeaderLine = styled(Header)`
  display: flex;
  align-items: center;
  text-align: center;
  &:after,
  &:before {
    content: "";
    border-top: 2px solid #fcbc80;
  }
`

const HeaderLineRight = styled(HeaderLine)`
  & :after {
    flex-grow: 1;
    margin-left: 10px;
  }
`

const HeaderLineLeft = styled(HeaderLine)`
  & :before {
    flex-grow: 1;
    margin-right: 10px;
  }
`

const HeaderLineBelow = styled(HeaderLine)`
  flex-direction: column;
  & :after {
    margin-top: 20px;
    width: 80%;
    max-width: 200px;
  }
`

const Body = styled.div`
  font-size: 1.25em;
  line-height: 1.5;
  margin-bottom: 20px;
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
    <ShovelBackground>
      <Section>
        <Mobile>
          <HeaderLineBelow>{title1}</HeaderLineBelow>
          <Body>{p1}</Body>
          <ShadowImg fluid={img1.childImageSharp.fluid} />
          <HeaderLineBelow>
            <span>{title2}</span>
          </HeaderLineBelow>
          <Body>{p2}</Body>
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
    </ShovelBackground>
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
