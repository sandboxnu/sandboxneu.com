import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "styles/components/Section"

import { SB_NAVY } from "@colors"
import Accordion from "./accordion"

const Title = styled.div`
  color: ${SB_NAVY};
  font-family: Montserrat;
  font-weight: 600;
  font-size: 50px;
  font-style: italic;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
`

const FAQs = ({ faqs }) => {
  return (
    <Section>
      <Title>FAQs</Title>
      {faqs.map(f => {
        return <Accordion question={f.question} answer={f.answer} />
      })}
    </Section>
  )
}

FAQs.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.exact({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default FAQs
