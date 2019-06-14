import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Header, HeaderLineBelow } from "styles/components/Header"
import Section from "styles/components/Section"

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
    grid-auto-columns: 1fr;
  }
`
const OrangeHeader = styled(Header)`
  font-size: 1.5em;
  font-weight: 500;
  color: #fcbc80;
`
const WhiteParagraph = styled.p`
  color: white;
  line-height: 1.5;
  font-size: 1.25em;
`

const Mission = ({ title, principles }) => (
  <BlueBackground>
    <Section>
      <WhiteHeader>
        <span>{title}</span>
      </WhiteHeader>
      <ParagraphContainer>
        {principles.map(p => (
          <div key={p.title}>
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
