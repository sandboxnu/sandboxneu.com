import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SB_NAVY } from "@colors"

import { FadeInSlideUp } from "styles/animations"

const Wrapper = styled.div`
  padding-top: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &:after {
    content: "";
    flex: auto;
  }
`
const ProfileWrapper = styled.div`
  text-align: center;
  padding: 1.5em 2.5em;
  flex-basis: 100%;

  animation: ${props => FadeInSlideUp(props.percent, "15px", true)} 1s;

  @media (min-width: 600px) {
    flex-basis: 50%;
  }

  @media (min-width: 1000px) {
    flex-basis: 25%;
  }

  span {
    margin: auto;
  }
`

const ProfileName = styled.span`
  display: block;
  font-weight: 500;
  padding: 0.75em 0 0.5em;
  /* same as width of images coming in from GraphQL */
  max-width: 150px;
`

const ProfileRole = styled.span`
  display: block;
  font-weight: 500;
  font-style: italic;
  white-space: pre-line;
  /* same as width of images coming in from GraphQL */
  max-width: 150px;
`

const ProfileImg = styled(Img)`
  border-radius: 50%;
`

const ProfileIcon = ({ dest, icon }) => {
  return (
    <a href={dest}>
      <StyledIcon icon={icon} color={SB_NAVY} />
    </a>
  )
}

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.color};
  margin: 0rem 0.5rem 0rem 0.5rem;
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Profile = ({ member, percent }) => {
  console.log(member.name)
  console.log(member.email)
  return (
    <ProfileWrapper percent={percent}>
      <ProfileImg
        fixed={member.profileImage.childImageSharp.fixed}
        alt={member.name}
      />
      <ProfileName>{member.name}</ProfileName>
      <ProfileRole>{member.role}</ProfileRole>
      <IconWrapper>
        <ProfileIcon dest={`mailto:${member.email}`} icon={faEnvelope} />
        <ProfileIcon dest={member.linkedIn} icon={faLinkedinIn} />
      </IconWrapper>
    </ProfileWrapper>
  )
}

const TeamPhotos = ({ members }) => {
  return (
    <Wrapper>
      {members.map((member, i) => {
        return (
          <Profile
            member={member}
            key={member.name}
            percent={i / members.length}
          />
        )
      })}
    </Wrapper>
  )
}

export default TeamPhotos
