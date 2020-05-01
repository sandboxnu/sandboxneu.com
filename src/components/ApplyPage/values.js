import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"
import Section from "styles/components/Section"
import { HeaderLine, Header } from "styles/components/Header"

const OrangeHeader = styled(Header)`
  font-size: 1.7em;
  font-weight: 500;
  color: ${SB_ORANGE};
`
const BlueParagraph = styled.p`
  color: ${SB_NAVY};
  line-height: 1.5;
  font-size: 1.3em;
`
const ParagraphContainer = styled.div`
  display: grid;
  grid-row-gap: 20px;
  margin-top: 40px;

  @media (min-width: 1000px) {
    grid-auto-flow: column;
    grid-column-gap: 100px;
    grid-auto-columns: 1fr;
  }
`

const SectionLine = styled(HeaderLine)`
  color: ${SB_ORANGE};
  border-top: 3px solid;
  margin-top: 1em;
`

const PadLessSection = styled(Section)`
  padding: 1em 2em;
  @media (min-width: 1000px) {
    padding-bottom: 0em;
  }
`
const TestHeader = styled.h1`
  font-style: italic;
  color: #e8f0ff;
  font-stretch: expanded;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;
  font-size: 12.5em;
  margin-bottom: 0.5em;
  position: absolute;
  top: 400px;
  margin-top: 29px;
`

const Heading = styled.h1`
  font-style: italic;
  font-stretch: expanded;
  letter-spacing: 0.15em;
  text-align: center;
  font-weight: 600;
  font-size: 2em;
  color: ${SB_NAVY};
  text-transform: uppercase;

  @media (min-width: 1000px) {
    font-size: 3em;
    margin-bottom: 1em;
  }
`

const Values = ({ title, principles }) => (
  <PadLessSection>
    <SectionLine />
    <Heading>our values</Heading>
    <ParagraphContainer>
      {principles.map(p => (
        <div key={p.title}>
          <OrangeHeader>{p.title}</OrangeHeader>
          <BlueParagraph>{p.body}</BlueParagraph>
        </div>
      ))}
    </ParagraphContainer>
    <SectionLine />
  </PadLessSection>
)

Values.propTypes = {
  title: PropTypes.string.isRequired,
  principles: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Values
