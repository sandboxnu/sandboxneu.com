import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "styles/components/Section"
import { SB_NAVY } from "@colors"

import InfoCard from "components/AboutPage/infoCard"

const Title = styled.div`
  color: ${SB_NAVY};
  display: flex;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 40px;
  font-style: italic;
  justify-content: center;
  margin-bottom: 40px;
  text-transform: uppercase;
  @media (max-width: 600px) {
    justify-content: center;
    padding: 0;
  }
`

const Wrapper = styled.div`
  padding: 0 150px 0 150px;
  @media (max-width: 1000px) {
    padding: 0;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: -3em 5em 5em 5em;

  // mobile styling
  @media (max-width: 600px) {
    margin: -5em 0 0 0;
  }

  p {
    &:not(:last-child) {
      margin-bottom: 3em;
    }
  }

  > div {
    &:not(:last-child) {
      margin-right: 2em;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    > div {
      &:not(:last-child) {
        margin-right: unset;
        margin-bottom: 3em;
      }
      :last-child {
        margin-bottom: 3em;
      }
    }
  }
`

const GetInvolved = ({ header, info }) => {
  return (
    <>
      <Section>
        <Wrapper>
          <Title>{header}</Title>
        </Wrapper>
      </Section>
      <InfoContainer>
        {info.map(i => {
          return (
            <InfoCard
              title={i.title}
              body={i.body}
              linkText={i.linkText}
              linkSrc={i.linkSrc}
              action={i.action}
              actionSrc={i.actionSrc}
              conclusion={i.conclusion}
            />
          )
        })}
      </InfoContainer>
    </>
  )
}

GetInvolved.propTypes = {
  header: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      linkSrc: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      actionSrc: PropTypes.string.isRequired,
      conclusion: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default GetInvolved
