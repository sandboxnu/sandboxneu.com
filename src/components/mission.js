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
  display: grid;
  grid-row-gap: 20px;
  @media (min-width: 1000px) {
    grid-auto-flow: column;
    grid-column-gap: 100px;
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

const Mission = ({ title, principles }) => (
  <BlueBackground>
    <Section>
      <WhiteHeader>
        <span>{title}</span>
      </WhiteHeader>
      <ParagraphContainer>
        {principles.map(p => (
          <div>
            <OrangeHeader>{p.title}</OrangeHeader>
            <WhiteParagraph>{p.body}</WhiteParagraph>
          </div>
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
