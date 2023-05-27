import React from "react"
import styled from "styled-components"

import { SB_NAVY } from "@colors"
import Body from "styles/components/Body"
import Section from "styles/components/Section"
import { Header } from "styles/components/Header"

import Button from "components/ApplyPage/button"

const LightBlueBackgroundSection = styled(Section)`
  background-color: rgba(128, 160, 216, 0.27);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: none;
  padding: 5em 4em;

  @media (min-width: 1000px) {
    min-height: 20vh;
    max-width: 100vw;
  }

  @media (max-width: 1100px) {
    display: block;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    padding: 2.5em;
    max-width: 100vw;
  }
`

const SectionHeader = styled(Header)`
  color: ${SB_NAVY};
  font-size: 4em;
  letter-spacing: 0.02em;
  margin-top: 0;

  @media (max-width: 600px) {
    font-size: 3em;
  }
`

const ParagraphContainer = styled.div`
  padding-bottom: 0;
  @media (min-width: 1000px) {
    grid-auto-flow: column;
    grid-column-gap: 100px;
    grid-auto-columns: 1fr;
  }
`

const TwoColumn = styled.div`
  display: grid;
  grid-row-gap: 20px;
  margin-top: 20px;

  @media (min-width: 1000px) {
    grid-auto-flow: column;
    grid-column-gap: 50px;
    grid-auto-columns: 1fr 2fr;
  }
`

const HeaderColumn = styled.div`
  @media (min-width: 1000px) {
    margin-right: 50px;
  }
`

const BodyText = styled(Body)`
  margin-bottom: 32px;
`

const Positions = ({ positions }) => {
  return (
      <LightBlueBackgroundSection>
          <TwoColumn>
            <HeaderColumn>
              <SectionHeader>Roles</SectionHeader>
              <BodyText>
                Each Sandbox team works on one project for the semester. 
                Our teams consist of developers, a project lead, and often 
                a UX designer. Here are our current positions.
              </BodyText>
              {/* <Button
                name="Join our community Slack"
                route="https://join.slack.com/t/sandboxcommunity/shared_invite/zt-1khg7tjb7-kMtYwrWgNmzQ_hdTg0S1og"
              ></Button> */}
            </HeaderColumn>
            <ParagraphContainer>{positions}</ParagraphContainer>
          </TwoColumn>
      </LightBlueBackgroundSection>
  )
}

export default Positions
