import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "styles/components/Section"
import Card from "components/AboutPage/card"

import { SB_NAVY, SB_ORANGE } from "@colors"

const Title = styled.div`
  color: ${SB_NAVY};
  display: flex;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 50px;
  font-style: italic;
  margin-bottom: 40px;
  text-transform: uppercase;
  @media (max-width: 600px) {
    justify-content: center;
    padding: 0;
  }
`

const Text = styled.span`
  color: ${SB_NAVY};
  font-weight: 400;
  font-size: 28px;
  font-style: italic;
  font-family: Montserrat;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`

const SpecialText = styled.span`
  color: ${SB_ORANGE};
  font-weight: 600;
  font-family: Montserrat;
  @media (max-width: 600px) {
    font-size: 20px;
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

const Values = ({ header, principles }) => {
  return (
    <Section>
      <Wrapper>
        <Title>{header}</Title>
        <Text>
          Sandbox is Northeastern's{" "}
          <SpecialText>student-led software consultancy</SpecialText> building
          software for Northeastern clients. We work closely with clients across
          northeastern to help them{" "}
          <SpecialText>best leverage computation</SpecialText>.
        </Text>
      </Wrapper>
      <ValuesContainer>
        {principles.map(p => {
          return <Card title={p.title} body={p.body} />
        })}
      </ValuesContainer>
    </Section>
  )
}

Values.propTypes = {
  header: PropTypes.string.isRequired,
  principles: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Values
