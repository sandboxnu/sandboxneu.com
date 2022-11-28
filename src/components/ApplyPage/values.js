import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SB_SALMON, SB_NAVY } from "@colors"
import Section from "styles/components/Section"
import { Header } from "styles/components/Header"

const SalmonHeader = styled(Header)`
  font-size: 1.7em;
  font-weight: 600;
  color: ${SB_SALMON};
  font-family: Montserrat;
`
const BlueParagraph = styled.p`
  color: ${SB_NAVY};
  line-height: 1.5;
  font-size: 20px;
  margin-bottom: 0px;
`
const ParagraphContainer = styled.div`
  display: grid;
  grid-row-gap: 20px;
  margin-top: 20px;
  margin-bottom: 80px;

  @media (min-width: 1000px) {
    grid-auto-flow: column;
    grid-column-gap: 100px;
    grid-auto-columns: 1fr;
    margin-bottom: 70px;
  }
`

const Heading = styled.h1`
  font-style: italic;
  font-stretch: expanded;
  text-align: left;
  font-weight: 600;
  font-size: 4em;
  color: ${SB_NAVY};
  text-transform: uppercase;
  font-family: Montserrat;
  margin-top: 70px;

  @media (max-width: 600px) {
    font-size: 3em;
    margin-bottom: 0.5em;
  }
`

const PadlessSection = styled(Section)`
  padding: 0 4em 0 4em;

  @media (min-width: 1000px) {
    max-width: 100vw;
  }

  @media (max-width: 1100px) {
    display: block;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    padding: 0em 2.5em 1em 2.5em;
  }
`

const Values = ({ title, principles }) => (
  <PadlessSection>
    <Heading>our values</Heading>
    <ParagraphContainer>
      {principles.map(p => (
        <div key={p.title}>
          <SalmonHeader>{p.title}</SalmonHeader>
          <BlueParagraph>{p.body}</BlueParagraph>
        </div>
      ))}
    </ParagraphContainer>
  </PadlessSection>
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
