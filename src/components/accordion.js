import React, { useState } from "react"
import styled from "styled-components"
import { SB_LIGHT_ORANGE, SB_ORANGE, SB_NAVY } from "@colors"

const Question = styled.span`
  color: ${SB_NAVY};
  font-family: Andale Mono;
  font-size: 1.2em;
`

const Answer = styled.span`
  color: ${SB_NAVY};
  font-family: Open Sans;
  font-size: 1.2em;
  line-height: 1.5;
  margin-right: 10px;
`

const StyledAccordion = styled.div`
  background-color: ${SB_LIGHT_ORANGE};
  border: solid 1px #fff;
  border-radius: 5px;
  cursor: pointer;
  text-align: left;
  padding: 18px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.2s ease-out;

  &:hover {
    background-color: #fff0d4;
  }

  &:after {
    color: ${SB_ORANGE};
    content: "<";
    font-size: 2.5em;
    font-weight: 700;
    transform: ${props => (props.display ? "rotate(-90deg)" : "none")};
    transition: 0.2s linear all;
    margin-left: 5px;
  }
`

const StyledPanel = styled.div`
  padding: ${props => (props.display ? "15px 18px" : "0 18px")};
  display: block;
  background-color: white;
  overflow: hidden;
  height: auto;
  max-height: ${props => (props.display ? "500px" : "0")};
  transition: all 0.2s ease-in-out;
`

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <StyledAccordion onClick={() => setIsOpen(!isOpen)} display={isOpen}>
        <Question>{question}</Question>
      </StyledAccordion>
      <StyledPanel display={isOpen}>
        <Answer>{answer}</Answer>
      </StyledPanel>
    </>
  )
}

export default Accordion
