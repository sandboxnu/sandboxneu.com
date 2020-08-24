import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"

import { SB_ORANGE } from "@colors"
import Marketing from "components/IndexPage/marketing"

import EmailSubscription from "../emailSubscription"

import { SB_SALMON_RGBA } from "@colors"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const fadeInSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 10px);
  }

  50% {
    opacity: 0;
    transform: translate(0, 10px);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`

const Title = styled.h1`
  opacity: 1;
  color: #fff;
  font-family: Montserrat;
  font-size: 2.5em;
  font-style: italic;
  @media (min-width: 1000px) {
    font-size: 3.5em;
  }
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
  text-align: left;
  text-shadow: 0 0 7px #111;
  animation: ${fadeInSlideUp} 1.75s;
`

const Subtitle = styled.h1`
  opacity: 1;
  color: #fff;
  font-size: 1em;
  @media (min-width: 1000px) {
    font-size: 1.5em;
  }
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: left;
  text-shadow: 0 0 7px #111;
  animation: ${fadeInSlideUp} 1.75s;
`

const EmailText = styled.h1`
  opacity: 1;
  color: #fff;
  font-family: Montserrat;
  font-size: 1.5em;
  font-style: italic;
  @media (min-width: 1000px) {
    font-size: 2em;
  }
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
  text-align: left;
  text-shadow: 0 0 7px #111;
`

const IntroductionContainer = styled.div`
  max-width: 400px;
  @media (max-width: 900px) {
    width: 100%;
  }
`

const EmailContainer = styled.div`
  animation: ${fadeInSlideUp} 1.75s;
`

const MarketingContainer = styled.div`
  animation: ${fadeInSlideUp} 1.75s;
  padding-top: 2em;
`

const SectionContent = styled.section`
  max-width: 100%;
`

const Section = styled(SectionContent)`
  display: flex;
  flex-direction: row;
  margin-left: 100px;
  justify-content: space-between;
  padding: 5em 0 5em 2em;

  @media (max-width: 900px) {
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding-right: 2em;
  }
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
`

const StyledFA = styled(FontAwesomeIcon)`
  display: block;
  margin: auto;
  position: relative;
  max-width: ${props => props.csssize};
  transition: top 0.3s, color 0.3s;
  animation: ${fadeIn} 2.25s;
  top: 0px;
  color: ${props => props.color};
  &:hover {
    top: 10px;
    cursor: pointer;
    color: ${SB_ORANGE};
  }
`

const Arrow = ({ color, scale }) => {
  const scrollToWhoSection = () => {
    window.scrollBy({
      top: document.documentElement.clientHeight,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <StyledFA
      icon={faArrowDown}
      size={scale + "x"} // to account for FA using size '3x' to represent '3em'
      csssize={scale + "em"} // this two-sizing-props weirdness is a workaround for a FA bug
      onClick={scrollToWhoSection}
      color={color}
    />
  )
}

const Hero = ({ title, background }) => (
  <StaticQuery
    query={graphql`
      query Marketing {
        allMarketingJson {
          edges {
            node {
              event {
                date
                time
                location
                title
              }
              post {
                title
                author
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledBackgroundImage
        fluid={background.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <Section>
          <IntroductionContainer>
            <Title>SANDBOX</Title>
            <Subtitle>{title}</Subtitle>
            <EmailContainer>
              <br />
              <EmailText>LEARN MORE</EmailText>
              <EmailSubscription />
            </EmailContainer>
          </IntroductionContainer>
          <MarketingContainer>
            <Marketing {...data.allMarketingJson.edges[0].node} />
          </MarketingContainer>
        </Section>
        <Arrow color="#fff" scale="3" />
      </StyledBackgroundImage>
    )}
  />
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.object.isRequired,
}

export default Hero
