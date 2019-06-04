import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
  padding-top: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &::after {
    flex: auto;
    content: "";
  }
`

const ProfileWrapper = styled.div`
  text-align: center;
  padding: 1em 2.5em;
`

const ProfileName = styled.span`
  display: block;
  font-weight: 500;
  margin: 0.75em 0 0.5em;
  /* same as width of images coming in from GraphQL */
  max-width: 150px;
`

const ProfileRole = styled.span`
  display: block;
  font-weight: 500;
  font-style: italic;
  /* same as width of images coming in from GraphQL */
  max-width: 150px;
`

const ProfileImg = styled(Img)`
  border-radius: 50%;
`

/**
 * Generates a "paged" array by grouping elements of the given array into
 * subarrays in order.
 * FIXME this can definitely be cleaned up.
 * @returns array of arrays, where each subarray is a "page" of elements
 */
const paginate = (entities, amtPerPage) => {
  const ret = []
  let entityIndex = 0
  let curPage
  while (entityIndex < entities.length) {
    curPage = []
    for (let i = 0; i < amtPerPage; i += 1) {
      curPage[i] = entities[entityIndex]
      entityIndex += 1
    }
    ret.push(curPage)
  }
  return ret
}

const Profile = ({ member }) => {
  return (
    <ProfileWrapper>
      <ProfileImg
        fixed={member.profileImage.childImageSharp.fixed}
        alt={member.name}
      />
      <ProfileName>{member.name}</ProfileName>
      <ProfileRole>{member.role}</ProfileRole>
    </ProfileWrapper>
  )
}

const TeamPhotos = ({ members }) => {
  return (
    <Wrapper>
      {members.map(member => {
        return <Profile member={member} key={member.name} />
      })}
    </Wrapper>
  )
}

export default TeamPhotos
