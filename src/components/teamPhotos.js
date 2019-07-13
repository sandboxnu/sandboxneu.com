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
  transition: all ease-in 150ms;
`

const ProfileImgWrapper = styled.div`
  position: relative;
  width: min-content;
  margin: auto;

  &:hover .profileImg {
    filter: blur(2px) grayscale(100%);
  }

  &:hover .iconWrapper {
    display: block;
  }
`

const ProfileIcon = ({ dest, icon }) => {
  return (
    <a href={dest} target="_blank">
      <StyledIcon icon={icon} color={SB_NAVY} />
    </a>
  )
}

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.color};
  font-size: 20px;
  margin: 0rem 0.5rem 0rem 0.5rem;
`

const IconWrapper = styled.div`
  display: flex;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  filter: none;
  justify-content: center;
  transition: all ease-in 2s;
`

const Profile = ({ member, percent }) => {
  return (
    <ProfileWrapper percent={percent}>
      <ProfileImgWrapper>
        <ProfileImg
          className="profileImg"
          fixed={member.profileImage.childImageSharp.fixed}
          alt={member.name}
        />
        <IconWrapper className="iconWrapper">
          <ProfileIcon dest={`mailto:${member.email}`} icon={faEnvelope} />
          <ProfileIcon dest={member.linkedIn} icon={faLinkedinIn} />
        </IconWrapper>
      </ProfileImgWrapper>
      <ProfileName>{member.name}</ProfileName>
      <ProfileRole>{member.role}</ProfileRole>
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
