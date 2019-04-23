import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "../styles/Section"
import { Header, HeaderLineBelow } from "../styles/Header"

const BlueBackground = styled.div`
  background: #2a426b;
`
const WhiteHeader = styled(HeaderLineBelow)`
  color: white;
`
const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0px -70px;
  }
`
const OrangeHeader = styled(Header)`
  font-size: 22px;
  font-weight: 300;
  color: #fcbc80;
`
const WhiteParagraph = styled.p`
  color: white;
  line-height: 1.5;
  font-size: 20px;
`
const PaddedBlurb = styled.div`
  @media (min-width: 1000px) {
    padding: 0px 75px;
  }
`

const Mission = ({ title, principles }) => (
  <BlueBackground>
    <Section>
      <WhiteHeader>
        <span>{title}</span>
      </WhiteHeader>
      <ParagraphContainer>
        {principles.map(p => (
          <PaddedBlurb>
            <OrangeHeader>{p.title}</OrangeHeader>
            <WhiteParagraph>{p.body}</WhiteParagraph>
          </PaddedBlurb>
        ))}
      </ParagraphContainer>
    </Section>
  </BlueBackground>
)

Mission.propTypes = {
  title: PropTypes.string.isRequired,
  principles: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Mission
