import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import Section from "styles/Section"

const TeamPhotosSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProfileImg = styled(Img)`
  border-radius: 50%;
  padding-right: 4em;
`

const TeamPhotos = ({ members }) => {
  return (
    <TeamPhotosSection>
      {members.map(member => {
        return (
          <ProfileImg
            fixed={member.profileImage.childImageSharp.fixed}
            alt={member.name}
          />
        )
      })}
    </TeamPhotosSection>
  )
}

export default TeamPhotos
