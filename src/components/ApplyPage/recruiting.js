import { SB_NAVY, SB_BUTTON_BLUE, SB_SALMON, SB_INK } from "@colors"
import React from "react"
import styled from "styled-components"
import Body from "styles/components/Body"
import Section from "styles/components/Section"
import { Header } from "styles/components/Header"
import RecruitingProcess from "./recruitingProcess"

const RecruitingSection = styled(Section)`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
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

const BodyText = styled(Body)`
  margin-bottom: 32px;
  max-width: 800px
`

const SalmonHeader = styled(Header)`
  font-size: 1.7em;
  font-weight: 600;
  color: ${SB_SALMON};
  font-family: Montserrat;
`

const TracksContainer = styled.div`
  display: grid;
  grid-row-gap: 20px;
  margin-top: 20px;
  margin-bottom: 80px;

  @media (min-width: 1000px) {
    grid-auto-flow: column;
    grid-column-gap: 100px;
    grid-auto-columns: 1fr;
    margin-bottom: 70px;
  }
`

const Track = styled.div`
  width: 100%;
  padding: 2em;

  :nth-of-type(3n+1) {
    background: ${SB_NAVY};
  }

  :nth-of-type(3n+2) {
    background: ${SB_INK};
  }

  :nth-of-type(3n+3) {
    background: ${SB_SALMON};
  }
`

const TrackHeader = styled.h2`
  text-transform: uppercase;
  font-size: 1.7em;
  font-weight: 600;
  margin: 0;
  color: #FFFFFF;
  font-family: Montserrat;
  font-style: italic;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`

const TrackDescription = styled(Body)`
  color: #FFFFFF;
  padding-top: 1em;
  font-size: 20px;
`

const Recruiting = () => {
  return (
    <RecruitingSection>
        <SectionHeader>How we recruit</SectionHeader>
        <SalmonHeader>The Tracks</SalmonHeader>
        <BodyText>
            At Sandbox, we use a track-based recruiting process to sort your application
            based on your degree of experience. Our objective with these tracks is 
            to give you the right challenge that best showcases your skills and make 
            sure we're evaluating your candidacy fairly.
        </BodyText>
        <TracksContainer>
          <Track>
            <TrackHeader>Catepillar</TrackHeader>
            <TrackDescription>
              For students who have completed Fundies 1 and maybe Fundies 2, might be 
              taking OOD over the summer, and don’t have an extensive background in CS 
              (or maybe haven’t taken any CS classes but have a little coding experience)
            </TrackDescription>
          </Track>
          <Track>
            <TrackHeader>Chrysalis</TrackHeader>
            <TrackDescription>
              For students who have completed OOD and have either taken or are taking Algo. 
              Students might be applying for their first co-op, just started one, or completed 
              a co-op that didn’t involve web-development work.
            </TrackDescription>
          </Track>
          <Track>
            <TrackHeader>Butterfly/Moth</TrackHeader>
            <TrackDescription>
              For students who have developed a frontend or backend for a web application, 
              especially those who have experience with it from a co-op or an internship. 
              This is especially true if you have experience with the tools we use for our 
              projects like React and Node.
            </TrackDescription>
          </Track>
        </TracksContainer>
        <RecruitingProcess />
    </RecruitingSection>
  )
}

export default Recruiting;
