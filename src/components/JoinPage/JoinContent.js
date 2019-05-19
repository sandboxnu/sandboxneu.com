import React from "react"
import styled from "styled-components"

import SquareLogo from "components/squareLogo"
import { capitalize } from "utils/string"

const Wrapper = styled.div`
  border-left: 6px solid ${props => props.color};
  transition: border-left 0.3s;
  padding-left: 1em;
  @media (min-width: 1000px) {
    margin: 4em 8em;
  }
`

const ContentHeaderWrapper = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 2em;
`

const HeaderText = styled.div`
  font-weight: 500;
`

const ContentHeader = ({ color, roleName }) => {
  return (
    <ContentHeaderWrapper color={color}>
      <HeaderText color={color}>{capitalize(roleName)}</HeaderText>
      <SquareLogo size={"2em"} color={color} />
    </ContentHeaderWrapper>
  )
}

const ContentBody = styled.div`
  font-size: 1.2em;
  @media (min-width: 600px) {
    font-size: 1.3em;
  }
`

const JoinContent = ({ color, role, description }) => {
  return (
      <Wrapper color={color}>
        <ContentHeader color={color} roleName={role} />
        <ContentBody dangerouslySetInnerHTML={{ __html: description }} />
      </Wrapper>
  )
}

export default JoinContent
