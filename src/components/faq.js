import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "styles/components/Section"

const Title = styled.span``

const Question = styled.span``

const SingleFAQ = styled.div``

const Answer = styled.span``

const FAQ = ({ faqs }) => (
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

FAQ.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.exact({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default FAQ
