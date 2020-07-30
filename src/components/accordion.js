import React, { useState } from "react"
import styled from "styled-components"
import { SB_Light_ORANGE, SB_LIGHT_YELLOW } from "@colors"

const Question = styled.span`
  color: #2a426b;
  font-family: Andale Mono;
  font-size: 20px;
  padding-bottom: 14px;
`

const Answer = styled.span`
  color: #1b2432;
  font-family: Open Sans;
  font-size: 17px;
`

const StyledAccordion = styled.div`
  background-color: ${SB_LIGHT_YELLOW};
  border: solid 1px #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  text-align: left;
  padding: 18px;
  width: 100%;

  :hover {
    background-color: ${SB_Light_ORANGE};
  }
`

const StyledPanel = styled.div`
  padding: 15px 18px;
  display: ${props => props.display};
  background-color: white;
  overflow: hidden;
`

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <StyledAccordion onClick={() => setIsOpen(!isOpen)}>
        <Question>{question}</Question>
      </StyledAccordion>
      <StyledPanel display={isOpen ? "block" : "None"}>
        <Answer>{answer}</Answer>
      </StyledPanel>
    </>
  )
}

export default Accordion
