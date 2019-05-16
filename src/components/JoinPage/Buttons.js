import React from "react"
import styled from "styled-components"

import { SB_ORANGE, SB_NAVY } from "@colors"

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledButton = styled.button`
  text-transform: uppercase;
  line-spacing: 0.15em;
  font-size: 14px;
  color: ${SB_NAVY};
  background-color: ${SB_ORANGE};
  border: 2px solid ${SB_NAVY};
  width: 5em;
  padding: 8px 4px;

  :not(:last-child) {
    border-right-width: 0;
  }
`

const Button = ({ title, color, expanded }) => {
  return <StyledButton expanded={expanded}>{title}</StyledButton>
}

const Buttons = ({ roles }) => {
  return (
    <ButtonContainer>
      {roles.map(role => {
        return <Button title={role} />
      })}
    </ButtonContainer>
  )
}

export default Buttons
