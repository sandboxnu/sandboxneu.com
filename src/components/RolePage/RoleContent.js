import React from "react"
import styled from "styled-components"

import { SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"
import { lightenDarkenColor } from "@colors"
import Body from "styles/components/Body"
import Button from "styles/components/Button"
import Testimonial from "../ApplyPage/testimonial"
import { capitalize } from "utils/string"

const Wrapper = styled.div`
  border-left: 3px solid ${props => props.color};
  transition: border-left 0.3s;
  padding-left: 1em;
  margin: 2em 0;
  @media (min-width: 1000px) {
    padding-left: 1.5em;
    margin: 4em 8em;
  }
`

const StyledBody = styled(Body)`
  a {
    color: ${SB_NAVY};
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
  margin-left: 50px;

  @media (min-width: 600px) {
    font-size: 1.3em;
    padding: 0 40px;
    margin: 1em auto 2em;
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

const ApplicationClosedMessage = styled.div`
  font-size: 1.3em;
  text-align: center;
  line-height: 1.5;
  margin: 1em auto;
`

const ContentHeader = ({ color, roleName }) => {
  return (
    <ContentHeaderWrapper color={color}>
      <HeaderText color={color}>{capitalize(roleName)}</HeaderText>
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

const RoleContent = ({
  color,
  role,
  description,
  qualities,
  formLink,
  closeDate,
  quote,
  member,
  title,
  semester,
  image,
}) => {
  return (
    <>
      <Wrapper color={color}>
        <ContentHeader color={color} roleName={role} />
        <StyledBody dangerouslySetInnerHTML={{ __html: description }} />
        {closeDate && <ItalicText>Application closes {closeDate}</ItalicText>}
      </Wrapper>
      <Testimonial
        quote={quote}
        member={member}
        title={title}
        semester={semester}
        image={image}
      />
      <QualitiesHeader>Our Ideal Candidate</QualitiesHeader>
      <QualitiesList qualities={qualities} color={color} />
      {!closeDate && (
        <ApplicationClosedMessage>
          <strong>Application is currently closed.</strong>
          <br />
          Sign up for our mailing list to be notified when it reopens.
        </ApplicationClosedMessage>
      )}
      <ApplyButtonWrapper>
        <Button href={formLink}>{closeDate ? "Apply" : "Sign Up"}</Button>
      </ApplyButtonWrapper>
    </>
  )
}

export default RoleContent
