import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SB_NAVY, SB_ORANGE, SB_SALMON } from "@colors"
import _ from "lodash"

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
  padding: 0em 0 0.5em;

  /* same as width of images coming in from GraphQL */
  max-width: 150px;
`

const ProfileImg = styled(Img)`
  picture img {
    transition: filter ease-in 200ms !important;
  }
`

const ProfileImgWrapper = styled.div`
  position: relative;

  @media (min-width: 1000px) {
    &:hover img {
      filter: blur(1.5px);
    }
    &:hover .web {
      display: block;
    }
  }
`

const ProfileIcon = ({ dest, icon }) => {
  return (
    <a href={dest} target="_blank" rel="noopener noreferrer">
      <StyledIcon icon={icon} color={"white"} mobileColor={SB_NAVY} />
    </a>
  )
}

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.mobileColor};
  margin: 0.3rem 0.5rem 0rem 0.5rem;
  transition: color 150ms;

  font-size: 1rem;
  @media (min-width: 1000px) {
    font-size: 1.5rem;
    color: ${props => props.color};

    &:hover {
      color: ${SB_ORANGE};
    }
  }
`

const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* same as width of images coming in from GraphQL */
  max-width: 150px;
  margin: auto;

  &.web {
    display: none;
  }

  @media (min-width: 1000px) {
    &.web {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
    }
    &.mobile {
      display: none;
    }
  }
`

const StyledTeamName = styled.h1`
  font-size: 2.5em;
  font-style: italic;
  color: ${SB_SALMON};
  margin-left: 50;
  text-align: center;

  @media (min-width: 1000px) {
    margin-left: 5%;
    text-align: left;
  }
`

const TeamNameWrapper = styled.div`
  @media (max-width: 999px) {
    display: flex;
    justify-content: center;
  }
`

const TeamMembersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 999px) {
    justify-content: space-evenly;
  }
`

const Profile = ({ member, percent }) => {
  const { name, team, socialMedia } = member
  const { email, linkedIn, portfolio } = socialMedia
  const { name: teamName, role } = team
  console.log(portfolio)
  const iconContent = (
    <>
      <ProfileIcon dest={`mailto:${email}`} icon={faEnvelope} />
      <ProfileIcon dest={linkedIn} icon={faLinkedinIn} />
      {portfolio ? <ProfileIcon dest={portfolio} icon={faLink} /> : null}
    </>
  )
  return (
    <ProfileWrapper percent={percent}>
      <ProfileImgWrapper>
        <ProfileImg
          style={{ overflow: "visible" }}
          loading="eager"
          fixed={member.profileImage.childImageSharp.fixed}
          alt={name}
        />
        <IconWrapper className="iconWrapper web">{iconContent}</IconWrapper>
      </ProfileImgWrapper>
      <ProfileName>{name}</ProfileName>
      <ProfileRole>{role}</ProfileRole>
      <IconWrapper className="iconWrapper mobile">{iconContent}</IconWrapper>
    </ProfileWrapper>
  )
}

const TeamName = ({ title }) => {
  return (
    <TeamNameWrapper>
      <StyledTeamName>{title.toUpperCase()}</StyledTeamName>
    </TeamNameWrapper>
  )
}

const Section = ({ teamMembers, title, length }) => {
  return (
    <div style={{ width: "100%" }}>
      <TeamName title={title} />
      <TeamMembersWrapper>
        {teamMembers.map((member, i) => {
          return (
            <Profile member={member} key={member.name} percent={i / length} />
          )
        })}
      </TeamMembersWrapper>
    </div>
  )
}

const groupMembers = members => {
  const grouped = _.groupBy(members, "team.name")
  return grouped
}

const TeamPhotos = ({ members }) => {
  const teams = groupMembers(members)
  return (
    <Wrapper>
      {Object.keys(teams).map(group => {
        return (
          <Section
            teamMembers={teams[group]}
            title={group}
            length={members.length}
          />
        )
      })}
    </Wrapper>
  )
}

export default TeamPhotos
