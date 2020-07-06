import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SB_NAVY_RGBA, SB_ORANGE } from "@colors"

const MainMarketingContainer = styled.div`
  height: 300px;
  width: 350px;
  background: ${SB_NAVY_RGBA(0.75)};
  display: inline-block;
  padding: 48px 48px 48px 16px;
`

const ContentContainer = styled.div`
  &:first-child {
    margin-bottom: 48px;
  }
`

const ContentHeader = styled.div`
  font-family: Montserrat;
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: white;
`

const EventText = styled.span`
  font-family: Open Sans;
  font-size: 18px;
  line-height: 25px;
  color: ${SB_ORANGE};
  display: inline-block;
`

const PostLink = styled.a`
  font-family: Open Sans;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  color: ${SB_ORANGE};
`

const Marketing = ({ event, post }) => {
  return (
    <MainMarketingContainer>
      {event && (
        <ContentContainer>
          <ContentHeader>UPCOMING EVENTS</ContentHeader>
          <EventText>{`${event.date} | ${event.time} | ${
            event.location
          }`}</EventText>
          <EventText>{event.title}</EventText>
        </ContentContainer>
      )}
      {post && (
        <ContentContainer>
          <ContentHeader>ON THE BLOG</ContentHeader>
          <PostLink href={post.url}>{`${post.title} by ${
            post.author
          }`}</PostLink>
        </ContentContainer>
      )}
    </MainMarketingContainer>
  )
}

Marketing.propTypes = {
  event: PropTypes.exact({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  post: PropTypes.exact({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
}

export default Marketing
