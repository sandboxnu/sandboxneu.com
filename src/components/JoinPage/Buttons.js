import React from "react"
import styled, { css } from "styled-components"

import { SB_NAVY, SB_ORANGE } from "@colors"
import { ROLE_COLOR_MAPPING } from "pages/join"

const ButtonContainer = styled.div`
  margin: 2.7em auto 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 10em;

  @media (min-width: 360px) {
    flex-direction: row;
  }
`

const StyledButton = styled.button`
  text-transform: uppercase;
  line-spacing: 0.15em;
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.selected ? "#FFF" : SB_NAVY)};
  background-color: ${props => (props.selected ? SB_NAVY : SB_ORANGE)};
  border: 2px solid ${SB_NAVY};
  min-width: 8em;
  padding: 10px 4px;

  :not(:last-child) {
    border-bottom-width: 0;
  }
  @media (min-width: 360px) {
    border-bottom-width: 2px !important;
    :not(:last-child) {
      border-right-width: 0;
    }
  }

  ${props =>
    !props.selected &&
    css`
      cursor: pointer;
    `}
`

const Button = ({ name, color, selected, setSelectedRole }) => {
  const onClick = () => setSelectedRole(name)
  return (
    <StyledButton color={color} selected={selected} onClick={onClick}>
      {name}
    </StyledButton>
  )
}

const Buttons = ({ roles, selectedRole, setSelectedRole }) => {
  return (
    <ButtonContainer>
      {roles.map(role => {
        return (
          <Button
            name={role}
            selected={role === selectedRole}
            color={ROLE_COLOR_MAPPING[role]}
            setSelectedRole={setSelectedRole}
          />
        )
      })}
    </ButtonContainer>
  )
}

export default Buttons
