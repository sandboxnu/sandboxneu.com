import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "styles/components/Section"
import { SB_NAVY } from "@colors"

const Title = styled.div`
  color: ${SB_NAVY};
  display: flex;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 50px;
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
  padding: 5em 150px 0 150px;
  @media (max-width: 1000px) {
    padding: 5em 0 0 0;
  }
`

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 100px 0 0 0;

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
        margin-bottom: 2em;
      }
    }
  }
`

const GetInvolved = ({ header, info }) => {
  return (
    <Section>
      <Wrapper>
        <Title>{header}</Title>
      </Wrapper>
      <ValuesContainer />
    </Section>
  )
}

GetInvolved.propTypes = {
  header: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      conclusion: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default GetInvolved
