import React from "react"
import styled from "styled-components"

import { lightenDarkenColor } from "@colors"
import SquareLogo from "components/squareLogo"
import Body from "styles/components/Body"
import Button from "styles/components/Button"
import { capitalize } from "utils/string"

const Wrapper = styled.div`
  border-left: 6px solid ${props => props.color};
  transition: border-left 0.3s;
  padding-left: 1em;
  margin: 2em 0;
  @media (min-width: 1000px) {
    padding-left: 1.5em;
    margin: 4em 8em;
  }
`

const ContentHeaderWrapper = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 1.8em;
  margin-bottom: 0;
`

const HeaderText = styled.div`
  font-weight: 500;
`

const QualitiesHeader = styled.h2`
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  font-size: 1.8em;
  max-width: 500px;
  margin: auto;

  @media (min-width: 600px) {
    font-size: 2em;
  }
`

const QualitiesWrapper = styled.ul`
  margin: 1em auto 2em;
  padding: 0;
  max-width: 450px;
  font-size: 1.2em;
  line-height: 1.5em;

  @media (min-width: 600px) {
    font-size: 1.3em;
    padding: 0 40px;
  }
`

const QualityItem = styled.li`
  list-style-type: none;
  &:before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 3.5px;
    background-color: ${props => props.color};
    display: inline-block;
    position: relative;
    bottom: 0.15em;
    right: 0.4em;
    transition: background-color 0.3s;
  }
`

const Quality = styled.div`
  margin: -1.5em 0 0 0.5em;
`

const ApplyButtonWrapper = styled.div`
  text-align: center;
`

const ItalicText = styled.div`
  font-style: italic;
  font-size: 1.2em;
  margin: 15px 0;
`

const ContentHeader = ({ color, roleName }) => {
  return (
    <ContentHeaderWrapper color={color}>
      <HeaderText color={color}>{capitalize(roleName)}</HeaderText>
      <SquareLogo size={"2em"} color={color} />
    </ContentHeaderWrapper>
  )
}

const QualitiesList = ({ qualities, color }) => {
  return (
    <QualitiesWrapper>
      {qualities.map(quality => {
        return (
          <QualityItem key={quality} color={lightenDarkenColor(color, -10)}>
            <Quality>{quality}</Quality>
          </QualityItem>
        )
      })}
    </QualitiesWrapper>
  )
}

const JoinContent = ({
  color,
  role,
  description,
  qualities,
  formLink,
  closeDate,
}) => {
  return (
    <>
      <Wrapper color={color}>
        <ContentHeader color={color} roleName={role} />
        <Body dangerouslySetInnerHTML={{ __html: description }} />
        <ItalicText>Application closes {closeDate}</ItalicText>
      </Wrapper>
      <QualitiesHeader>Our Ideal Candidate</QualitiesHeader>
      <QualitiesList qualities={qualities} color={color} />
      <ApplyButtonWrapper>
        <Button href={formLink}>Apply</Button>
      </ApplyButtonWrapper>
    </>
  )
}

export default JoinContent
