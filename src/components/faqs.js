import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "styles/components/Section"
import { SB_Light_ORANGE } from "@colors"

const Title = styled.div`
  color: ${SB_Light_ORANGE};
  font-family: Brandon;
  font-weight: 600;
  font-size: 50px;
  font-style: italic;
  margin-bottom: 25px;
`

const Question = styled.span`
  color: #2a426b;
  font-family: Andale Mono;
  font-size: 17px;
  padding-bottom: 14px;
`

const SingleFAQ = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`

const Answer = styled.span`
  color: #1b2432;
  font-family: Open Sans;
  font-size: 15px;
`

const FAQs = ({ faqs }) => (
  <Section>
    <Title>FAQ</Title>
    {faqs.map(f => (
      <SingleFAQ key={f.question}>
        <Question>{f.question}</Question>
        <Answer>{f.answer}</Answer>
      </SingleFAQ>
    ))}
  </Section>
)

FAQs.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.exact({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default FAQs
