import React from "react"
import styled from "styled-components"

import SquareLogo from "components/squareLogo"
import Section from "styles/Section"
import { capitalize } from "utils/string"

const JoinSection = styled(Section)`
  padding-top: 2em;
`

const ContentHeaderWrapper = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 2em;
  border-left: 6px solid ${props => props.color};
  transition: border-left 0.3s;
`

const HeaderText = styled.div`
  font-weight: 500;
  margin-left: 1em;
`

const ContentHeader = ({ color, roleName }) => {
  return (
    <ContentHeaderWrapper color={color}>
      <HeaderText color={color}>{capitalize(roleName)}</HeaderText>
      <SquareLogo size={"2em"} color={color} />
    </ContentHeaderWrapper>
  )
}

const ContentBody = styled.p``

const JoinContent = ({ color, role, description }) => {
  return (
    <JoinSection>
      <ContentHeader color={color} roleName={role} />
      <ContentBody description={description} />
    </JoinSection>
  )
}

export default JoinContent
