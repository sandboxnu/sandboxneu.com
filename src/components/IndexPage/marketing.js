import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SB_NAVY_RGBA, SB_ORANGE } from "@colors"

const MainMarketingContainer = styled.div`
  height: fit-content;
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

const TextTitle = styled(EventText)`
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`

const PostLink = styled.a`
  font-family: Open Sans;
  font-size: 18px;
  line-height: 25px;
  color: ${SB_ORANGE};
  text-decoration: none;
`

const Marketing = ({ event, post, youtube }) => {
  return (
    <MainMarketingContainer>
      {event.showEvent && (
        <ContentContainer>
          <ContentHeader>UPCOMING EVENTS</ContentHeader>
          <EventText>{`${event.date} | ${event.time} | ${
            event.location
          }`}</EventText>
          <TextTitle>{event.title}</TextTitle>
        </ContentContainer>
      )}
      {youtube && (
        <ContentContainer>
          <ContentHeader>ON OUR YOUTUBE</ContentHeader>
          <PostLink href={youtube.url}>
            <TextTitle>{youtube.title}</TextTitle>
          </PostLink>
        </ContentContainer>
      )}
      {post && (
        <ContentContainer>
          <ContentHeader>ON THE BLOG</ContentHeader>
          <PostLink href={post.url}>
            <TextTitle>{post.title}</TextTitle>
            {` by ${post.author}`}
          </PostLink>
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
  youtube: PropTypes.exact({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
}

export default Marketing
