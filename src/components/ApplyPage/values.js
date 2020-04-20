import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"
import Section from "styles/components/Section"
import { HeaderLine, Header } from "styles/components/Header"

const OrangeHeader = styled(Header)`
  font-size: 1.5em;
  font-weight: 500;
  color: ${SB_ORANGE};
`
const BlueParagraph = styled.p`
  color: ${SB_NAVY};
  line-height: 1.5;
  font-size: 1.25em;
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

const SectionLine = styled(HeaderLine)`
  color: ${SB_ORANGE};
  border-top: 3px solid;
  margin-top: 0em;
  @media (min-width: 1000px) {
    margin-top: 1em;
  }
`

const PadLessSection = styled(Section)`
  padding: 1em 2em;
`

const Values = ({ title, principles }) => (
  <PadLessSection>
    <SectionLine></SectionLine>
    <ParagraphContainer>
      {principles.map(p => (
        <div key={p.title}>
          <OrangeHeader>{p.title}</OrangeHeader>
          <BlueParagraph>{p.body}</BlueParagraph>
        </div>
      ))}
    </ParagraphContainer>
    <SectionLine></SectionLine>
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
