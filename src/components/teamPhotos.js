import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
  padding-top: 2em;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 6em;
  }

  &:last-child {
    justify-content: flex-start;
  }
`

const ProfileWrapper = styled.div`
  text-align: center;
`

const ProfileName = styled.span`
  display: block;
  font-weight: 500;
  margin: 0.75em 0 0.5em;
`

const ProfileRole = styled.span`
  display: block;
  font-weight: 500;
  font-style: italic;
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

const MemberRow = ({ members }) => {
  return (
    <Row>
      {members.map(member => {
        if (!member) return null
        return <Profile member={member} key={member.name} />
      })}
    </Row>
  )
}

const TeamPhotos = ({ members }) => {
  const memberRows = paginate(members, 4)
  return (
    <Wrapper>
      {memberRows.map(memberRow => {
        return <MemberRow members={memberRow} />
      })}
    </Wrapper>
  )
}

export default TeamPhotos
